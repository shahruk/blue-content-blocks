import { Component, h, Prop } from '@stencil/core';
/**
 * @slot column1 - This will be column 1.
 * @slot column2 - This will be column 2.
 */
@Component({
  tag: 'content-split-block',
  styleUrl: 'content-split-block.scss',
  shadow: false,
})
export class ContentSplitBlock {
  @Prop() reverse: boolean = false;
  @Prop() background: string;
  render() {
    return (
      <content-block-wrapper name="content-split-block" background={this.background} style-classes={this.reverse ? 'content-split-block--reverse' : ''}>
        <content-grid-formatter type="flex" flex-grow="true" flex-shrink="true" columns="1|2">
          <slot name="column1"></slot>
          <slot name="column2"></slot>
        </content-grid-formatter>
      </content-block-wrapper>
    );
  }

}
