import { ContentLineTextAlignOptions, ResponsiveBoolean, ResponsiveNumber, ResponsiveString } from '../../typings';
export declare class ContentSpacingWrapper {
  /**
   * Pipe separated list of max width numbers. You can also use units such as "px" and "vw".
   */
  maxWidth: ResponsiveNumber;
  /**
   * Pipe separated boolean values for full height. Typically, this is used if you have a hero block and you want a footer that aligns with the text layer. This is a niche case, but a valid one.
   */
  fullHeight: ResponsiveBoolean;
  /**
    * Pipe separated list of ContentLineTextAlignOptions for text alignment.
    */
  textAlign: ContentLineTextAlignOptions | ResponsiveString;
  /**
   * Pipe separated list of ContentLineTextAlignOptions for where to place text box when a max width is specified.
   */
  horizontalAlignment: ContentLineTextAlignOptions | ResponsiveString;
  /**
   * Pipe separated numbers between 0 and 100.
   */
  topOffset: ResponsiveNumber;
  /**
   * Pipe separated numbers between 0 and 100.
   */
  bottomOffset: ResponsiveNumber;
  /**
   * Pipe separated numbers between 0 and 100.
   */
  leftOffset: ResponsiveNumber;
  /**
   * Pipe separated numbers between 0 and 100.
   */
  rightOffset: ResponsiveNumber;
  /**
   * A custom class to use as the offset. This cannot be pipe separated, because this causes repaint of content.
   */
  offsetClass: string;
  inlineStyle?: {
    [key: string]: string;
  };
  componentWillLoad(): void;
  computedClasses(): string;
  computedOffsetClasses(): string;
  render(): any;
}
