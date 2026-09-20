import { test, expect } from '@playwright/test';

const ROUTES = [
    '/',
    '/fysiotherapie',
    '/ons-team',
    '/de-praktijk',
    '/openingstijden',
    '/tarieven',
    '/contact',
    '/afspraak-maken',
    '/gespecialiseerde-groepstraining',
    '/coming-soon',
    '/preview',
];

const DEVICES = [
    { name: 'iPhone 14 (Telefoon)', width: 390, height: 844 },
    { name: 'iPhone SE (Compacte Telefoon)', width: 375, height: 667 },
    { name: 'iPad Mini (Tablet Portret)', width: 768, height: 1024 },
    { name: 'iPad Air (Tablet Landschap)', width: 1180, height: 820 },
    { name: 'Laptop PC (1440x900)', width: 1440, height: 900 },
    { name: 'Desktop PC (1920x1080)', width: 1920, height: 1080 },
];

for (const device of DEVICES) {
    test.describe(`${device.name} Compatibility`, () => {
        test.use({ viewport: { width: device.width, height: device.height } });

        for (const route of ROUTES) {
            test(`Route ${route} should render without errors or horizontal overflow`, async ({ page }) => {
                const consoleErrors: string[] = [];
                page.on('console', msg => {
                    if (msg.type() === 'error') {
                        // Filter out external third-party issues (like Google tag 403 or analytics in test)
                        if (!msg.text().includes('google') && !msg.text().includes('gtm')) {
                            consoleErrors.push(msg.text());
                        }
                    }
                });

                // Set preview cookie
                await page.context().addCookies([
                    {
                        name: 'fysio-preview',
                        value: 'toegang-verleend',
                        domain: 'localhost',
                        path: '/',
                    },
                ]);

                const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });
                expect(response?.status()).toBeLessThan(400);

                // Wait for layout and animations to settle
                await page.waitForTimeout(300);

                // Verify no horizontal overflow causing annoying side-scroll
                const { scrollWidth, clientWidth } = await page.evaluate(() => ({
                    scrollWidth: document.documentElement.scrollWidth,
                    clientWidth: document.documentElement.clientWidth,
                }));

                expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);

                // Verify no critical JavaScript errors
                expect(consoleErrors).toEqual([]);
            });
        }

        // Test mobile menu on mobile and tablet
        if (device.width < 1024) {
            test(`Mobile menu should open and close properly on ${device.name}`, async ({ page }) => {
                await page.context().addCookies([
                    {
                        name: 'fysio-preview',
                        value: 'toegang-verleend',
                        domain: 'localhost',
                        path: '/',
                    },
                ]);

                await page.goto('http://localhost:3000/');
                await page.waitForTimeout(300);

                // Locate hamburger button (button with aria-label="Toggle menu")
                const menuButton = page.locator('button[aria-label="Toggle menu"]');
                await expect(menuButton).toBeVisible();

                await menuButton.click();
                await page.waitForTimeout(400);

                // Verify mobile nav is visible with links
                const teamLink = page.locator('nav a', { hasText: 'Ons team' }).locator('visible=true');
                await expect(teamLink).toBeVisible();

                // Close menu
                await menuButton.click();
                await page.waitForTimeout(400);
            });
        }
    });
}
