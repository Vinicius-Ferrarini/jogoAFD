// @ts-check
// Borracha por SÍMBOLO no AFD Parte 1: numa seta com vários símbolos
// (q0 --a,b--> q1, um único arco com os chips "a" e "b"), clicar num chip no
// modo 🗑 Apagar remove SÓ aquele símbolo. Só quando sobra o último símbolo é
// que a seta inteira some. Antes, qualquer clique no rótulo apagava a seta com
// todos os símbolos de uma vez.
import { test, expect } from '@playwright/test';

async function goToAFD1(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Autômatos Finitos/i }).click();
  await page.getByRole('button', { name: /Desenhar & Formalizar/i }).click();
}

const clickCanvasAt = (page, x, y) =>
  page.locator('.canvas-inner').click({ position: { x, y } });

test('🗑 Apagar remove um símbolo por vez de uma seta multi-símbolo', async ({ page }) => {
  await goToAFD1(page);
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
  await page.locator('.menu-btn.primary:not([disabled])').first().click(); // L05

  const wordInput = page.locator('.word-input');
  await wordInput.waitFor({ timeout: 8000 });
  await wordInput.fill('a');
  await wordInput.press('Enter'); // descobre a menor palavra → destrava o tabuleiro
  await page.getByRole('button', { name: /Validar Desenho do AFD/i }).waitFor({ timeout: 8000 });

  // q0 --?--> q1
  await page.locator('.card[data-icon="◯"]').click();
  await clickCanvasAt(page, 150, 150);
  await clickCanvasAt(page, 360, 150);
  const nodes = page.locator('.canvas-inner .node');
  await expect(nodes).toHaveCount(2);
  await page.locator('.card[data-icon="↗"]').click();
  await nodes.nth(0).click();
  await nodes.nth(1).click();

  // símbolo "a" (input abre focado) + símbolo "b" (botão ＋)
  const chipInput = page.locator('.transition-chip-input');
  await chipInput.waitFor({ timeout: 4000 });
  await chipInput.fill('a');
  await chipInput.press('Enter');
  await page.locator('.afd-tl-add').click();
  await page.locator('.transition-chip-input').fill('b');
  await page.locator('.transition-chip-input').press('Enter');

  const chips = page.locator('.transition-chips .transition-chip');
  await expect(chips).toHaveText(['a', 'b']);
  await expect(page.locator('.transition-line')).toHaveCount(1);

  // 🗑 Apagar → clica no chip "a": some só ele, a seta continua (com "b")
  await page.locator('.card[data-icon="🗑"]').click();
  await page.locator('.transition-chips .transition-chip', { hasText: /^a$/ }).click();
  await expect(chips).toHaveText(['b']);
  await expect(page.locator('.transition-line')).toHaveCount(1);

  // clica no último chip "b": agora sim a seta inteira some
  await page.locator('.transition-chips .transition-chip', { hasText: /^b$/ }).click();
  await expect(page.locator('.transition-line')).toHaveCount(0);
  await expect(page.locator('.transition-label')).toHaveCount(0);
});
