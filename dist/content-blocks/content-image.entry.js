import { r as registerInstance, h } from './index-64ad35d7.js';
import { W as WindowResizeService } from './window-resize-service-5d97fa66.js';
import { g as getCurrentValue } from './utils-949e43b1.js';
import './index-52f709ec.js';

const contentImageCss = "content-image{display:block;height:auto}content-image .content-image{opacity:0}content-image .content-image.content-image-loaded{opacity:1}content-image .content-image img,content-image .content-image picture,content-image .content-image video{display:block;width:100%;height:auto}";

const ContentImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // If a value is not set, the value will be inferred by reading the `src` attribute
    this.lazyLoad = true;
    this.width = '16';
    this.height = '9';
    this.videoType = 'video/mp4';
    this.lazyLoadIsComplete = false;
    this.showVideo = false;
    this.mediaValues = {
      width: '1',
      height: '1',
      src: '',
      alt: '',
    };
  }
  preloadImage(src) {
    return new Promise(r => {
      const image = new Image();
      image.onload = r;
      image.onerror = r;
      image.src = src;
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
        }
        else {
          this.lazyLoadIsComplete = true;
        }
      });
    });
  }
  computedLazyLoadClass() {
    let className = '';
    if (!this.lazyLoad) {
      className = 'content-image-no-lazyload';
    }
    else {
      className = 'content-image-loading';
    }
    return className;
  }
  render() {
    return (h("content-element-wrapper", { name: "content-image", "style-classes": this.lazyLoadIsComplete ? 'content-image-loaded' : this.computedLazyLoadClass() }, this.showVideo ? (h("video", { autoplay: true, muted: true, loop: true, preload: "none", playsinline: true, width: this.mediaValues.width, height: this.mediaValues.height }, h("source", { src: this.lazyLoadIsComplete ? this.mediaValues.src : null, type: this.videoType }))) : (h("picture", null, h("source", { srcSet: this.lazyLoadIsComplete ? this.mediaValues.src : null }), h("img", { width: this.mediaValues.width, height: this.mediaValues.height, alt: this.mediaValues.alt, src: this.lazyLoadIsComplete ? this.mediaValues.src : null })))));
  }
};
ContentImage.style = contentImageCss;

export { ContentImage as content_image };
