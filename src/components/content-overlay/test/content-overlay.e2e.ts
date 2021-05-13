import { newE2EPage } from '@stencil/core/testing';

describe('content-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-overlay></content-overlay>');

    const element = await page.find('content-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
