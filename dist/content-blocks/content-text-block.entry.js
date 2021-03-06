import { r as registerInstance, h, g as getElement } from './index-64ad35d7.js';
import { W as WindowResizeService } from './window-resize-service-5d97fa66.js';
import { b as generateResponsiveClass, g as getCurrentValue } from './utils-949e43b1.js';
import './index-52f709ec.js';

const contentTextBlockCss = ".light,.white{color:white}.dark,.black{color:black}content-text-block{display:block;width:100%;height:100%;text-align:initial}content-text-block .content-text-block{height:100%}content-text-block .content-text-block__wrapper{height:100%}content-text-block .content-text-block__wrapper>[slot=footer]{padding-top:1rem}@media screen and (min-width: 1024px){content-text-block .content-text-block__wrapper>[slot=footer]{margin-top:auto;margin-bottom:0;width:100%;height:auto}}content-text-block[vertical-alignment=bottom] .content-text-block__wrapper>[slot=footer]{position:static}.content-text-block-vertical-align{display:flex;flex-direction:column;height:100%}.content-text-block-vertical-align>*{display:block;width:100%}.content-text-block-vertical-align-mobile-top{justify-content:flex-start}.content-text-block-vertical-align-mobile-center{justify-content:center}.content-text-block-vertical-align-mobile-center.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-mobile-bottom{justify-content:flex-end}.content-text-block-vertical-align-mobile-bottom.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-mobile-bottom.content-text-block__wrapper--footer [slot=footer]{margin-top:0}@media screen and (min-width: 768px){.content-text-block-vertical-align-tablet-portrait-top{justify-content:flex-start}.content-text-block-vertical-align-tablet-portrait-center{justify-content:center}.content-text-block-vertical-align-tablet-portrait-center.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-tablet-portrait-bottom{justify-content:flex-end}.content-text-block-vertical-align-tablet-portrait-bottom.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-tablet-portrait-bottom.content-text-block__wrapper--footer [slot=footer]{margin-top:0}}@media screen and (min-width: 1024px){.content-text-block-vertical-align-tablet-landscape-top{justify-content:flex-start}.content-text-block-vertical-align-tablet-landscape-center{justify-content:center}.content-text-block-vertical-align-tablet-landscape-center.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-tablet-landscape-bottom{justify-content:flex-end}.content-text-block-vertical-align-tablet-landscape-bottom.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-tablet-landscape-bottom.content-text-block__wrapper--footer [slot=footer]{margin-top:0}}@media screen and (min-width: 1280px){.content-text-block-vertical-align-desktop-top{justify-content:flex-start}.content-text-block-vertical-align-desktop-center{justify-content:center}.content-text-block-vertical-align-desktop-center.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-desktop-bottom{justify-content:flex-end}.content-text-block-vertical-align-desktop-bottom.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-desktop-bottom.content-text-block__wrapper--footer [slot=footer]{margin-top:0}}@media screen and (min-width: 1440px){.content-text-block-vertical-align-desktop-large-top{justify-content:flex-start}.content-text-block-vertical-align-desktop-large-center{justify-content:center}.content-text-block-vertical-align-desktop-large-center.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-desktop-large-bottom{justify-content:flex-end}.content-text-block-vertical-align-desktop-large-bottom.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-desktop-large-bottom.content-text-block__wrapper--footer [slot=footer]{margin-top:0}}@media screen and (min-width: 1920px){.content-text-block-vertical-align-desktop-wide-top{justify-content:flex-start}.content-text-block-vertical-align-desktop-wide-center{justify-content:center}.content-text-block-vertical-align-desktop-wide-center.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-desktop-wide-bottom{justify-content:flex-end}.content-text-block-vertical-align-desktop-wide-bottom.content-text-block__wrapper--footer .content-text-block__content{margin-top:auto;margin-bottom:0}.content-text-block-vertical-align-desktop-wide-bottom.content-text-block__wrapper--footer [slot=footer]{margin-top:0}}";

const ContentTextBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * This is a string representing the theme class. This value must be
     * created in a custom theme stylesheet using `@include responsiveProperty`.
     * This will output in the following format: `theme-${breakpoint}-${value}`
     */
    this.colorClass = 'color--default';
    /**
     * Pipe separated list of ContentVerticalAlignments for text box placement.
     */
    this.verticalAlignment = 'top';
    this.styleClasses = '';
  }
  computedClasses() {
    let extraClasses = 'content-text-block__wrapper';
    if (this.verticalAlignment)
      extraClasses += ` content-text-block-vertical-align ${generateResponsiveClass('content-text-block-vertical-align', this.verticalAlignment)}`;
    if (!!this.hostElement.querySelector('[slot="footer"]')) {
      extraClasses += ' content-text-block__wrapper--footer';
    }
    return extraClasses;
  }
  computedBackgroundClasses() {
    let extraClasses = '';
    if (this.verticalAlignment)
      extraClasses += ` content-text-block-vertical-align ${generateResponsiveClass('content-text-block-vertical-align', this.verticalAlignment)}`;
    return extraClasses;
  }
  componentWillLoad() {
    WindowResizeService.breakpointIndex$.subscribe(() => {
      let value = getCurrentValue(this.colorClass);
      this.styleClasses = `${value ? ' ' + value : ''}`;
    });
  }
  render() {
    return (h("content-block-wrapper", { name: "content-text-block", "style-classes": this.styleClasses, "background-classes": this.computedBackgroundClasses(), background: this.background }, h("div", { class: this.computedClasses() }, h("div", { class: "content-text-block__content" }, h("slot", null)), h("slot", { name: "footer" }))));
  }
  get hostElement() { return getElement(this); }
};
ContentTextBlock.style = contentTextBlockCss;

export { ContentTextBlock as content_text_block };
