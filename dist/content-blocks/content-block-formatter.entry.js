import { r as registerInstance, h, g as getElement } from './index-64ad35d7.js';

const contentBlockFormatterCss = "content-block-formatter{display:block}";

const ContentBlockFormatter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.hasHeader = !!this.hostElement.querySelector('[slot="header"]');
  }
  render() {
    return (h("content-formatter-wrapper", { name: "content-block-formatter", "extra-classes": this.hasHeader ? 'content-block-formatter--full' : 'content-block-formatter--content' }, this.hasHeader &&
      h("div", { class: "content-block-formatter__header" }, h("slot", { name: "header" })), h("div", { class: "content-block-formatter__content" }, h("slot", { name: "content" }), h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
ContentBlockFormatter.style = contentBlockFormatterCss;

export { ContentBlockFormatter as content_block_formatter };
