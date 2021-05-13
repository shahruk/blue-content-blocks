import { r as registerInstance, h, g as getElement } from './index-64ad35d7.js';
import { W as WindowResizeService } from './window-resize-service-5d97fa66.js';
import { g as getCurrentValue } from './utils-949e43b1.js';
import './index-52f709ec.js';

const contentToutBlockCss = "content-tout-block .content-tout-block__media{position:relative}content-tout-block .content-tout-block__media-content{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;overflow:hidden}content-tout-block .content-tout-block__media-content [slot=mediaContent]{height:100%;width:100%}@media (hover: hover){content-tout-block .content-tout-block__media-content--hover{opacity:0}content-tout-block .content-tout-block__media-content--hover:hover{opacity:1}}";

const ContentToutBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // If true, the media content will show only on hover
    this.hover = 'false|true';
    this.hasHoverContent = false;
  }
  componentWillLoad() {
    this.hasMediaContent = !!this.hostElement.querySelector('[slot="mediaContent"]');
    WindowResizeService.breakpointIndex$.subscribe(() => {
      this.hasHoverContent = getCurrentValue(this.hover) === 'true';
    });
  }
  render() {
    return (h("content-block-wrapper", { name: "content-tout-block" }, h("div", { class: "content-tout-block__media" }, h("div", { class: "content-tout-block__media-wrapper" }, h("slot", { name: "media" })), this.hasMediaContent &&
      h("div", { class: `content-tout-block__media-content${this.hasHoverContent ? ' content-tout-block__media-content--hover' : ''}` }, h("slot", { name: "mediaContent" }))), h("div", { class: "content-tout-block__content" }, h("slot", { name: "content" }), h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
ContentToutBlock.style = contentToutBlockCss;

export { ContentToutBlock as content_tout_block };
