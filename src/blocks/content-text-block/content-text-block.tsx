import { Component, h, Element } from '@stencil/core';
import { HTMLStencilElement, Prop, State } from '@stencil/core/internal';
import { WindowResizeService } from '../../services/window-resize-service';
import { ContentVerticalAlignments, ResponsiveString } from '../../typings';
import { generateResponsiveClass, getCurrentValue } from '../../utils/utils';

@Component({
  tag: 'content-text-block',
  styleUrl: 'content-text-block.scss',
  shadow: false,
})
export class ContentTextBlock {
  /**
   * This is a string representing the theme class. This value must be 
   * created in a custom theme stylesheet using `@include responsiveProperty`.
   * This will output in the following format: `theme-${breakpoint}-${value}`
   */
  @Prop() colorClass: ResponsiveString = 'color--default';
  
  @Prop() background: ResponsiveString;
  
  /**
   * Pipe separated list of ContentVerticalAlignments for text box placement.
   */
   @Prop() verticalAlignment: ContentVerticalAlignments | ResponsiveString = 'top';
   

  @Element() hostElement: HTMLStencilElement;

  @State() styleClasses: string = '';
  
  computedClasses(): string {
    let extraClasses = 'content-text-block__wrapper';    
    if (this.verticalAlignment) extraClasses += ` content-text-block-vertical-align ${generateResponsiveClass('content-text-block-vertical-align', this.verticalAlignment)}`;
    if (!!this.hostElement.querySelector('[slot="footer"]')) {
      extraClasses += ' content-text-block__wrapper--footer';
    }
    return extraClasses;
  }
  
  computedBackgroundClasses(): string {
    let extraClasses = '';
    if (this.verticalAlignment) extraClasses += ` content-text-block-vertical-align ${generateResponsiveClass('content-text-block-vertical-align', this.verticalAlignment)}`;
    return extraClasses;
  }

  componentWillLoad() {
    WindowResizeService.breakpointIndex$.subscribe(() => {
      let value = getCurrentValue(this.colorClass);
      this.styleClasses = `${value ? ' ' + value : ''}`;
    });
  }


  render() { 
    return (
      <content-block-wrapper name="content-text-block" style-classes={this.styleClasses} background-classes={this.computedBackgroundClasses()} background={this.background}>
        <div class={this.computedClasses()}>
          <div class="content-text-block__content">
            <slot></slot>
          </div>
          <slot name="footer"></slot>
        </div>
      </content-block-wrapper>
    );
  }
}
