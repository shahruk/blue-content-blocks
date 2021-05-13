import { ResponsiveNumber, ResponsiveString } from '../../typings';
export declare type ContentLineTagOptions = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'section' | 'article';
export declare type ContentLineTextAlignOptions = 'default' | 'left' | 'center' | 'right';
export declare class ContentBlockLine {
  /**
   * The element tag to use.
   */
  tag: ContentLineTagOptions;
  /**
   * Pipe separated list of ContentLineTextAlignOptions for text alignment.
   */
  textAlign: ContentLineTextAlignOptions | ResponsiveString;
  /**
   * The font class for the line.
   */
  styleClass: ResponsiveString;
  /**
   * Pipe separated list of max width numbers. You can also use units such as "px" and "vw".
   */
  maxWidth: ResponsiveNumber;
  activeClass: string;
  inlineStyle: {
    [key: string]: string;
  };
  componentWillLoad(): void;
  computedClasses(): string;
  render(): any;
}
