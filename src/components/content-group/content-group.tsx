import { Component, h, Prop } from '@stencil/core';
import { ResponsiveString } from '../../typings';
import { generateResponsiveClass } from '../../utils/utils';

@Component({
  tag: 'content-group',
  styleUrl: 'content-group.scss',
  shadow: false,
})
export class ContentGroup {
  @Prop() mobileBackground: string;
  @Prop() background: string;
  /** 
   * A ResponsiveString of ContentLineTextAlignOptions
   */
  @Prop() horizontalAlignment: ResponsiveString = 'default';

  computedClasses(): string {
    let extraClasses = generateResponsiveClass('content-group-align', this.horizontalAlignment);
    return extraClasses;
  }

  render() {
    return (
      <content-block-wrapper name="content-group" background-mobile={this.mobileBackground} background={this.background} styleClasses={this.computedClasses()}>
        <div class="content-group__content">
          <slot></slot>
        </div>
      </content-block-wrapper>
    );
  }

}
