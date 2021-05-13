import { EventEmitter } from '../../stencil-public-runtime';
import { HTMLStencilElement } from '../../stencil-public-runtime';
export declare class ContentButton {
  hostElement: HTMLStencilElement;
  href: string;
  href2: string;
  target: string;
  styleClass?: string;
  clickableBlock: boolean;
  expanded: string;
  controls: string;
  activeClass: string;
  hasContentToActivate: boolean;
  activatedContent: HTMLDivElement;
  contentBlockActivated: EventEmitter<HTMLElement>;
  componentWillLoad(): void;
  onHandleClickEvent(ev: any): void;
  render(): any;
}
