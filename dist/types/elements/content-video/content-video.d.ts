import { HTMLStencilElement } from '../../stencil-public-runtime';
import 'videojs-youtube/dist/Youtube.js';
export declare type SupportedVideoMethods = 'html5' | 'youtube';
export declare class ContentVideo {
  player: any;
  videoElement: HTMLVideoElement;
  hostElement: HTMLStencilElement;
  /**
   * If this video is opened within a container, e.g. a <content-overlay> with a target.
   * The height of the video will fit the container instead of resizing to the video aspect ratio.
   */
  fitContainer: boolean;
  method: SupportedVideoMethods;
  /**
   * If you're using this inside a content-overlay for example, you may want the video to play immediately on launch.
   */
  autoplay: boolean;
  src: string;
  width: number;
  height: number;
  type: string;
  styleClasses: string;
  controls: boolean;
  preload: string;
  isLoaded: boolean;
  hasPoster: boolean;
  isPlayed: boolean;
  componentWillLoad(): void;
  computedVideoConfig(): object;
  initVideo(): void;
  componentDidRender(): void;
  computedStyleClasses(): string;
  onClickHandler(event: MouseEvent): void;
  render(): any;
}
