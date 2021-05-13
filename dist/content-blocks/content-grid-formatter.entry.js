import { r as registerInstance, h } from './index-64ad35d7.js';
import { W as WindowResizeService } from './window-resize-service-5d97fa66.js';
import { g as getCurrentValue, b as generateResponsiveClass } from './utils-949e43b1.js';
import './index-52f709ec.js';

const contentGridFormatterCss = "content-grid-formatter{display:block}.content-grid-formatter-grid{display:grid;grid-template-columns:repeat(3, 1fr);width:100%;overflow:hidden}.content-grid-formatter-grid>*{overflow:hidden}.content-grid-formatter-flex{display:flex;width:100%;align-items:stretch;flex-wrap:wrap}.content-grid-formatter-flex.content-grid-formatter-flex--flex-start{justify-content:flex-start}.content-grid-formatter-flex.content-grid-formatter-flex--space-between{justify-content:space-between}.content-grid-formatter-flex.content-grid-formatter-flex--center{justify-content:center}.content-grid-formatter-flex.content-grid-formatter-flex--space-evenly{justify-content:space-evenly}.content-grid-formatter-flex [slot=column1],.content-grid-formatter-flex [slot=column2]{height:auto}.content-grid-formatter-cols-mobile-1.content-grid-formatter-grid{grid-template-columns:repeat(1, 1fr)}.content-grid-formatter-cols-mobile-1.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/1)}.content-grid-formatter-cols-mobile-1.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-1.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-2.content-grid-formatter-grid{grid-template-columns:repeat(2, 1fr)}.content-grid-formatter-cols-mobile-2.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/2)}.content-grid-formatter-cols-mobile-2.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-2.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-3.content-grid-formatter-grid{grid-template-columns:repeat(3, 1fr)}.content-grid-formatter-cols-mobile-3.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/3)}.content-grid-formatter-cols-mobile-3.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-3.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-4.content-grid-formatter-grid{grid-template-columns:repeat(4, 1fr)}.content-grid-formatter-cols-mobile-4.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/4)}.content-grid-formatter-cols-mobile-4.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-4.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-5.content-grid-formatter-grid{grid-template-columns:repeat(5, 1fr)}.content-grid-formatter-cols-mobile-5.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/5)}.content-grid-formatter-cols-mobile-5.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-5.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-6.content-grid-formatter-grid{grid-template-columns:repeat(6, 1fr)}.content-grid-formatter-cols-mobile-6.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/6)}.content-grid-formatter-cols-mobile-6.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-6.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-7.content-grid-formatter-grid{grid-template-columns:repeat(7, 1fr)}.content-grid-formatter-cols-mobile-7.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/7)}.content-grid-formatter-cols-mobile-7.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-7.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-8.content-grid-formatter-grid{grid-template-columns:repeat(8, 1fr)}.content-grid-formatter-cols-mobile-8.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/8)}.content-grid-formatter-cols-mobile-8.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-8.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-mobile-9.content-grid-formatter-grid{grid-template-columns:repeat(9, 1fr)}.content-grid-formatter-cols-mobile-9.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/9)}.content-grid-formatter-cols-mobile-9.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-mobile-9.content-grid-formatter-flex--grow>*{flex-grow:1}@media screen and (min-width: 768px){.content-grid-formatter-cols-tablet-portrait-1.content-grid-formatter-grid{grid-template-columns:repeat(1, 1fr)}.content-grid-formatter-cols-tablet-portrait-1.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/1)}.content-grid-formatter-cols-tablet-portrait-1.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-1.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-2.content-grid-formatter-grid{grid-template-columns:repeat(2, 1fr)}.content-grid-formatter-cols-tablet-portrait-2.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/2)}.content-grid-formatter-cols-tablet-portrait-2.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-2.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-3.content-grid-formatter-grid{grid-template-columns:repeat(3, 1fr)}.content-grid-formatter-cols-tablet-portrait-3.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/3)}.content-grid-formatter-cols-tablet-portrait-3.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-3.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-4.content-grid-formatter-grid{grid-template-columns:repeat(4, 1fr)}.content-grid-formatter-cols-tablet-portrait-4.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/4)}.content-grid-formatter-cols-tablet-portrait-4.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-4.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-5.content-grid-formatter-grid{grid-template-columns:repeat(5, 1fr)}.content-grid-formatter-cols-tablet-portrait-5.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/5)}.content-grid-formatter-cols-tablet-portrait-5.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-5.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-6.content-grid-formatter-grid{grid-template-columns:repeat(6, 1fr)}.content-grid-formatter-cols-tablet-portrait-6.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/6)}.content-grid-formatter-cols-tablet-portrait-6.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-6.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-7.content-grid-formatter-grid{grid-template-columns:repeat(7, 1fr)}.content-grid-formatter-cols-tablet-portrait-7.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/7)}.content-grid-formatter-cols-tablet-portrait-7.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-7.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-8.content-grid-formatter-grid{grid-template-columns:repeat(8, 1fr)}.content-grid-formatter-cols-tablet-portrait-8.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/8)}.content-grid-formatter-cols-tablet-portrait-8.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-8.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-portrait-9.content-grid-formatter-grid{grid-template-columns:repeat(9, 1fr)}.content-grid-formatter-cols-tablet-portrait-9.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/9)}.content-grid-formatter-cols-tablet-portrait-9.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-portrait-9.content-grid-formatter-flex--grow>*{flex-grow:1}}@media screen and (min-width: 1024px){.content-grid-formatter-cols-tablet-landscape-1.content-grid-formatter-grid{grid-template-columns:repeat(1, 1fr)}.content-grid-formatter-cols-tablet-landscape-1.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/1)}.content-grid-formatter-cols-tablet-landscape-1.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-1.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-2.content-grid-formatter-grid{grid-template-columns:repeat(2, 1fr)}.content-grid-formatter-cols-tablet-landscape-2.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/2)}.content-grid-formatter-cols-tablet-landscape-2.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-2.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-3.content-grid-formatter-grid{grid-template-columns:repeat(3, 1fr)}.content-grid-formatter-cols-tablet-landscape-3.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/3)}.content-grid-formatter-cols-tablet-landscape-3.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-3.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-4.content-grid-formatter-grid{grid-template-columns:repeat(4, 1fr)}.content-grid-formatter-cols-tablet-landscape-4.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/4)}.content-grid-formatter-cols-tablet-landscape-4.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-4.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-5.content-grid-formatter-grid{grid-template-columns:repeat(5, 1fr)}.content-grid-formatter-cols-tablet-landscape-5.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/5)}.content-grid-formatter-cols-tablet-landscape-5.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-5.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-6.content-grid-formatter-grid{grid-template-columns:repeat(6, 1fr)}.content-grid-formatter-cols-tablet-landscape-6.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/6)}.content-grid-formatter-cols-tablet-landscape-6.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-6.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-7.content-grid-formatter-grid{grid-template-columns:repeat(7, 1fr)}.content-grid-formatter-cols-tablet-landscape-7.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/7)}.content-grid-formatter-cols-tablet-landscape-7.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-7.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-8.content-grid-formatter-grid{grid-template-columns:repeat(8, 1fr)}.content-grid-formatter-cols-tablet-landscape-8.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/8)}.content-grid-formatter-cols-tablet-landscape-8.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-8.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-tablet-landscape-9.content-grid-formatter-grid{grid-template-columns:repeat(9, 1fr)}.content-grid-formatter-cols-tablet-landscape-9.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/9)}.content-grid-formatter-cols-tablet-landscape-9.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-tablet-landscape-9.content-grid-formatter-flex--grow>*{flex-grow:1}}@media screen and (min-width: 1280px){.content-grid-formatter-cols-desktop-1.content-grid-formatter-grid{grid-template-columns:repeat(1, 1fr)}.content-grid-formatter-cols-desktop-1.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/1)}.content-grid-formatter-cols-desktop-1.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-1.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-2.content-grid-formatter-grid{grid-template-columns:repeat(2, 1fr)}.content-grid-formatter-cols-desktop-2.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/2)}.content-grid-formatter-cols-desktop-2.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-2.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-3.content-grid-formatter-grid{grid-template-columns:repeat(3, 1fr)}.content-grid-formatter-cols-desktop-3.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/3)}.content-grid-formatter-cols-desktop-3.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-3.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-4.content-grid-formatter-grid{grid-template-columns:repeat(4, 1fr)}.content-grid-formatter-cols-desktop-4.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/4)}.content-grid-formatter-cols-desktop-4.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-4.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-5.content-grid-formatter-grid{grid-template-columns:repeat(5, 1fr)}.content-grid-formatter-cols-desktop-5.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/5)}.content-grid-formatter-cols-desktop-5.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-5.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-6.content-grid-formatter-grid{grid-template-columns:repeat(6, 1fr)}.content-grid-formatter-cols-desktop-6.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/6)}.content-grid-formatter-cols-desktop-6.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-6.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-7.content-grid-formatter-grid{grid-template-columns:repeat(7, 1fr)}.content-grid-formatter-cols-desktop-7.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/7)}.content-grid-formatter-cols-desktop-7.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-7.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-8.content-grid-formatter-grid{grid-template-columns:repeat(8, 1fr)}.content-grid-formatter-cols-desktop-8.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/8)}.content-grid-formatter-cols-desktop-8.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-8.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-9.content-grid-formatter-grid{grid-template-columns:repeat(9, 1fr)}.content-grid-formatter-cols-desktop-9.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/9)}.content-grid-formatter-cols-desktop-9.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-9.content-grid-formatter-flex--grow>*{flex-grow:1}}@media screen and (min-width: 1440px){.content-grid-formatter-cols-desktop-large-1.content-grid-formatter-grid{grid-template-columns:repeat(1, 1fr)}.content-grid-formatter-cols-desktop-large-1.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/1)}.content-grid-formatter-cols-desktop-large-1.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-1.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-2.content-grid-formatter-grid{grid-template-columns:repeat(2, 1fr)}.content-grid-formatter-cols-desktop-large-2.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/2)}.content-grid-formatter-cols-desktop-large-2.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-2.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-3.content-grid-formatter-grid{grid-template-columns:repeat(3, 1fr)}.content-grid-formatter-cols-desktop-large-3.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/3)}.content-grid-formatter-cols-desktop-large-3.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-3.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-4.content-grid-formatter-grid{grid-template-columns:repeat(4, 1fr)}.content-grid-formatter-cols-desktop-large-4.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/4)}.content-grid-formatter-cols-desktop-large-4.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-4.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-5.content-grid-formatter-grid{grid-template-columns:repeat(5, 1fr)}.content-grid-formatter-cols-desktop-large-5.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/5)}.content-grid-formatter-cols-desktop-large-5.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-5.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-6.content-grid-formatter-grid{grid-template-columns:repeat(6, 1fr)}.content-grid-formatter-cols-desktop-large-6.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/6)}.content-grid-formatter-cols-desktop-large-6.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-6.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-7.content-grid-formatter-grid{grid-template-columns:repeat(7, 1fr)}.content-grid-formatter-cols-desktop-large-7.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/7)}.content-grid-formatter-cols-desktop-large-7.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-7.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-8.content-grid-formatter-grid{grid-template-columns:repeat(8, 1fr)}.content-grid-formatter-cols-desktop-large-8.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/8)}.content-grid-formatter-cols-desktop-large-8.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-8.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-large-9.content-grid-formatter-grid{grid-template-columns:repeat(9, 1fr)}.content-grid-formatter-cols-desktop-large-9.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/9)}.content-grid-formatter-cols-desktop-large-9.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-large-9.content-grid-formatter-flex--grow>*{flex-grow:1}}@media screen and (min-width: 1920px){.content-grid-formatter-cols-desktop-wide-1.content-grid-formatter-grid{grid-template-columns:repeat(1, 1fr)}.content-grid-formatter-cols-desktop-wide-1.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/1)}.content-grid-formatter-cols-desktop-wide-1.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-1.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-2.content-grid-formatter-grid{grid-template-columns:repeat(2, 1fr)}.content-grid-formatter-cols-desktop-wide-2.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/2)}.content-grid-formatter-cols-desktop-wide-2.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-2.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-3.content-grid-formatter-grid{grid-template-columns:repeat(3, 1fr)}.content-grid-formatter-cols-desktop-wide-3.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/3)}.content-grid-formatter-cols-desktop-wide-3.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-3.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-4.content-grid-formatter-grid{grid-template-columns:repeat(4, 1fr)}.content-grid-formatter-cols-desktop-wide-4.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/4)}.content-grid-formatter-cols-desktop-wide-4.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-4.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-5.content-grid-formatter-grid{grid-template-columns:repeat(5, 1fr)}.content-grid-formatter-cols-desktop-wide-5.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/5)}.content-grid-formatter-cols-desktop-wide-5.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-5.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-6.content-grid-formatter-grid{grid-template-columns:repeat(6, 1fr)}.content-grid-formatter-cols-desktop-wide-6.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/6)}.content-grid-formatter-cols-desktop-wide-6.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-6.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-7.content-grid-formatter-grid{grid-template-columns:repeat(7, 1fr)}.content-grid-formatter-cols-desktop-wide-7.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/7)}.content-grid-formatter-cols-desktop-wide-7.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-7.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-8.content-grid-formatter-grid{grid-template-columns:repeat(8, 1fr)}.content-grid-formatter-cols-desktop-wide-8.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/8)}.content-grid-formatter-cols-desktop-wide-8.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-8.content-grid-formatter-flex--grow>*{flex-grow:1}.content-grid-formatter-cols-desktop-wide-9.content-grid-formatter-grid{grid-template-columns:repeat(9, 1fr)}.content-grid-formatter-cols-desktop-wide-9.content-grid-formatter-flex>*{flex:0 0 auto;width:calc(100%/9)}.content-grid-formatter-cols-desktop-wide-9.content-grid-formatter-flex--shrink>*{flex-shrink:1}.content-grid-formatter-cols-desktop-wide-9.content-grid-formatter-flex--grow>*{flex-grow:1}}";

const ContentGridFormatter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // Flex or grid 
    this.type = 'flex';
    this.flexGrow = 'false';
    this.flexShrink = 'false';
    this.flexAlign = 'space-between';
    this.columns = '1';
  }
  componentWillLoad() {
    WindowResizeService.breakpointIndex$.subscribe(() => {
      let type = getCurrentValue(this.type);
      let flexAlign = getCurrentValue(this.flexAlign);
      let flexShrink = getCurrentValue(this.flexShrink);
      let flexGrow = getCurrentValue(this.flexGrow);
      let classString = `content-grid-formatter-${type}`;
      if (type === 'flex') {
        classString += ` content-grid-formatter-${type}--${flexAlign}`;
        if (flexShrink) {
          classString += ` content-grid-formatter-${type}--shrink`;
        }
        if (flexGrow) {
          classString += ` content-grid-formatter-${type}--grow`;
        }
      }
      if (this.columns)
        classString += ` ${generateResponsiveClass('content-grid-formatter-cols', this.columns)}`;
      this.activeClassString = classString;
    });
  }
  render() {
    return (h("content-formatter-wrapper", { name: "content-grid-formatter" }, h("div", { class: this.activeClassString }, h("slot", null))));
  }
};
ContentGridFormatter.style = contentGridFormatterCss;

export { ContentGridFormatter as content_grid_formatter };
