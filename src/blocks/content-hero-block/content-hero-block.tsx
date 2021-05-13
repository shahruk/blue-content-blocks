import { Component, h, Prop } from '@stencil/core';
import { Element, HTMLStencilElement, Listen, State } from '@stencil/core/internal';
import { ResponsiveString } from '../../typings';
import { generateResponsiveClass } from '../../utils/utils';
export type HeroContentPlacementOptions = 'above' | 'below';
/**
 * @slot media - This slot can either be a video or image component.
 * @slot content - This slot will usually serve a content text block.
 */
@Component({
  tag: 'content-hero-block',
  styleUrl: 'content-hero-block.scss',
  shadow: false,
})
export class ContentHeroBlock {
  @Element() hostElement: HTMLStencilElement;
  hasMedia: boolean;
  /**
   * Pipe separated HeroContentPlacementOptions that will determine where the content is positioned with the media.
   */
  @Prop() contentPosition: ResponsiveString | HeroContentPlacementOptions = 'below|above';

  @Prop() background: ResponsiveString;

  @State() activeClasses: string = this.computedClasses();
  @State() revealHiddenContent: boolean = false;
  hasHiddenContent: boolean;

  componentWillLoad() {
    this.hasMedia = !!this.hostElement.querySelector('[slot="media"]');
    this.hasHiddenContent = !!this.hostElement.querySelector('[slot="activatedContent"]');
  }
  
  computedClasses(): string {
    let classString = '';
    classString += this.hasMedia ? 'content-hero-block--media' : 'content-hero-block--text';
    classString += ` ${generateResponsiveClass('content-hero-block__content-position', this.contentPosition)}`;
    return classString;
  }

  computedContentClasses(): string {
    let classString = 'content-hero-block__content';
    return classString;
  }

  computedBackgroundClasses(): string {
    let classString = '';
    classString += ` ${generateResponsiveClass('content-hero-block-position', this.contentPosition)}`;
    return classString;
  }

  @Listen('contentBlockActivated', {target: 'window'})
  contentBlockActivationHandler(event: CustomEvent<HTMLElement>) {
    if(this.hostElement === event.detail) {
      this.activeClasses = this.computedClasses() + ' content-block-hero--activated';
    }
  }

  render() {
    return (
      <content-block-wrapper name="content-hero-block" extra-classes={this.activeClasses} backgroundClasses={this.computedBackgroundClasses()} background={this.background}>
        { this.hasMedia && 
          <div class="content-hero-block__media">
            <div class="content-hero-block__media-wrapper">
              <slot name="media"></slot>
            </div>
          </div>
        }
        <div class={this.computedContentClasses()}>
          <slot name="content"></slot>
          <slot></slot>
        </div>
      </content-block-wrapper>
    );
  }

}
