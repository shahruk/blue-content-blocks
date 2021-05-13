import { r as registerInstance, h } from './index-64ad35d7.js';
import { W as WindowResizeService } from './window-resize-service-5d97fa66.js';
import { g as getCurrentValue, b as generateResponsiveClass } from './utils-949e43b1.js';
import './index-52f709ec.js';

const contentLineCss = "content-line{display:block;word-break:break-word;white-space:normal}content-line[max-width] .content-line__inner{display:inline-block}.content-line-text-align-mobile-left{text-align:left}.content-line-text-align-mobile-center{text-align:center}.content-line-text-align-mobile-right{text-align:right}@media screen and (min-width: 768px){.content-line-text-align-tablet-portrait-left{text-align:left}.content-line-text-align-tablet-portrait-center{text-align:center}.content-line-text-align-tablet-portrait-right{text-align:right}}@media screen and (min-width: 1024px){.content-line-text-align-tablet-landscape-left{text-align:left}.content-line-text-align-tablet-landscape-center{text-align:center}.content-line-text-align-tablet-landscape-right{text-align:right}}@media screen and (min-width: 1280px){.content-line-text-align-desktop-left{text-align:left}.content-line-text-align-desktop-center{text-align:center}.content-line-text-align-desktop-right{text-align:right}}@media screen and (min-width: 1440px){.content-line-text-align-desktop-large-left{text-align:left}.content-line-text-align-desktop-large-center{text-align:center}.content-line-text-align-desktop-large-right{text-align:right}}@media screen and (min-width: 1920px){.content-line-text-align-desktop-wide-left{text-align:left}.content-line-text-align-desktop-wide-center{text-align:center}.content-line-text-align-desktop-wide-right{text-align:right}}";

const ContentBlockLine = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The element tag to use.
     */
    this.tag = 'div';
    /**
     * Pipe separated list of ContentLineTextAlignOptions for text alignment.
     */
    this.textAlign = 'default';
    /**
     * Pipe separated list of max width numbers. You can also use units such as "px" and "vw".
     */
    this.maxWidth = '100%';
    this.activeClass = 'text-style--default';
    this.inlineStyle = {};
  }
  componentWillLoad() {
    if (this.styleClass) {
      WindowResizeService.breakpointIndex$.subscribe(() => {
        this.activeClass = getCurrentValue(this.styleClass);
        if (this.maxWidth) {
          this.inlineStyle = {
            'max-width': isNaN(getCurrentValue(this.maxWidth)) ? getCurrentValue(this.maxWidth) : getCurrentValue(this.maxWidth) + '%',
          };
        }
      });
    }
  }
  computedClasses() {
    let extraClasses = '';
    if (this.textAlign)
      extraClasses += `${generateResponsiveClass('content-line-text-align', this.textAlign)}`;
    return extraClasses;
  }
  render() {
    // The capital case in this JSX variable is important
    const ElementTagParsed = `${this.tag}`;
    return (h("content-element-wrapper", { name: "content-line", class: this.computedClasses() }, h(ElementTagParsed, { class: this.activeClass }, h("span", { class: "content-line__inner", style: this.inlineStyle }, h("slot", null)))));
  }
};
ContentBlockLine.style = contentLineCss;

export { ContentBlockLine as content_line };
