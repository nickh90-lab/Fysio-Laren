import { test, expect } from '@playwright/test';

test('Homepage with 12 balloons', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: '/Users/nickhospers/.gemini/antigravity/brain/11fae26d-44ff-4ee9-bfb9-fa19e11b242f/homepage_12_balloons.png', fullPage: true });
});

test('Fysiotherapie page with 12/20 grids', async ({ page }) => {
    await page.goto('http://localhost:3000/fysiotherapie');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: '/Users/nickhospers/.gemini/antigravity/brain/11fae26d-44ff-4ee9-bfb9-fa19e11b242f/fysiotherapie_12_20_grids.png', fullPage: true });
});
