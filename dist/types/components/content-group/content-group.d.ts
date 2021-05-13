import { ResponsiveString } from '../../typings';
export declare class ContentGroup {
  mobileBackground: string;
  background: string;
  /**
   * A ResponsiveString of ContentLineTextAlignOptions
   */
  horizontalAlignment: ResponsiveString;
  computedClasses(): string;
  render(): any;
}
