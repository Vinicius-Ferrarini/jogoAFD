// @ts-check
// A fase "descubra a menor palavra" da MT Reconhecedora agora é a MESMA do
// AFD/AP: grade estilo Termo, dica em 2 estágios (tamanho → letras) SEM
// precisar chutar antes, Maurílio ancorado à esquerda quando a grade aparece.
import { test, expect } from '@playwright/test';

async function goToMTRecon(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Máquinas de Turing/i }).click();
  await page.getByRole('button', { name: /Reconhecedora/i }).click();
  await page.locator('.menu-btn.primary:not([disabled])').first().click(); // L1 = { aⁿbⁿ } → menor jogável "ab"
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
}

test('MT Recon: dica de menor palavra abre a grade sem chute prévio (igual AFD)', async ({ page }) => {
  await goToMTRecon(page);

  const overlay = page.locator('.locked-overlay');
  await expect(overlay).toBeVisible();
  await expect(overlay).toContainText(/Descubra a Menor Palavra/i);
  await expect(overlay.locator('input')).toHaveCount(0); // sem grade ainda

  const dica = page.getByRole('button', { name: /Dica/i });

  // 1º clique — sem ter chutado nada — revela a GRADE (tamanho).
  await dica.click();
  await expect(overlay.locator('input')).toHaveCount(2); // "ab" tem 2 letras
  await expect(overlay).toContainText(/tem tamanho 2/i);

  // 2º clique — revela o conjunto de letras.
  await dica.click();
  await expect(overlay).toContainText(/Letras da menor palavra/i);

  // Digita "ab" na grade → destrava (após o delay da linha vencedora).
  const cells = overlay.locator('input');
  await cells.nth(0).press('a');
  await cells.nth(1).press('b');

  await expect(page.locator('.locked-overlay')).toHaveCount(0, { timeout: 4000 });
  await expect(page.getByText('Novo Estado', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /Validar MT/i })).toBeVisible();
});
