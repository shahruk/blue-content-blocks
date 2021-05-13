import { Component, h } from '@stencil/core';
import { Element, HTMLStencilElement,Prop, State } from '@stencil/core/internal';
import videojs from 'video.js';
import 'videojs-youtube/dist/Youtube.js';
export type SupportedVideoMethods = 'html5' | 'youtube';
@Component({
  tag: 'content-video',
  styleUrls: [
    'content-video.scss',
  ],
  shadow: false,
})
export class ContentVideo {
  public player: any;
  videoElement!: HTMLVideoElement;
  @Element() hostElement: HTMLStencilElement;
  /**
   * If this video is opened within a container, e.g. a <content-overlay> with a target.
   * The height of the video will fit the container instead of resizing to the video aspect ratio.
   */
  @Prop() fitContainer: boolean = false;
  @Prop() method: SupportedVideoMethods = 'youtube';
  /** 
   * If you're using this inside a content-overlay for example, you may want the video to play immediately on launch.
   */
  @Prop() autoplay: boolean = false;
  @Prop() src: string = '';
  @Prop() width: number = 16;
  @Prop() height: number = 9;
  @Prop() type: string = 'video/mp4';
  @Prop() styleClasses: string = '';
  @Prop() controls: boolean = true;
  @Prop() preload: string = 'metadata';
  @State() isLoaded: boolean = false;
  @State() hasPoster: boolean = false;

  @State() isPlayed: boolean = false;

  componentWillLoad() {
    this.hasPoster = !!this.hostElement.querySelector('[slot="poster"]');
    if (!this.hasPoster) {
      this.initVideo();
    }
  }

  computedVideoConfig(): object {
    let videoConfig = {};
    if (this.method === 'youtube' || this.src.indexOf('youtube') >= 0) {
      videoConfig = {
        "fluid": true,
        "techOrder": ["youtube"],
        "sources": [{ 
          "type": "video/youtube",
          "src": this.src,
        }],
        "youtube": {
          "showinfo": 0,
          "rel": 0,
          "modestbranding": 1,
        }
      };
    }
    return videoConfig;
  }

  initVideo() {
    this.isLoaded = true;
  }

  componentDidRender() {
    let self = this;
    console.log(this.videoElement);
    if (this.isLoaded && this.videoElement) {
      this.player = videojs(this.videoElement, this.computedVideoConfig(), function onPlayerReady() {
        videojs.log('Your player is ready!');
        if (self.hasPoster || self.autoplay) {
          self.isPlayed = true;
          this.play();
        }
      }); 
    }
  }
  
  computedStyleClasses() {
    let classString = this.styleClasses;
    if (this.fitContainer) {
      classString += ' content-video--fit-container';
    }
    return classString;
  }
  
  onClickHandler(event: MouseEvent) {
    event.preventDefault();
    if (this.hasPoster) {
      this.initVideo();
    } else {
      this.isPlayed = true;
      this.player.play();
    }
  }

  render() {
    return (
      <content-element-wrapper name="content-video" style-classes={this.computedStyleClasses()}>

        { (this.hasPoster && !this.isLoaded) && 
          <div class="content-video__poster">
            <slot name="poster"></slot>
          </div>
        }
        { ((this.hasPoster && !this.isPlayed) || !this.isPlayed) && 
          <button class="content-video__play" onClick={ev => this.onClickHandler(ev)}>
            <slot name="playButton"></slot>
          </button>}
        <div class="content-video__content">
          {(!this.hasPoster || this.isLoaded) && 
            <video ref={ element => this.videoElement = element }
              class="video-js vjs-content-block-theme"
              controls={this.controls}
              preload={this.preload}
              width={this.width}
              height={this.height}
              crossorigin="anonymous"
              // data-setup={this.computedVideoConfig()}
              >
              <source src={this.src} type={this.type}></source>
              <slot name="no-js-message"></slot>
              <slot></slot>
            </video>
          }
        </div>
      </content-element-wrapper>
    );
  }

}
