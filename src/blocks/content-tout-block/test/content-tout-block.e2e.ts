import { newE2EPage } from '@stencil/core/testing';

describe('content-tout-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-tout-block></content-tout-block>');

    const element = await page.find('content-tout-block');
    expect(element).toHaveClass('hydrated');
  });
});
