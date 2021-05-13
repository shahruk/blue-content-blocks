import { newE2EPage } from '@stencil/core/testing';

describe('content-block-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-block-wrapper></content-block-wrapper>');

    const element = await page.find('content-block-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
