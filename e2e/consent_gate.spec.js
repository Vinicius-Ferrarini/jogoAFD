// @ts-check
import { test, expect } from '@playwright/test';

// Cada teste do Playwright roda em um contexto isolado (localStorage limpo),
// então o estado "sem consentimento prévio" já é o padrão no início de cada teste.

const CONSENT_KEY = 'turinglab_consent_accepted';
const banner = (page) => page.locator('.consent-banner');
const consentFlag = (page) => page.evaluate((k) => localStorage.getItem(k), CONSENT_KEY);

test.describe('ConsentGate — banner de consentimento', () => {

  test('aparece quando não há consentimento prévio, sem bloquear o menu', async ({ page }) => {
    await page.goto('/');
    await expect(banner(page)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Aceito' })).toBeVisible();
    // Não bloqueante: o menu segue visível/clicável por trás do banner.
    await expect(page.getByRole('heading', { name: 'TuringLab' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Começar Aventura/i })).toBeVisible();
    // Ainda não gravou consentimento.
    expect(await consentFlag(page)).toBeNull();
  });

  test('clicar em "Aceito" grava o consentimento e remove o banner', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Aceito' }).click();
    await expect(banner(page)).toHaveCount(0);
    // "Aceito" é o gatilho do consentimento (o que libera a coleta no logEvent).
    expect(await consentFlag(page)).toBe('true');
  });

  test('após aceitar, recarregar não mostra o banner de novo', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Aceito' }).click();
    await expect(banner(page)).toHaveCount(0);
    await page.reload();
    await expect(page.getByRole('button', { name: /Começar Aventura/i })).toBeVisible();
    await expect(banner(page)).toHaveCount(0);
    expect(await consentFlag(page)).toBe('true');
  });

  test('"✕" só oculta o banner e NÃO conta como consentimento (volta no reload)', async ({ page }) => {
    await page.goto('/');
    await expect(banner(page)).toBeVisible();
    await page.getByRole('button', { name: /Fechar sem aceitar/i }).click();
    await expect(banner(page)).toHaveCount(0);
    // Fechar no ✕ NÃO grava consentimento.
    expect(await consentFlag(page)).toBeNull();
    // Como não é consentimento (só oculta na sessão), reaparece ao recarregar.
    await page.reload();
    await expect(banner(page)).toBeVisible();
    expect(await consentFlag(page)).toBeNull();
  });

});
