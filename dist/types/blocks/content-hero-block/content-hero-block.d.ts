import { HTMLStencilElement } from '../../stencil-public-runtime';
import { ResponsiveString } from '../../typings';
export declare type HeroContentPlacementOptions = 'above' | 'below';
/**
 * @slot media - This slot can either be a video or image component.
 * @slot content - This slot will usually serve a content text block.
 */
export declare class ContentHeroBlock {
  hostElement: HTMLStencilElement;
  hasMedia: boolean;
  /**
   * Pipe separated HeroContentPlacementOptions that will determine where the content is positioned with the media.
   */
  contentPosition: ResponsiveString | HeroContentPlacementOptions;
  background: ResponsiveString;
  activeClasses: string;
  revealHiddenContent: boolean;
  hasHiddenContent: boolean;
  componentWillLoad(): void;
  computedClasses(): string;
  computedContentClasses(): string;
  computedBackgroundClasses(): string;
  contentBlockActivationHandler(event: CustomEvent<HTMLElement>): void;
  render(): any;
}
