import { newE2EPage } from '@stencil/core/testing';

describe('content-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-group></content-group>');

    const element = await page.find('content-group');
    expect(element).toHaveClass('hydrated');
  });
});
