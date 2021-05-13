import { newE2EPage } from '@stencil/core/testing';

describe('content-element-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-element-wrapper></content-element-wrapper>');

    const element = await page.find('content-element-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
