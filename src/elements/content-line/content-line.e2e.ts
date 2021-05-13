import { newE2EPage } from '@stencil/core/testing';

describe('content-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<content-text></content-text>');
    const element = await page.find('content-text');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
