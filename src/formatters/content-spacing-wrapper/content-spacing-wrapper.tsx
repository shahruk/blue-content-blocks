import { Component, h, Prop, State } from '@stencil/core';
import { WindowResizeService } from '../../services/window-resize-service';
import { ContentLineTextAlignOptions, ResponsiveBoolean, ResponsiveNumber, ResponsiveString } from '../../typings';
import { generateResponsiveClass, getCurrentValue } from '../../utils/utils';

@Component({
  tag: 'content-spacing-wrapper',
  styleUrls: ['content-spacing-wrapper.scss', '../../scss/utility-classes.scss'],
  shadow: false,
})
export class ContentSpacingWrapper {
  /**
   * Pipe separated list of max width numbers. You can also use units such as "px" and "vw".
   */
  @Prop() maxWidth: ResponsiveNumber = '100%';

  /**
   * Pipe separated boolean values for full height. Typically, this is used if you have a hero block and you want a footer that aligns with the text layer. This is a niche case, but a valid one.
   */
  @Prop() fullHeight: ResponsiveBoolean = 'false';

 /**
   * Pipe separated list of ContentLineTextAlignOptions for text alignment.
   */
  @Prop() textAlign: ContentLineTextAlignOptions | ResponsiveString = 'default';
  
  /**
   * Pipe separated list of ContentLineTextAlignOptions for where to place text box when a max width is specified.
   */
  @Prop() horizontalAlignment: ContentLineTextAlignOptions | ResponsiveString;
  
  /**
   * Pipe separated numbers between 0 and 100.
   */
  @Prop() topOffset: ResponsiveNumber = '0';
  
  /**
   * Pipe separated numbers between 0 and 100.
   */
  @Prop() bottomOffset: ResponsiveNumber = '0';
  
  /**
   * Pipe separated numbers between 0 and 100.
   */
  @Prop() leftOffset: ResponsiveNumber = '0';
  
  /**
   * Pipe separated numbers between 0 and 100.
   */
  @Prop() rightOffset: ResponsiveNumber = '0';

  /**
   * A custom class to use as the offset. This cannot be pipe separated, because this causes repaint of content.
   */
  @Prop() offsetClass: string = '';

  @State() inlineStyle?: {[key: string]: string};

  componentWillLoad() {
    WindowResizeService.breakpointIndex$.subscribe(() => {
      this.inlineStyle = {
        'max-width': isNaN(getCurrentValue(this.maxWidth) as any) ? getCurrentValue(this.maxWidth) : getCurrentValue(this.maxWidth) + '%',
      };
    });
  }

  computedClasses(): string {
    let classString = 'content-spacing-wrapper__alignments';
    if (this.textAlign) classString += ` ${generateResponsiveClass('content-text-align', this.textAlign)}`;
    if (this.horizontalAlignment) classString += ` ${generateResponsiveClass('content-horizontal-alignment', this.horizontalAlignment)}`;
    return classString;
  }

  computedOffsetClasses() {
    let classString = 'content-spacing-wrapper__offsets';
    let directions = ['left', 'top', 'right', 'bottom'];
    directions.forEach(direction => {
      let offset = this[direction + 'Offset'];
      let keyString = `content-offset-${direction}`;
      classString += ` ${generateResponsiveClass(keyString, offset)}`;
    });
    if (this.fullHeight) {
      classString += ` ${generateResponsiveClass('content-full-height', this.fullHeight)}`;
    }
    if (this.offsetClass) {
      classString += ' ' + this.offsetClass;
    }
    return classString;
  }
  

  render() {
    return (
      <div class={this.computedOffsetClasses()}>
        <div class={this.computedClasses()} style={this.inlineStyle}>
          <slot></slot>
        </div>
      </div>
    );
  }

}
