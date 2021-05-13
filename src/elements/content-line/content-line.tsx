import { Component, Prop, h, State } from '@stencil/core';
import { WindowResizeService } from '../../services/window-resize-service';
import { ResponsiveNumber, ResponsiveString } from '../../typings';
import { generateResponsiveClass, getCurrentValue } from '../../utils/utils';
export type ContentLineTagOptions = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'section' | 'article';
export type ContentLineTextAlignOptions = 'default' | 'left' | 'center' | 'right';
@Component({
  tag: 'content-line',
  styleUrl: 'content-line.scss',
  shadow: false
})
export class ContentBlockLine {
  /**
   * The element tag to use.
   */
  @Prop() tag: ContentLineTagOptions = 'div';

  /**
   * Pipe separated list of ContentLineTextAlignOptions for text alignment.
   */
  @Prop() textAlign: ContentLineTextAlignOptions | ResponsiveString = 'default';

  /**
   * The font class for the line.
   */
  @Prop() styleClass: ResponsiveString;

  /**
   * Pipe separated list of max width numbers. You can also use units such as "px" and "vw".
   */
  @Prop() maxWidth: ResponsiveNumber = '100%';

  @State() activeClass: string = 'text-style--default';
  @State() inlineStyle: {[key: string]: string} = {};
  componentWillLoad() {
    if (this.styleClass) {
      WindowResizeService.breakpointIndex$.subscribe(() => {
        this.activeClass = getCurrentValue(this.styleClass);
        if (this.maxWidth) {
          this.inlineStyle = {
            'max-width': isNaN(getCurrentValue(this.maxWidth) as any) ? getCurrentValue(this.maxWidth) : getCurrentValue(this.maxWidth) + '%',
          };
        }
      });
    }
  }

  computedClasses(): string {
    let extraClasses = '';    
    if (this.textAlign) extraClasses += `${generateResponsiveClass('content-line-text-align', this.textAlign)}`;
    return extraClasses;
  }

  render() {
    // The capital case in this JSX variable is important
    const ElementTagParsed = `${this.tag}`;
    return (
      <content-element-wrapper name="content-line" class={this.computedClasses()}>
        <ElementTagParsed class={this.activeClass}>
          <span class="content-line__inner" style={this.inlineStyle}>
            <slot></slot>
          </span>
        </ElementTagParsed>
      </content-element-wrapper>
    );
  }
}