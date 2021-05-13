import { EventEmitter, HTMLStencilElement } from '../../stencil-public-runtime';
import { ContentLineTextAlignOptions, ContentVerticalAlignments, ResponsiveBoolean, ResponsiveString } from '../../typings';
import './libraries/aria-utilities';
import './libraries/aria-dialog';
export declare class ContentOverlay {
  hostElement: HTMLStencilElement;
  target: string;
  fullScreen: ResponsiveBoolean;
  styleClass: ResponsiveString;
  /**
   * A pipe delimited setting for horizontal alignment. This only applies when fullscreen mode is activated.
   */
  horizontalAlignment: ContentLineTextAlignOptions | ResponsiveString;
  /**
   * A pipe delimited setting for vertical alignment. This only applies when fullscreen mode is activated.
   */
  verticalAlignment: ContentVerticalAlignments | ResponsiveString;
  /**
   * Title attribute value for the close button.
   */
  closeTitle: string;
  isActive: boolean;
  activeClass: string;
  contentOverlayActivated: EventEmitter<HTMLElement>;
  private contentSlot;
  dialogElement: HTMLDivElement;
  contentElement: HTMLDivElement;
  isFullScreen: boolean;
  ariaDialog: any;
  onContentBlockActivated(event: CustomEvent): boolean;
  setComputedActiveClass(): void;
  componentWillLoad(): void;
  closeOverlayButtonClicked(event: any): void;
  onAriaDialogClosed(): void;
  render(): any;
}
