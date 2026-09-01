// @ts-check
// "trace-on-failure" da MT Reconhecedora (mesmo espírito do AFD/AP — ver ADR
// 0010): quando o "✓ Validar MT" falha por causa de uma PALAVRA concreta
// (contraexemplo do fuzzTMRecognizer — loop / aceita indevidamente / não
// aceita), o MTSimPanel abre sozinho já simulando essa palavra contra a MT do
// aluno, além do toast. Falhas ESTRUTURAIS (sem estado inicial/final,
// não-determinismo) continuam só com o toast.
import { test, expect } from '@playwright/test';

async function goToMTRecon(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Máquinas de Turing/i }).click();
  await page.getByRole('button', { name: /Reconhecedora/i }).click();
}

const clickCanvasAt = (page, x, y) =>
  page.locator('.canvas-inner').click({ position: { x, y } });

// Abre o 1º nível (MT_RECON_L1 = { aⁿbⁿ }, menor palavra = λ), destrava o
// tabuleiro (confirma o campo vazio) e devolve o input de palavra.
async function unlockL1(page) {
  await goToMTRecon(page);
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
  await page.locator('.menu-btn.primary:not([disabled])').first().click();

  const wordInput = page.locator('.word-input');
  await wordInput.waitFor({ timeout: 8000 });
  await wordInput.fill('');            // menor palavra de aⁿbⁿ é λ
  await page.locator('.add-test-btn').first().click();
  await page.getByRole('button', { name: /Validar MT/i }).waitFor({ timeout: 8000 });
  return { wordInput };
}

// Adiciona 1 estado no canvas e devolve o locator dos nós.
async function addOneState(page) {
  await page.locator('.card[data-icon="◯"]').click();   // "Novo Estado" → ADD_NODE
  await clickCanvasAt(page, 200, 180);
  const nodes = page.locator('.canvas-inner .node');
  await expect(nodes).toHaveCount(1);
  return nodes;
}

test.describe('MT Reconhecedora — simulação abre sozinha na palavra que falhou', () => {

  test('contraexemplo concreto: Validar falho abre o MTSimPanel na palavra', async ({ page }) => {
    await unlockL1(page);

    // MT quebrada: um único estado inicial + final, sem nenhuma transição —
    // para de cara num estado final, então "aceita" qualquer entrada. A 1ª
    // palavra de rejectedWords que ela aceita indevidamente vira o
    // contraexemplo ("a", que não pertence a aⁿbⁿ).
    const nodes = await addOneState(page);
    await page.locator('.card[data-icon="▶"]').click();   // Estado Inicial
    await nodes.first().click();
    await page.locator('.card[data-icon="◎"]').click();   // Definir Final
    await nodes.first().click();

    await page.getByRole('button', { name: /Validar MT/i }).click();

    const sim = page.locator('.sim-panel-container');
    await expect(sim).toBeVisible({ timeout: 4000 });
    // Banner do painel traz a explicação do erro e a palavra que falhou.
    const banner = sim.locator('.ap-simp-banner');
    await expect(banner).toContainText(/Falhou em "a"/);
    await expect(banner).toContainText(/aceita "a" indevidamente/i);
    // Painel está simulando exatamente o contraexemplo.
    await expect(sim.locator('.sim-word-display')).toHaveText('a');
  });

  test('falha estrutural (sem estado final): só toast, sem abrir o painel', async ({ page }) => {
    await unlockL1(page);

    const nodes = await addOneState(page);
    await page.locator('.card[data-icon="▶"]').click();   // só inicial, sem final
    await nodes.first().click();

    await page.getByRole('button', { name: /Validar MT/i }).click();

    // Toast de erro estrutural aparece…
    await expect(page.locator('.toast-notification.error')).toContainText(/estado final/i);
    // …e o MTSimPanel NÃO abre.
    await expect(page.locator('.sim-panel-container')).toHaveCount(0);
  });

});
