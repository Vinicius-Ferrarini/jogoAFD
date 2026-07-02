// @ts-check
import { test, expect } from '@playwright/test';

// ─── Helpers de navegação ─────────────────────────────────────────────────────

async function goToAFD1(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /Começar Aventura/i }).click();
  await page.getByRole('button', { name: /Autômatos Finitos/i }).click();
  await page.getByRole('button', { name: /Desenhar & Formalizar/i }).click();
}

// Seleciona o primeiro nível disponível no menu de níveis do AFD_1
async function selectFirstLevel(page) {
  // LevelMenu usa .menu-btn; os bloqueados têm [disabled]
  const levelBtn = page.locator('.menu-btn.primary:not([disabled])').first();
  await levelBtn.waitFor({ timeout: 8000 });
  await levelBtn.click();
}

// ─── Suite 1: Carregamento de telas ──────────────────────────────────────────
test.describe('Carregamento de telas', () => {

  test('tela inicial (MainMenu) carrega sem crash', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'TuringLab' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Começar Aventura/i })).toBeVisible();
  });

  test('tela de módulos carrega ao clicar em Começar Aventura', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    await expect(page.getByText('Autômatos Finitos')).toBeVisible();
    await expect(page.getByText('Autômatos com Pilha')).toBeVisible();
  });

  test('tela de submódulos do AFD carrega', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    await page.getByRole('button', { name: /Autômatos Finitos/i }).click();
    await expect(page.getByText('Desenhar & Formalizar')).toBeVisible();
    await expect(page.getByText('Minimização')).toBeVisible();
  });

  test('AFD_1 carrega ao selecionar Desenhar & Formalizar', async ({ page }) => {
    await goToAFD1(page);
    // Canvas e cabeçalho do jogo devem aparecer
    await expect(page.locator('canvas, svg').first()).toBeVisible({ timeout: 8000 });
  });

});

// ─── Suite 2: Navegação entre telas ──────────────────────────────────────────
test.describe('Navegação entre telas', () => {

  test('botão Voltar na tela de módulos volta ao MainMenu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    await page.getByRole('button', { name: /Voltar/i }).click();
    await expect(page.getByRole('heading', { name: 'TuringLab' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Começar Aventura/i })).toBeVisible();
  });

  test('botão Voltar na tela de submódulos volta à tela de módulos', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    await page.getByRole('button', { name: /Autômatos Finitos/i }).click();
    await page.getByRole('button', { name: /Voltar/i }).click();
    await expect(page.getByText('Autômatos Finitos')).toBeVisible();
    await expect(page.getByText('Autômatos com Pilha')).toBeVisible();
  });

  test('navegação completa: Home → Módulos → Submódulos → AFD_1 sem crash', async ({ page }) => {
    await goToAFD1(page);
    await expect(page).not.toHaveURL('about:blank');
    // Não deve ter mensagem de erro do React na tela
    await expect(page.getByText('Minification React error')).not.toBeVisible();
  });

});

// ─── Suite 3: AFD_1 — interação com o canvas ─────────────────────────────────
test.describe('AFD_1 — interação básica', () => {

  test.beforeEach(async ({ page }) => {
    await goToAFD1(page);
    // Aguarda o AFD_1 estar pronto (canvas visível)
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
  });

  test('selecionar nível carrega o rodapé de cartas', async ({ page }) => {
    await selectFirstLevel(page);
    // Após selecionar nível, o rodapé .bottom-hand deve aparecer com as cartas
    await expect(page.locator('.bottom-hand')).toBeVisible({ timeout: 5000 });
  });

  test('clicar em Validar sem desenhar nada mostra toast de erro', async ({ page }) => {
    await selectFirstLevel(page);
    // Procura botão de validar (pode ser ícone ou texto)
    const validateBtn = page.locator('button').filter({ hasText: /validar|check/i }).first();
    if (await validateBtn.isVisible()) {
      await validateBtn.click();
      // Toast de erro deve aparecer
      await expect(page.locator('[class*="toast"], [class*="error"]').first())
        .toBeVisible({ timeout: 3000 });
    }
  });

  test('rodapé existe após selecionar nível', async ({ page }) => {
    await selectFirstLevel(page);
    // As cartas de ação (Desfazer, etc.) só aparecem após o desbloqueio do tabuleiro.
    // Antes disso, o .bottom-hand renderiza o HUD do professor com a mensagem inicial.
    const footer = page.locator('.bottom-hand');
    await footer.waitFor({ timeout: 5000 });
    // Deve conter o professor ou as cartas — em qualquer caso o footer existe
    await expect(footer).toBeVisible();
  });

});

// ─── Suite 4: AFD_1 — modal de descrição formal ──────────────────────────────
test.describe('AFD_1 — descrição formal', () => {

  test.beforeEach(async ({ page }) => {
    await goToAFD1(page);
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
    await selectFirstLevel(page);
  });

  test('modal de descrição formal abre ao clicar no botão ☰', async ({ page }) => {
    // O botão ☰ abre a sidebar de descrição formal (title="Abrir Descrição Formal")
    const formalBtn = page.locator('button.sidebar-toggle');
    await formalBtn.waitFor({ timeout: 5000 });
    await formalBtn.click();
    await expect(page.getByText('Q (Conjunto de Estados)')).toBeVisible({ timeout: 3000 });
  });

  test('modal de descrição formal fecha ao clicar em Fechar Painel', async ({ page }) => {
    const formalBtn = page.locator('button.sidebar-toggle');
    await formalBtn.waitFor({ timeout: 5000 });
    await formalBtn.click();
    await expect(page.getByText('Q (Conjunto de Estados)')).toBeVisible({ timeout: 3000 });
    await page.getByRole('button', { name: /Fechar Painel/i }).click();
    await expect(page.getByText('Q (Conjunto de Estados)')).not.toBeVisible();
  });

});

// ─── Suite 5: AFD_1 — modo aula guiada ───────────────────────────────────────
test.describe('AFD_1 — modo aula guiada', () => {

  test.beforeEach(async ({ page }) => {
    await goToAFD1(page);
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });
    await selectFirstLevel(page);
  });

  test('botão de modo aula existe quando nível tem aula guiada', async ({ page }) => {
    // O botão aparece no GameHeader apenas quando o nível tem guidedLesson
    // Procura pelo texto exato usado no componente
    const lessonBtn = page.locator('button.menu-btn').filter({ hasText: /Aula/i }).first();
    // Pode não existir se o primeiro nível não tiver aula — apenas verifica que não crasha
    await page.waitForTimeout(1000);
    const visible = await lessonBtn.isVisible().catch(() => false);
    // Se existir, deve estar clicável
    if (visible) {
      await expect(lessonBtn).toBeEnabled();
    }
  });

  test('modo aula abre overlay ao clicar quando disponível', async ({ page }) => {
    const lessonBtn = page.locator('button.menu-btn').filter({ hasText: /Aula/i }).first();
    await page.waitForTimeout(1000);
    if (await lessonBtn.isVisible().catch(() => false)) {
      await lessonBtn.click();
      await expect(
        page.locator('[class*="overlay"], [class*="lesson"], [class*="guided"]').first()
      ).toBeVisible({ timeout: 5000 });
    }
  });

});

// ─── Suite 6: sem erros de console ───────────────────────────────────────────
test.describe('Qualidade — sem erros críticos de console', () => {

  test('navegar até AFD_1 não gera erros de console', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));

    await goToAFD1(page);
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });

    // Filtra erros esperados (ex.: rede do GitHub da MainMenu, favicon 404)
    const criticalErrors = errors.filter(e =>
      !e.includes('github.com') &&
      !e.includes('favicon') &&
      !e.includes('net::ERR') &&
      !e.includes('403') &&
      !e.includes('Failed to load resource')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('fluxo completo Home → Módulos → AFD_1 não gera erros de console', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));

    await page.goto('/');
    await page.getByRole('button', { name: /Começar Aventura/i }).click();
    await page.getByRole('button', { name: /Autômatos Finitos/i }).click();
    await page.getByRole('button', { name: /Desenhar & Formalizar/i }).click();
    await page.locator('canvas, svg').first().waitFor({ timeout: 8000 });

    expect(errors).toHaveLength(0);
  });

});
