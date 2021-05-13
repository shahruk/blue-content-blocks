import { HTMLStencilElement } from '../../stencil-public-runtime';
import { ResponsiveBoolean } from '../../typings';
/**
 * @slot media - This slot can either be a video or image component.
 * @slot content - This slot will usually serve a content text block.
 */
export declare class ContentToutBlock {
  hover: ResponsiveBoolean;
  hostElement: HTMLStencilElement;
  hasMediaContent: boolean;
  hasHoverContent: boolean;
  componentWillLoad(): void;
  render(): any;
}
