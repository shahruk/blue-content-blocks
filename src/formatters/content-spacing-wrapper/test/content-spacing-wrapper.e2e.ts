import { newE2EPage } from '@stencil/core/testing';

describe('content-spacing-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-spacing-wrapper></content-spacing-wrapper>');

    const element = await page.find('content-spacing-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
