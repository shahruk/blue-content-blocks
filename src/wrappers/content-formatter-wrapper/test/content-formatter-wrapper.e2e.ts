import { newE2EPage } from '@stencil/core/testing';

describe('content-formatter-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-formatter-wrapper></content-formatter-wrapper>');

    const element = await page.find('content-formatter-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
