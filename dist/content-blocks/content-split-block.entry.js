import { r as registerInstance, h } from './index-64ad35d7.js';

const contentSplitBlockCss = "content-split-block{display:block}@media screen and (min-width: 768px){content-split-block .content-split-block--reverse .content-grid-formatter-flex>:first-child,content-split-block .content-split-block--reverse .content-grid-formatter-grid>:first-child{order:2}}";

const ContentSplitBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.reverse = false;
  }
  render() {
    return (h("content-block-wrapper", { name: "content-split-block", background: this.background, "style-classes": this.reverse ? 'content-split-block--reverse' : '' }, h("content-grid-formatter", { type: "flex", "flex-grow": "true", "flex-shrink": "true", columns: "1|2" }, h("slot", { name: "column1" }), h("slot", { name: "column2" }))));
  }
};
ContentSplitBlock.style = contentSplitBlockCss;

export { ContentSplitBlock as content_split_block };
