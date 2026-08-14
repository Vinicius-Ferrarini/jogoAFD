// @ts-check
import { test, expect } from '@playwright/test';

// Fase 2 do conserto de escala: em monitores maiores que a largura de projeto
// (~1366px CSS), o hook useAutoZoom (src/hooks/useAutoZoom.js) aplica
// `document.documentElement.style.zoom` proporcional a window.innerWidth,
// automatizando o zoom manual que o usuário antes precisava aplicar no
// navegador. Estes testes cobrem o cálculo do fator e a não-regressão do
// mecanismo de coordenadas do canvas (getBoundingClientRect()-based), sem
// depender de percepção visual humana.

test.describe('Auto-zoom — cálculo do fator por largura de viewport', () => {

  test('1366px (largura de projeto): zoom permanece em 1', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto('/');
    await page.waitForTimeout(300);
    const zoom = await page.evaluate(() => getComputedStyle(document.documentElement).zoom);
    expect(Number(zoom)).toBeCloseTo(1, 2);
  });

  test('1920x1080: zoom escala proporcionalmente a innerWidth/1366', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForTimeout(300);
    const zoom = await page.evaluate(() => getComputedStyle(document.documentElement).zoom);
    expect(Number(zoom)).toBeCloseTo(1920 / 1366, 2);
  });

  test('viewport muito maior que o teto (ex.: 8K): zoom é clampado em 2', async ({ page }) => {
    await page.setViewportSize({ width: 3840, height: 2160 });
    await page.goto('/');
    await page.waitForTimeout(300);
    const zoom = await page.evaluate(() => getComputedStyle(document.documentElement).zoom);
    expect(Number(zoom)).toBeLessThanOrEqual(2);
    expect(Number(zoom)).toBeCloseTo(2, 2);
  });

  test('viewport de celular (480px): zoom não é aplicado, media queries de encolhimento seguem livres', async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 800 });
    await page.goto('/');
    await page.waitForTimeout(300);
    const zoom = await page.evaluate(() => getComputedStyle(document.documentElement).zoom);
    expect(Number(zoom)).toBeCloseTo(1, 2);
  });

  test('resize de 1366 para 1920 recalcula o zoom sem loop (estabiliza no mesmo valor)', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto('/');
    await page.waitForTimeout(200);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(400);
    const zoomAfterDebounce = await page.evaluate(() => getComputedStyle(document.documentElement).zoom);
    await page.waitForTimeout(500);
    const zoomAfterSettle = await page.evaluate(() => getComputedStyle(document.documentElement).zoom);
    expect(zoomAfterDebounce).toBe(zoomAfterSettle);
  });

});

test.describe('Auto-zoom — página inicial permanece funcional em 1920x1080', () => {

  test('MainMenu carrega e botão principal é clicável sob auto-zoom', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'TuringLab' })).toBeVisible();
    const startBtn = page.getByRole('button', { name: /Começar Aventura/i });
    await expect(startBtn).toBeVisible();
    await startBtn.click();
    await expect(page.getByText('Autômatos Finitos')).toBeVisible();
  });

});

test.describe('Auto-zoom — mecanismo de coordenadas do canvas permanece correto', () => {

  // Reproduz a fórmula usada em src/modules/afd/components/CanvasArea.jsx
  // (pxFromEvent): coordenadas normalizadas via getBoundingClientRect(), que
  // reflete tanto o zoom de documento (novo) quanto o zoom interno do canvas
  // via transform:scale() (já existente). Um clique no centro de um elemento
  // deve normalizar para o mesmo ponto relativo independente do zoom de
  // documento aplicado.
  test('getBoundingClientRect() normaliza cliques corretamente sob document zoom', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.setContent(`
      <html><body style="margin:0">
        <div id="inner" style="position:absolute; left:100px; top:80px; width:400px; height:300px; background:#eee;"></div>
        <script>
          window.__clicks = [];
          document.getElementById('inner').addEventListener('click', (e) => {
            const el = e.currentTarget;
            const r = el.getBoundingClientRect();
            const INNER_W = 8000, INNER_H = 8000;
            window.__clicks.push({
              x: ((e.clientX - r.left) / r.width) * INNER_W,
              y: ((e.clientY - r.top) / r.height) * INNER_H,
            });
          });
        </script>
      </body></html>
    `);

    const inner = page.locator('#inner');

    const boxNoZoom = await inner.boundingBox();
    await page.mouse.click(boxNoZoom.x + boxNoZoom.width / 2, boxNoZoom.y + boxNoZoom.height / 2);

    await page.evaluate(() => { document.documentElement.style.zoom = '140.556%'; });
    await page.waitForTimeout(50);

    const boxWithZoom = await inner.boundingBox();
    await page.mouse.click(boxWithZoom.x + boxWithZoom.width / 2, boxWithZoom.y + boxWithZoom.height / 2);

    const [clickNoZoom, clickWithZoom] = await page.evaluate(() => window.__clicks);

    // Ambos os cliques miram o centro do elemento — a coordenada normalizada
    // deve ser ~4000,4000 (metade de INNER_W/INNER_H) nos dois casos. Uma
    // tolerância de 40 unidades (0.5% do espaço 8000px) cobre sub-pixel
    // rounding; um bug real de normalização produziria um offset
    // proporcional ao fator de zoom (~40%), não ~0.5%.
    expect(Math.abs(clickNoZoom.x - clickWithZoom.x)).toBeLessThan(40);
    expect(Math.abs(clickNoZoom.y - clickWithZoom.y)).toBeLessThan(40);
    expect(clickNoZoom.x).toBeCloseTo(4000, -1);
    expect(clickNoZoom.y).toBeCloseTo(4000, -1);
  });

});
