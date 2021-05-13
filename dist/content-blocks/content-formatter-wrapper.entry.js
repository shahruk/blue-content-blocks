import { r as registerInstance, h, f as Host } from './index-64ad35d7.js';

const contentFormatterWrapperCss = "content-formatter-wrapper{display:block}";

const ContentFormatterWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = 'content-formatter';
    this.extraClasses = '';
    this.outerClassName = this.name + '__outer';
    this.innerClassName = this.name + '__inner';
  }
  computedClassString() {
    let classString = '';
    if (!this.extraClasses) {
      classString = this.name;
    }
    else {
      classString = `${this.name} ${this.extraClasses}`;
    }
    return classString;
  }
  render() {
    return (h(Host, { class: this.computedClassString(), style: {
        'background': this.background
      } }, h("div", { class: this.innerClassName }, h("slot", null))));
  }
};
ContentFormatterWrapper.style = contentFormatterWrapperCss;

export { ContentFormatterWrapper as content_formatter_wrapper };
