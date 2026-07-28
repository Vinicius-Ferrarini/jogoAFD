// @ts-check
import { test, expect } from '@playwright/test';

// ─── Helpers de navegação ─────────────────────────────────────────────────────
// AP pula a tela de submódulos (DIRECT_GAME = { ap: 'ap-pilha' } em App.jsx) —
// diferente do AFD, "Autômatos com Pilha" já leva direto pra grade de níveis.

async function goToAP(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Autômatos com Pilha/i }).click();
}

// Seleciona o primeiro nível disponível na grade do AP (.menu-btn.primary)
async function selectFirstLevel(page) {
  const levelBtn = page.locator('.menu-btn.primary').first();
  await levelBtn.waitFor({ timeout: 8000 });
  await levelBtn.click();
}

// ─── Suite 1: Carregamento de telas ──────────────────────────────────────────
test.describe('AP — Carregamento de telas', () => {

  test('grade de níveis do AP carrega ao clicar em Autômatos com Pilha', async ({ page }) => {
    await goToAP(page);
    await expect(page.getByText('Autômato com Pilha')).toBeVisible({ timeout: 8000 });
    await expect(page.locator('.menu-btn.primary').first()).toBeVisible();
  });

  test('AP carrega o canvas ao selecionar um nível', async ({ page }) => {
    await goToAP(page);
    await selectFirstLevel(page);
    await expect(page.locator('canvas, svg').first()).toBeVisible({ timeout: 8000 });
  });

});

// ─── Suite 2: Navegação ───────────────────────────────────────────────────────
test.describe('AP — Navegação', () => {

  test('botão Voltar na grade de níveis volta à tela de módulos', async ({ page }) => {
    await goToAP(page);
    await page.getByRole('button', { name: /Voltar/i }).click();
    await expect(page.getByText('Autômatos Finitos')).toBeVisible();
    await expect(page.getByText('Autômatos com Pilha')).toBeVisible();
  });

  test('fluxo completo Home → Módulos → AP não gera erros de console', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await goToAP(page);
    await selectFirstLevel(page);
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });

    expect(errors).toHaveLength(0);
  });

});

// ─── Suite 3: Modo Aula — grafo aparece e cresce na tela ─────────────────────
test.describe('AP — Modo Aula guiada', () => {

  test.beforeEach(async ({ page }) => {
    await goToAP(page);
    await selectFirstLevel(page);
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
  });

  test('botão de Aula existe e é clicável', async ({ page }) => {
    const lessonBtn = page.locator('button').filter({ hasText: /Aula/i }).first();
    await expect(lessonBtn).toBeVisible({ timeout: 5000 });
    await expect(lessonBtn).toBeEnabled();
  });

  test('abrir a Aula mostra o painel guiado (quadro de palavras) na tela', async ({ page }) => {
    const lessonBtn = page.locator('button').filter({ hasText: /Aula/i }).first();
    await lessonBtn.click();
    // Painel da aula guiada (APBlackboardPanel) reusa .blackboard-panel do AFD.
    await expect(page.locator('.blackboard-panel')).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('MODO AULA', { exact: false })).toBeVisible();
  });

  test('grafo da aula cresce conforme os passos avançam', async ({ page }) => {
    const lessonBtn = page.locator('button').filter({ hasText: /Aula/i }).first();
    await lessonBtn.click();
    await page.locator('.blackboard-panel').waitFor({ timeout: 5000 });

    // No 1º passo (estados só, ainda sem transições) não há nenhum chip de
    // tripla no grafo; depois de avançar alguns passos, pelo menos um chip
    // (.ap-tl-chip) deve ter aparecido — prova visual de que o grafo da aula
    // está de fato na tela e reage aos passos, não só o texto do professor.
    const chipsBefore = await page.locator('.ap-tl-chip').count();

    const nextBtn = page.getByText('Próx.', { exact: false });
    for (let i = 0; i < 6; i++) {
      if (await nextBtn.count() === 0) break;
      await nextBtn.click({ force: true });
      await page.waitForTimeout(150);
    }

    const chipsAfter = await page.locator('.ap-tl-chip').count();
    expect(chipsAfter).toBeGreaterThan(chipsBefore);
  });

  test('quadro de palavras-alvo (lousa) aparece durante a aula', async ({ page }) => {
    const lessonBtn = page.locator('button').filter({ hasText: /Aula/i }).first();
    await lessonBtn.click();
    await expect(page.locator('.bp-word-list').first()).toBeVisible({ timeout: 5000 });
    // Pelo menos uma palavra-alvo (ou "λ") listada na lousa.
    await expect(page.locator('.bp-word-list li').first()).toBeVisible();
  });

});

// ─── Suite 4: sem erros de console ────────────────────────────────────────────
test.describe('AP — Qualidade: sem erros críticos de console', () => {

  test('navegar até o AP e abrir a aula não gera erros de console', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await goToAP(page);
    await selectFirstLevel(page);
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });

    const lessonBtn = page.locator('button').filter({ hasText: /Aula/i }).first();
    if (await lessonBtn.isVisible().catch(() => false)) {
      await lessonBtn.click();
      await page.waitForTimeout(500);
    }

    const criticalErrors = errors.filter((e) =>
      !e.includes('github.com') &&
      !e.includes('favicon') &&
      !e.includes('net::ERR') &&
      !e.includes('403') &&
      !e.includes('Failed to load resource')
    );
    expect(criticalErrors).toHaveLength(0);
  });

});
