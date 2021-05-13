import { Component, h, Prop, State } from '@stencil/core';
import { WindowResizeService } from '../../services/window-resize-service';
import { ResponsiveNumber, ResponsiveString } from '../../typings';
import { getCurrentValue } from '../../utils/utils';

@Component({
  tag: 'content-image',
  styleUrl: 'content-image.scss',
  shadow: false,
})
export class ContentImage {
  // If a value is not set, the value will be inferred by reading the `src` attribute
  @Prop() lazyLoad: boolean = true;
  @Prop() src!: ResponsiveString;
  @Prop() alt: ResponsiveString;
  @Prop() width: ResponsiveNumber = '16';
  @Prop() height: ResponsiveNumber = '9';
  @Prop() videoType?: string = 'video/mp4';

  @State() lazyLoadIsComplete: boolean = false;
  @State() showVideo: boolean = false;
  @State() mediaValues = {
    width: '1',
    height: '1',
    src: '',
    alt: '',
  };

  preloadImage(src) {
    return new Promise(r => {
      const image = new Image()
      image.onload = r
      image.onerror = r
      image.src = src
    });
  }

  componentWillLoad() {
    WindowResizeService.breakpointIndex$.subscribe(() => {
      this.mediaValues = {
        width: getCurrentValue(this.width),
        height: getCurrentValue(this.height),
        src: getCurrentValue(this.src),
        alt: getCurrentValue(this.alt),
      };
      this.showVideo = false;
      requestAnimationFrame(async () => {
        this.showVideo = getCurrentValue(this.src).indexOf('.mp4') >= 0;
        // Preload an image
        if (!this.showVideo) {
          await this.preloadImage(this.src);
          setTimeout(() => {
            this.lazyLoadIsComplete = true;
          }, 1000);
        } else {
          this.lazyLoadIsComplete = true;
        }
      });
    });
  }

  computedLazyLoadClass(): string {
    let className = '';
    if (!this.lazyLoad) {
      className = 'content-image-no-lazyload'
    } else {
      className = 'content-image-loading';
    }
    return className;
  }

  render() {
    return (
      <content-element-wrapper name="content-image" style-classes={this.lazyLoadIsComplete ? 'content-image-loaded' : this.computedLazyLoadClass()}>
      { this.showVideo ? (
        <video autoplay muted loop preload="none" playsinline width={this.mediaValues.width} height={this.mediaValues.height}>
          <source src={this.lazyLoadIsComplete ? this.mediaValues.src : null } type={this.videoType} />
        </video>
      ) : (
        <picture>
          <source srcSet={this.lazyLoadIsComplete ? this.mediaValues.src : null } />
          <img width={this.mediaValues.width} height={this.mediaValues.height} alt={this.mediaValues.alt} src={this.lazyLoadIsComplete ? this.mediaValues.src : null} />
        </picture>
      )}
      </content-element-wrapper>
    );
  }

}
