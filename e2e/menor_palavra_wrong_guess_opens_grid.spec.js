// @ts-check
// Fase "descubra a menor palavra": chutar (e errar) no campo lateral, ANTES de
// clicar em 💡 Dica, já abre a grade PREENCHÍVEL no centro (dica de tamanho
// auto-ativada) — o aluno não precisa clicar em Dica pra continuar tentando ali.
import { test, expect } from '@playwright/test';

async function goToAFD1(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Autômatos Finitos/i }).click();
  await page.getByRole('button', { name: /Desenhar & Formalizar/i }).click();
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
  await page.locator('.menu-btn.primary:not([disabled])').first().click(); // L05: menor palavra "a"
}

test('AFD: chute errado no campo lateral abre a grade preenchível sem clicar em Dica', async ({ page }) => {
  await goToAFD1(page);

  const overlay = page.locator('.locked-overlay');
  await expect(overlay).toBeVisible();
  // Nada de grade ainda — nunca cliquei em Dica nem tentei nada.
  await expect(overlay.locator('input')).toHaveCount(0);

  // Chuto "b" no campo lateral (tamanho certo, palavra errada — L05 = aⁿ).
  const wordInput = page.locator('.word-input');
  await wordInput.fill('b');
  await wordInput.press('Enter');

  // Sem ter tocado em 💡 Dica: a grade abriu COM célula preenchível (hintStage
  // foi pra 1 sozinho) e mostra a tentativa errada.
  await expect(overlay.locator('input')).toHaveCount(1); // "a" tem 1 letra
  await expect(overlay).toContainText(/menor palavra tem tamanho 1/i);
  await expect(page.locator('.word-row.wrong', { hasText: 'b' })).toBeVisible();

  // Consigo seguir digitando direto na grade → acerta "a" → destrava.
  await overlay.locator('input').first().press('a');
  await expect(page.locator('.locked-overlay')).toHaveCount(0, { timeout: 4000 });
});

test('AP: chute errado abre a grade preenchível sem clicar em Dica', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Autômatos com Pilha/i }).click();
  await page.locator('.menu-btn.primary').first().click(); // L1 = { aⁿbⁿ } → alvo "ab"
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });

  const overlay = page.locator('.locked-overlay');
  await expect(overlay.locator('input')).toHaveCount(0);

  const wordInput = page.locator('.word-input');
  await wordInput.fill('ba'); // 2 letras (tamanho certo), palavra errada
  await wordInput.press('Enter');

  await expect(overlay.locator('input')).toHaveCount(2); // grade abriu preenchível
  await expect(page.locator('.word-row.wrong', { hasText: 'ba' })).toBeVisible();
});

test('MT Recon: chute errado abre a grade preenchível sem clicar em Dica', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Máquinas de Turing/i }).click();
  await page.getByRole('button', { name: /Reconhecedora/i }).click();
  await page.locator('.menu-btn.primary:not([disabled])').first().click(); // L1 → alvo "ab"
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });

  const overlay = page.locator('.locked-overlay');
  await expect(overlay.locator('input')).toHaveCount(0);

  const wordInput = page.locator('.word-input');
  await wordInput.fill('ba');
  await wordInput.press('Enter');

  await expect(overlay.locator('input')).toHaveCount(2);
  await expect(page.locator('.word-row.wrong', { hasText: 'ba' })).toBeVisible();
});
