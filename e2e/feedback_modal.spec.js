// @ts-check
import { test, expect } from '@playwright/test';

// Cada teste roda em contexto isolado (localStorage limpo). O FAB de feedback
// aparece na tela de MÓDULOS, então cada teste passa pela HOME → "Começar Aventura".
// Foco no comportamento de UI/UX (como o consent_gate.spec.js) — o envio REAL ao
// Firestore é validado à parte, no navegador.

const CONSENT_KEY  = 'turinglab_consent_accepted';
const SHOWN_KEY    = 'turinglab_feedback_shown_once';
const DONE_KEY     = 'turinglab_feedback_respondido';
const COUNT_KEY    = 'turinglab_feedback_count';
const PROGRESS_KEY = 'turinglab_progress';

const card    = (page) => page.locator('.fb-card');
const fab     = (page) => page.getByRole('button', { name: /Dar Feedback/i });
const enviar  = (page) => page.getByRole('button', { name: /Enviar avaliação/i });
const ls      = (page, k) => page.evaluate((key) => localStorage.getItem(key), k);

// HOME → tela de módulos (onde o FAB de feedback é renderizado).
async function gotoModules(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await expect(fab(page)).toBeVisible();
}

test.describe('FeedbackModal — balão de feedback (Fase 6)', () => {

  test('o FAB abre o modal de feedback (formulário)', async ({ page }) => {
    await gotoModules(page);
    await fab(page).click();
    await expect(card(page)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Como foi sua experiência/i })).toBeVisible();
    // Começa sem nenhuma estrela marcada → Enviar desabilitado.
    await expect(enviar(page)).toBeDisabled();
  });

  test('escolher uma nota (estrela) habilita o botão Enviar', async ({ page }) => {
    await gotoModules(page);
    await fab(page).click();
    await expect(enviar(page)).toBeDisabled();
    await page.locator('.fb-star').nth(3).click(); // 4 estrelas
    await expect(enviar(page)).toBeEnabled();
  });

  test('fechar no ✕ oculta o modal', async ({ page }) => {
    await gotoModules(page);
    await fab(page).click();
    await expect(card(page)).toBeVisible();
    await page.locator('.fb-close').click();
    await expect(card(page)).toHaveCount(0);
  });

  test('sem consentimento, enviar mostra aviso e NÃO marca como respondido', async ({ page }) => {
    await gotoModules(page); // contexto novo = sem consentimento
    await fab(page).click();
    await page.locator('.fb-star').nth(4).click(); // 5 estrelas
    await enviar(page).click();
    // submitFeedback é gated por consentimento (igual ao logEvent): retorna cedo,
    // sem gravar, e o modal mostra o aviso — continua no formulário (não confirma envio).
    await expect(page.locator('.fb-error')).toBeVisible();
    await expect(page.getByRole('heading', { name: /enviada/i })).toHaveCount(0);
    await expect(page.locator('.fb-star')).toHaveCount(5); // segue no formulário
    expect(await ls(page, DONE_KEY)).toBeNull();
  });

  test('já enviou antes: FAB indica "enviado" e reabrir mostra o formulário (pode enviar de novo)', async ({ page }) => {
    await page.goto('/');
    // Semeia "já respondeu 2 avaliações" antes de o app montar.
    await page.evaluate(([d, c]) => {
      localStorage.setItem(d, 'true');
      localStorage.setItem(c, '2');
    }, [DONE_KEY, COUNT_KEY]);
    await page.reload();
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    // Respondido → aria-label do FAB indica "já enviado" (vira o nome acessível).
    const enviado = page.getByRole('button', { name: /Feedback já enviado/i });
    await expect(enviado).toBeVisible();
    await enviado.click();
    // NÃO trava mais em "obrigado": reabre o formulário para enviar OUTRA avaliação.
    await expect(page.getByRole('heading', { name: /Como foi sua experiência/i })).toBeVisible();
    await expect(page.locator('.fb-star')).toHaveCount(5);
    // A nota indica que a próxima será a de número 3.
    await expect(page.locator('.fb-note')).toContainText('número 3');
  });

  test('popup automático 1x ao SAIR de uma fase (com consentimento + fase concluída)', async ({ page }) => {
    await page.goto('/');
    // Semeia consentimento + 1 fase concluída ANTES de o app montar.
    await page.evaluate(([c, p]) => {
      localStorage.setItem(c, 'true');
      localStorage.setItem(p, JSON.stringify({ 'ap-L01': { stars: 3, timestamp: Date.now() } }));
    }, [CONSENT_KEY, PROGRESS_KEY]);
    await page.reload();

    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    // Entra no módulo AP (DIRECT_GAME → vai direto pra tela do jogo)...
    await page.getByRole('button', { name: /Autômatos com Pilha/i }).click();
    // ...e volta (onBack = goModules), saindo da fase → dispara o popup.
    await page.locator('.back-btn').first().click();

    await expect(card(page)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Como foi sua experiência/i })).toBeVisible();
    expect(await ls(page, SHOWN_KEY)).toBe('true');
  });

  test('popup automático NÃO dispara sem fase concluída', async ({ page }) => {
    await page.goto('/');
    await page.evaluate((c) => localStorage.setItem(c, 'true'), CONSENT_KEY);
    await page.reload();
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    await page.getByRole('button', { name: /Autômatos com Pilha/i }).click();
    await page.locator('.back-btn').first().click();
    // Sem nenhuma fase em progress, o popup forçado não aparece.
    await expect(card(page)).toHaveCount(0);
    expect(await ls(page, SHOWN_KEY)).toBeNull();
  });

});
