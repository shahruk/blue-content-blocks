import { EventEmitter } from '../../stencil-public-runtime';
import { HTMLStencilElement } from '../../stencil-public-runtime';
import { ResponsiveNumber, ResponsiveString } from '../../typings';
export declare class ContentBlockWrapper {
  contentBlockReady: EventEmitter<HTMLElement>;
  hostElement: HTMLStencilElement;
  styleObject: {
    [key: string]: string;
  };
  background: ResponsiveString;
  name: string;
  styleClasses: string;
  backgroundClasses: string;
  maxWidth: ResponsiveNumber;
  inlineStyle?: {
    [key: string]: string;
  };
  innerClassName: string;
  computedClassString(): string;
  computedBackgroundClassString(): string;
  componentWillLoad(): void;
  componentDidRender(): void;
  render(): any;
}
