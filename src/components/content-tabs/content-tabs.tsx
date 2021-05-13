import { Component,h, Element } from '@stencil/core';
import W3Tabs from './libraries/w3_tabs';

@Component({
  tag: 'content-tabs',
  styleUrl: 'content-tabs.scss',
  shadow: false,
})
export class ContentTabs {
  @Element() private element: HTMLElement;
  componentDidLoad() {
    new W3Tabs(this.element);
  }
  render() {
    return (
      <content-block-wrapper name="content-tabs">
        <slot></slot>
      </content-block-wrapper>
    );
  }

}
