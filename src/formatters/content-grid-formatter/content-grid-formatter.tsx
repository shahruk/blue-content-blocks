import { Component, h, Prop } from '@stencil/core';
import { WindowResizeService } from '../../services/window-resize-service';
import { FLEX_JUSTIFY_OPTIONS, GRID_TYPES, ResponsiveBoolean, ResponsiveNumber, ResponsiveString } from '../../typings';
import { generateResponsiveClass, getCurrentValue } from '../../utils/utils';

/**
 * @slot media - This slot can either be a video or image component.
 * @slot content - This slot will usually serve a content text block.
 */
@Component({
  tag: 'content-grid-formatter',
  styleUrl: 'content-grid-formatter.scss',
  shadow: false,
})
export class ContentGridFormatter {
  // Flex or grid 
  @Prop() type: GRID_TYPES | ResponsiveString = 'flex';
  @Prop() flexGrow: ResponsiveBoolean = 'false';
  @Prop() flexShrink: ResponsiveBoolean = 'false';
  @Prop() flexAlign: FLEX_JUSTIFY_OPTIONS | ResponsiveString = 'space-between';
  @Prop() columns: ResponsiveNumber = '1';

  activeClassString: string;

  componentWillLoad() {
    WindowResizeService.breakpointIndex$.subscribe(() => {
      let type = getCurrentValue(this.type);
      let flexAlign = getCurrentValue(this.flexAlign);
      let flexShrink = getCurrentValue(this.flexShrink);
      let flexGrow = getCurrentValue(this.flexGrow);
      let classString = `content-grid-formatter-${type}`;
      if (type === 'flex') {
        classString += ` content-grid-formatter-${type}--${flexAlign}`;
        if (flexShrink) {
          classString += ` content-grid-formatter-${type}--shrink`;
        }
        if (flexGrow) {
          classString += ` content-grid-formatter-${type}--grow`;
        }
      } 
      if (this.columns) classString += ` ${generateResponsiveClass('content-grid-formatter-cols', this.columns)}`;
      this.activeClassString = classString;
    });
  }

  render() {
    return (
      <content-formatter-wrapper name="content-grid-formatter">
        <div class={this.activeClassString}>
          <slot />
        </div>
      </content-formatter-wrapper>
    );
  }
}
