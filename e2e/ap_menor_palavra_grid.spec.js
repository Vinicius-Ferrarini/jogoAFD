// @ts-check
// A fase "descubra a menor palavra" do AP agora é a MESMA do AFD: grade estilo
// Termo, dica em 2 estágios (tamanho → letras) SEM precisar chutar antes,
// Maurílio ancorado à esquerda quando a grade está ativa.
import { test, expect } from '@playwright/test';

async function goToAP(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Fechar sem aceitar/i }).click().catch(() => {});
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Autômatos com Pilha/i }).click();
  await page.locator('.menu-btn.primary').first().click(); // L1 = { aⁿbⁿ } → menor jogável "ab"
  await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
}

test('AP: dica de menor palavra abre a grade sem chute prévio (igual AFD)', async ({ page }) => {
  await goToAP(page);

  const overlay = page.locator('.locked-overlay');
  await expect(overlay).toBeVisible();
  // Estado inicial: balão estático, SEM grade.
  await expect(overlay).toContainText(/Descubra a Menor Palavra/i);
  await expect(overlay.locator('input')).toHaveCount(0);

  const dica = page.getByRole('button', { name: /Dica/i });

  // 1º clique em 💡 Dica — sem ter chutado nada — revela a GRADE (tamanho).
  await dica.click();
  await expect(overlay.locator('input')).toHaveCount(2); // "ab" tem 2 letras
  await expect(overlay).toContainText(/tem tamanho 2/i); // L1 aceita λ → "…2ª menor palavra, tem tamanho 2."

  // 2º clique — revela o conjunto de letras (sem posição).
  await dica.click();
  await expect(overlay).toContainText(/Letras da menor palavra/i);

  // Digita "ab" na grade → destrava o tabuleiro (após o delay da linha vencedora).
  const cells = overlay.locator('input');
  await cells.nth(0).press('a');
  await cells.nth(1).press('b');

  await expect(page.locator('.locked-overlay')).toHaveCount(0, { timeout: 4000 });
  // Deck de cartas do AP aparece = tabuleiro liberado.
  await expect(page.getByText('Novo Estado', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /Validar AP/i })).toBeVisible();
});
