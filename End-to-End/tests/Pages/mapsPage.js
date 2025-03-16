import { expect } from "@playwright/test";

export class MapsPage {

    constructor(page) {
        this.page = page;
        this.pageUrl = '/maps';
        this.rjectBtn = page.getByRole('button', { name: 'Odbij sve' })
        this.searchbar = page.getByRole('combobox');
        this.searchBtn = '#searchbox-searchbutton';
        this.resultAddress = page.getByRole('button', { name: 'adresu: Ul. Buzinski krči 3B' })
    }

    async visitPage() {
        await this.page.goto(this.pageUrl)
    }

    async rejectCookies() {
        await this.rjectBtn.click();
    }

    async searchLocation(term) {
        await this.searchbar.fill(term);
        await this.page.locator(this.searchBtn).click();
    }

    async verifyLocation(address) {
        await expect(this.resultAddress).toContainText(address, { timeout: 10_000 });
        // await expect(this.page.resultAddress).toHaveText(address);
        // await page.verifyLocation('text');
    }
}
