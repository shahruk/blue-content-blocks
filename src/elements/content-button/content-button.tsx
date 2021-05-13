import { Component,Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { Element, HTMLStencilElement } from '@stencil/core/internal';
import { WindowResizeService } from '../../services/window-resize-service';
import { getCurrentValue } from '../../utils/utils';

@Component({
  tag: 'content-button',
  styleUrl: 'content-button.scss',
  shadow: false,
})
export class ContentButton {
  @Element() hostElement: HTMLStencilElement;
  @Prop({
    mutable: true
  }) href: string;
  @Prop() href2: string;
  @Prop() target: string;
  @Prop() styleClass?: string = 'content-block-default-button';
  @Prop() clickableBlock: boolean = false;
  @Prop() expanded: string;
  @Prop() controls: string;
  @State() activeClass: string;
  hasContentToActivate: boolean;

  public activatedContent: HTMLDivElement;

  @Event({
    bubbles: true,
  }) contentBlockActivated: EventEmitter<HTMLElement>;
  
  componentWillLoad() {
    this.activatedContent = this.hostElement.querySelector('[slot="activatedContent"]');
    this.hasContentToActivate = !!this.activatedContent;
    // If this is a clickable block, forcefully add a # to force an anchor link
    if (!this.href || this.href === '#') {
      this.href = 'javascript:void(0);';
    }
    if (this.styleClass) {
      WindowResizeService.breakpointIndex$.subscribe(() => {
        this.activeClass = getCurrentValue(this.styleClass);
      });
    }
  }

  onHandleClickEvent(ev) {
    if (this.hasContentToActivate) {
      ev.preventDefault();
      ev.stopPropagation();
      this.contentBlockActivated.emit(this.activatedContent);
      this.activatedContent.scrollIntoView();
    } else if(this.href && this.href.length > 1 && this.href.substr(0, 1) === '#') {
      let element = document.getElementById(this.href.substr(1));
      if (element) {
        ev.preventDefault();
        ev.stopPropagation();
        this.contentBlockActivated.emit(element);
        element.scrollIntoView();
      }
    }
  }

  render() {
    return (
      <content-element-wrapper name="content-button">
        <a role={this.href === 'javascript:void(0);' ? 'button' : ''} onClick={ev => this.onHandleClickEvent(ev)} class={this.activeClass} aria-expanded={this.expanded} aria-controls={this.controls} href={ this.href } target={this.target}>
          { !this.clickableBlock ? (
            <span>
              <slot></slot>
            </span>
          ) : (
            <div class="content-button__clickable-content">
              <slot></slot>
            </div>
          )}
        </a>
      <slot name="activatedContent"></slot>
      </content-element-wrapper>
    );
  }
}
