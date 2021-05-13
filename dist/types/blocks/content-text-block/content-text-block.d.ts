import { HTMLStencilElement } from '../../stencil-public-runtime';
import { ContentVerticalAlignments, ResponsiveString } from '../../typings';
export declare class ContentTextBlock {
  /**
   * This is a string representing the theme class. This value must be
   * created in a custom theme stylesheet using `@include responsiveProperty`.
   * This will output in the following format: `theme-${breakpoint}-${value}`
   */
  colorClass: ResponsiveString;
  background: ResponsiveString;
  /**
   * Pipe separated list of ContentVerticalAlignments for text box placement.
   */
  verticalAlignment: ContentVerticalAlignments | ResponsiveString;
  hostElement: HTMLStencilElement;
  styleClasses: string;
  computedClasses(): string;
  computedBackgroundClasses(): string;
  componentWillLoad(): void;
  render(): any;
}
