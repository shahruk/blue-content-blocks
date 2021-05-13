import { Component, Host, h, Prop, State, Listen, Element } from '@stencil/core';
import { Event, EventEmitter, HTMLStencilElement } from '@stencil/core/internal';
import { WindowResizeService } from '../../services/window-resize-service';
import { ContentLineTextAlignOptions, ContentVerticalAlignments, ResponsiveBoolean, ResponsiveString } from '../../typings';
import { generateResponsiveClass, getCurrentValue } from '../../utils/utils';
import './libraries/aria-utilities';
import './libraries/aria-dialog';

@Component({
  tag: 'content-overlay',
  styleUrl: 'content-overlay.scss',
  shadow: false,
})
export class ContentOverlay {
  @Element() hostElement: HTMLStencilElement;
  @Prop() target: string;
  @Prop() fullScreen: ResponsiveBoolean = 'true';
  @Prop() styleClass: ResponsiveString;
  /**
   * A pipe delimited setting for horizontal alignment. This only applies when fullscreen mode is activated.
   */
  @Prop() horizontalAlignment: ContentLineTextAlignOptions | ResponsiveString = 'center';
  /**
   * A pipe delimited setting for vertical alignment. This only applies when fullscreen mode is activated.
   */
  @Prop() verticalAlignment: ContentVerticalAlignments | ResponsiveString = 'center';
  
  /**
   * Title attribute value for the close button.
   */
  @Prop() closeTitle: string = 'Close Overlay';
  
  @State() isActive: boolean = false;
  @State() activeClass: string = '';


  @Event({
    bubbles: true,
  }) contentOverlayActivated: EventEmitter<HTMLElement>;
  
  private contentSlot: HTMLElement;
  
  dialogElement: HTMLDivElement;
  contentElement: HTMLDivElement;

  isFullScreen: boolean = false;
  ariaDialog;

  @Listen('contentBlockActivated', {target: 'window'})
  onContentBlockActivated(event: CustomEvent) {
    if(this.hostElement === event.detail) {
      event.preventDefault();
      if (this.isActive) {
        return false;
      }
      if (this.isFullScreen) {
        document.body.appendChild(this.hostElement);
      } else {
        if (this.target) {
          let targetElement = document.getElementById(this.target);
          if (targetElement) {
            targetElement.appendChild(this.hostElement);
          }
        }
      }
      if (this.contentSlot) {
        this.isActive = true;
        this.setComputedActiveClass();
        this.ariaDialog = new aria.Dialog(this.dialogElement, this.hostElement, this.target, this.isFullScreen);
        this.contentElement.innerHTML = this.contentSlot.innerHTML;
      }
      this.contentOverlayActivated.emit(this.hostElement);
    }
  }

  setComputedActiveClass() {
    let positioningValue = 'static';
    if (this.target) {
      positioningValue = 'absolute';
    } 
    if (this.isFullScreen) {
      positioningValue = 'fullscreen';
    }
    this.activeClass = `content-overlay ${this.isActive ? 'content-overlay-active' : 'content-overlay-inactive'}  content-overlay--${positioningValue} ${getCurrentValue(this.styleClass)}`;

  };

  componentWillLoad() {
    this.contentSlot = this.hostElement.querySelector('[slot="content"]');
    WindowResizeService.breakpointIndex$.subscribe(() => {
      this.isFullScreen = (getCurrentValue(this.fullScreen) === 'true');
      this.setComputedActiveClass();
    });
  }

  closeOverlayButtonClicked(event) {
    event.preventDefault();
    event.stopPropagation();
    this.ariaDialog.close();
  }
  @Listen('ariaDialog.closed')
  onAriaDialogClosed() {
    this.contentElement.innerHTML = '';
    this.isActive = false;
    this.setComputedActiveClass();
  }

  render() {
    return (
      <Host class={this.activeClass}>
        <div ref={element => this.dialogElement = element} role="dialog" aria-modal="true" class="hidden" aria-expanded="false">
          <div class="content-overlay__header">
            <button onClick={e => this.closeOverlayButtonClicked(e)} class="content-overlay__close" title={this.closeTitle}>
              <slot name="closeButton"></slot>
            </button>
            <slot name="header"></slot>
          </div>
          <slot name="content"></slot>
          <div ref={element => this.contentElement = element} class={`content-overlay__content ${generateResponsiveClass('content-overlay-vertical-position', this.verticalAlignment)} ${generateResponsiveClass('content-overlay-horizontal-position', this.horizontalAlignment)}`}></div>
        </div>
      </Host>
    );
  }

}
