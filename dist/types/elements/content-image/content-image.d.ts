import { ResponsiveNumber, ResponsiveString } from '../../typings';
export declare class ContentImage {
  lazyLoad: boolean;
  src: ResponsiveString;
  alt: ResponsiveString;
  width: ResponsiveNumber;
  height: ResponsiveNumber;
  videoType?: string;
  lazyLoadIsComplete: boolean;
  showVideo: boolean;
  mediaValues: {
    width: string;
    height: string;
    src: string;
    alt: string;
  };
  preloadImage(src: any): Promise<unknown>;
  componentWillLoad(): void;
  computedLazyLoadClass(): string;
  render(): any;
}
