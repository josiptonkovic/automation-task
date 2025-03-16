import { expect, test } from '@playwright/test';
import { MapsPage } from '../Pages/mapsPage';

test.describe('Verify Search Functionality', () => {

  test('Search for location with keywords', async ({ page }) => {
    const maps = new MapsPage(page);
    await maps.visitPage();
    await maps.rejectCookies();
    await maps.searchLocation('Verne Buzin');
    await maps.verifyLocation('Ul. Buzinski krči 3B, 10010, Buzin');
  });
    
});
