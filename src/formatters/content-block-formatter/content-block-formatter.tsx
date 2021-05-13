import { Component, h, Element } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'content-block-formatter',
  styleUrl: 'content-block-formatter.scss',
  shadow: false,
})
export class ContentBlockFormatter {
  hasHeader: boolean;
  @Element() hostElement: HTMLStencilElement;
  componentWillLoad() {
    this.hasHeader = !!this.hostElement.querySelector('[slot="header"]');
  }
  render() {
    return (
      <content-formatter-wrapper name="content-block-formatter" extra-classes={this.hasHeader ? 'content-block-formatter--full' : 'content-block-formatter--content'}>
        { this.hasHeader && 
        <div class="content-block-formatter__header">
          <slot name="header"></slot>
        </div>
        }
        <div class="content-block-formatter__content">
          <slot name="content"></slot>
          <slot></slot>
        </div>
      </content-formatter-wrapper>
    );
  }

}
