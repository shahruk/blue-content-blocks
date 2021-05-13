import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-64ad35d7.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-bd0bf1dc.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["content-split-block",[[4,"content-split-block",{"reverse":[4],"background":[1]}]]],["content-accordion",[[4,"content-accordion"]]],["content-block-formatter",[[4,"content-block-formatter"]]],["content-button",[[4,"content-button",{"href":[1025],"href2":[1,"href-2"],"target":[1],"styleClass":[1,"style-class"],"clickableBlock":[4,"clickable-block"],"expanded":[1],"controls":[1],"activeClass":[32]}]]],["content-carousel",[[4,"content-carousel",{"initMethod":[1,"init-method"],"mobileBackground":[1,"mobile-background"],"background":[1],"swiperOptions":[1,"swiper-options"]},[[0,"setSwiperOptions","setSwiperOptionsCallback"]]]]],["content-group",[[4,"content-group",{"mobileBackground":[1,"mobile-background"],"background":[1],"horizontalAlignment":[1,"horizontal-alignment"]}]]],["content-hero-block",[[4,"content-hero-block",{"contentPosition":[1,"content-position"],"background":[1],"activeClasses":[32],"revealHiddenContent":[32]},[[8,"contentBlockActivated","contentBlockActivationHandler"]]]]],["content-element-wrapper",[[4,"content-element-wrapper",{"name":[1],"styleClasses":[1,"style-classes"]}]]],["content-image",[[0,"content-image",{"lazyLoad":[4,"lazy-load"],"src":[1],"alt":[1],"width":[1],"height":[1],"videoType":[1,"video-type"],"lazyLoadIsComplete":[32],"showVideo":[32],"mediaValues":[32]}]]],["content-line",[[4,"content-line",{"tag":[1],"textAlign":[1,"text-align"],"styleClass":[1,"style-class"],"maxWidth":[1,"max-width"],"activeClass":[32],"inlineStyle":[32]}]]],["content-tabs",[[4,"content-tabs"]]],["content-text-block",[[4,"content-text-block",{"colorClass":[1,"color-class"],"background":[1],"verticalAlignment":[1,"vertical-alignment"],"styleClasses":[32]}]]],["content-tout-block",[[4,"content-tout-block",{"hover":[1],"hasHoverContent":[32]}]]],["content-video",[[4,"content-video",{"fitContainer":[4,"fit-container"],"method":[1],"autoplay":[4],"src":[1],"width":[2],"height":[2],"type":[1],"styleClasses":[1,"style-classes"],"controls":[4],"preload":[1],"isLoaded":[32],"hasPoster":[32],"isPlayed":[32]}]]],["content-overlay",[[4,"content-overlay",{"target":[1],"fullScreen":[1,"full-screen"],"styleClass":[1,"style-class"],"horizontalAlignment":[1,"horizontal-alignment"],"verticalAlignment":[1,"vertical-alignment"],"closeTitle":[1,"close-title"],"isActive":[32],"activeClass":[32]},[[8,"contentBlockActivated","onContentBlockActivated"],[0,"ariaDialog.closed","onAriaDialogClosed"]]]]],["content-spacing-wrapper",[[4,"content-spacing-wrapper",{"maxWidth":[1,"max-width"],"fullHeight":[1,"full-height"],"textAlign":[1,"text-align"],"horizontalAlignment":[1,"horizontal-alignment"],"topOffset":[1,"top-offset"],"bottomOffset":[1,"bottom-offset"],"leftOffset":[1,"left-offset"],"rightOffset":[1,"right-offset"],"offsetClass":[1,"offset-class"],"inlineStyle":[32]}]]],["content-formatter-wrapper",[[4,"content-formatter-wrapper",{"background":[1],"name":[1],"extraClasses":[1,"extra-classes"]}]]],["content-grid-formatter",[[4,"content-grid-formatter",{"type":[1],"flexGrow":[1,"flex-grow"],"flexShrink":[1,"flex-shrink"],"flexAlign":[1,"flex-align"],"columns":[1]}]]],["content-block-wrapper",[[4,"content-block-wrapper",{"background":[1],"name":[1],"styleClasses":[1,"style-classes"],"backgroundClasses":[1,"background-classes"],"maxWidth":[1,"max-width"],"styleObject":[32],"inlineStyle":[32]}]]]], options);
});
