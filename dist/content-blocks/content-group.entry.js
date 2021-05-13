import { r as registerInstance, h } from './index-64ad35d7.js';
import { b as generateResponsiveClass } from './utils-949e43b1.js';

const contentGroupCss = "content-group{display:block}.content-group__content{display:flex}.content-group__content>*{flex:0 0 auto}.content-group-align-mobile-left .content-group__content{justify-content:flex-start}.content-group-align-mobile-center .content-group__content{justify-content:center}.content-group-align-mobile-right .content-group__content{justify-content:flex-end}@media screen and (min-width: 768px){.content-group-align-tablet-portrait-left .content-group__content{justify-content:flex-start}.content-group-align-tablet-portrait-center .content-group__content{justify-content:center}.content-group-align-tablet-portrait-right .content-group__content{justify-content:flex-end}}@media screen and (min-width: 1024px){.content-group-align-tablet-landscape-left .content-group__content{justify-content:flex-start}.content-group-align-tablet-landscape-center .content-group__content{justify-content:center}.content-group-align-tablet-landscape-right .content-group__content{justify-content:flex-end}}@media screen and (min-width: 1280px){.content-group-align-desktop-left .content-group__content{justify-content:flex-start}.content-group-align-desktop-center .content-group__content{justify-content:center}.content-group-align-desktop-right .content-group__content{justify-content:flex-end}}@media screen and (min-width: 1440px){.content-group-align-desktop-large-left .content-group__content{justify-content:flex-start}.content-group-align-desktop-large-center .content-group__content{justify-content:center}.content-group-align-desktop-large-right .content-group__content{justify-content:flex-end}}@media screen and (min-width: 1920px){.content-group-align-desktop-wide-left .content-group__content{justify-content:flex-start}.content-group-align-desktop-wide-center .content-group__content{justify-content:center}.content-group-align-desktop-wide-right .content-group__content{justify-content:flex-end}}";

const ContentGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * A ResponsiveString of ContentLineTextAlignOptions
     */
    this.horizontalAlignment = 'default';
  }
  computedClasses() {
    let extraClasses = generateResponsiveClass('content-group-align', this.horizontalAlignment);
    return extraClasses;
  }
  render() {
    return (h("content-block-wrapper", { name: "content-group", "background-mobile": this.mobileBackground, background: this.background, styleClasses: this.computedClasses() }, h("div", { class: "content-group__content" }, h("slot", null))));
  }
};
ContentGroup.style = contentGroupCss;

export { ContentGroup as content_group };
