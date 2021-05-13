import { Component, h, Element } from '@stencil/core';
import { HTMLStencilElement, Prop, State } from '@stencil/core/internal';
import { WindowResizeService } from '../../services/window-resize-service';
import { ResponsiveBoolean } from '../../typings';
import { getCurrentValue } from '../../utils/utils';

/**
 * @slot media - This slot can either be a video or image component.
 * @slot content - This slot will usually serve a content text block.
 */
@Component({
  tag: 'content-tout-block',
  styleUrl: 'content-tout-block.scss',
  shadow: false,
})
export class ContentToutBlock {
  // If true, the media content will show only on hover
  @Prop() hover: ResponsiveBoolean = 'false|true';
  @Element() hostElement: HTMLStencilElement;
  hasMediaContent: boolean;

  @State() hasHoverContent: boolean = false;

  componentWillLoad() {
    this.hasMediaContent = !!this.hostElement.querySelector('[slot="mediaContent"]');
    WindowResizeService.breakpointIndex$.subscribe(() => {
      this.hasHoverContent = getCurrentValue(this.hover) === 'true';
    });
  }

  render() {
    return (
      <content-block-wrapper name="content-tout-block">
        <div class="content-tout-block__media">
          <div class="content-tout-block__media-wrapper">
            <slot name="media"></slot>
          </div>
          { this.hasMediaContent && 
          <div class={`content-tout-block__media-content${this.hasHoverContent ? ' content-tout-block__media-content--hover' : ''}`}>
            <slot name="mediaContent"></slot>
          </div>
          }
        </div>
        <div class="content-tout-block__content">
          <slot name="content"></slot>
          <slot></slot>
        </div>
      </content-block-wrapper>
    );
  }

}
