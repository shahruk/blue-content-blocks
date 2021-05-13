import { Component, h, Element } from '@stencil/core';
import W3DisclosureButton from './libraries/w3_disclosure_button';

@Component({
  tag: 'content-accordion',
  styleUrl: 'content-accordion.scss',
  shadow: false,
})
export class ContentAccordion {
  @Element() private element: HTMLElement;
  private initialized: boolean = false;
  componentDidLoad() {
    if (!this.initialized) {
      this.initialized = true;
      new W3DisclosureButton(this.element);
    }
  }
  render() {
    return (
      <content-block-wrapper name="content-accordion">
        <slot></slot>
      </content-block-wrapper>
    );
  }

}
