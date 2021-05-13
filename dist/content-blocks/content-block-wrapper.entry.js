import { r as registerInstance, e as createEvent, h, g as getElement } from './index-64ad35d7.js';
import { W as WindowResizeService } from './window-resize-service-5d97fa66.js';
import { g as getCurrentValue } from './utils-949e43b1.js';
import './index-52f709ec.js';

class ContentEventsController {
  constructor() {
    this.firstRun = true;
    this.elementsListening = [];
    // var elementsCounted = 0;
    window.addEventListener('contentBlockReady', () => {
      if (this.timeoutHolder) {
        clearTimeout(this.timeoutHolder);
      }
      this.timeoutHolder = setTimeout(() => {
        window.dispatchEvent(new Event('contentBlocksRendered'));
      }, 1);
    });
  }
  attachElement(elem) {
    this.elementsListening.push(elem);
  }
  getElementsListening() {
    return this.elementsListening;
  }
}
const ContentEventsService = new ContentEventsController();

const contentBlockWrapperCss = "content-block-wrapper{display:block;height:100%}.content-block-wrapper__background-wrapper{position:relative;height:100%}.content-block-wrapper__background-wrapper .content-block-wrapper__inner{position:relative;z-index:1;height:100%}.content-block-wrapper__background-wrapper .content-block-wrapper__background{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}";

const ContentBlockWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentBlockReady = createEvent(this, "contentBlockReady", 7);
    this.name = 'content-block';
    this.styleClasses = '';
    this.backgroundClasses = '';
    this.maxWidth = '100%';
    this.innerClassName = this.name + '__inner';
  }
  computedClassString() {
    let classString = `${this.name}`;
    if (this.styleClasses) {
      classString += ` ${this.styleClasses}`;
    }
    return classString;
  }
  computedBackgroundClassString() {
    let classString = `content-block-wrapper__background-wrapper`;
    if (this.backgroundClasses) {
      classString += ` ${this.backgroundClasses}`;
    }
    return classString;
  }
  componentWillLoad() {
    ContentEventsService.attachElement(this.hostElement);
    if (this.background) {
      WindowResizeService.breakpointIndex$.subscribe(() => {
        let value = getCurrentValue(this.background);
        this.inlineStyle = {
          'background': value,
          'max-width': !isNaN(getCurrentValue(this.maxWidth)) ? getCurrentValue(this.maxWidth) : getCurrentValue(this.maxWidth) + '%',
        };
      });
    }
  }
  componentDidRender() {
    console.log('RENDER');
    this.contentBlockReady.emit(this.hostElement);
  }
  render() {
    return (h("div", { class: this.computedClassString(), style: this.inlineStyle }, h("div", { class: this.computedBackgroundClassString(), style: this.styleObject }, h("div", { class: `content-block-wrapper__inner${this.innerClassName ? ` ${this.innerClassName}` : ''}` }, h("slot", null)))));
  }
  get hostElement() { return getElement(this); }
};
ContentBlockWrapper.style = contentBlockWrapperCss;

export { ContentBlockWrapper as content_block_wrapper };
