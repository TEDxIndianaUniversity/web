

class WixWebShareButton extends HTMLElement {
    static observedAttributes = ["label", "share-data"];
    constructor() { super(); }
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() {
        this.render();
        this.addEventListener('click', async () => {
            try {
                await navigator.share(
                    { title: this.getAttribute("share-title"), text: this.getAttribute("share-text"), url: this.getAttribute("share-url") }
                );
            }
            catch (err) { console.error(`Web Share API Error: ${err}`); }
        })





    }
    attributeChangedCallback() { this.render(); }
    render() {
        const c = `<div data-testid="linkElement" style="height: max-content;" class="VU4Mnk wixui-button wixui-tedx-button tedx-button wixui-sharebutton-vw sharebutton-vw wixui-no-arrow no-arrow wixui-webshare-button webshare-button PlZyDq" aria-disabled="false"><span class="w4Vxx6 wixui-button__label" style="font-size: 14px;">${this.getAttribute("label")}</span></div>`
        this.innerHTML = c;
    }
}
customElements.define("tedx-wix-share-button", WixWebShareButton);



class WixOpenDateEmbed extends HTMLElement {
    static observedAttributes = ["event-id"];
    constructor() { super(); }
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() {this.render();}
    attributeChangedCallback() { this.changeId(); }
    changeId() {
        const frame = document.querySelectorAll(`[id^=od-confirm-]`)[0];
        frame.setAttribute('src', `https://app.opendate.io/confirms/${this.getAttribute("event-id")}/web_orders/new`);
    }
    render() {
        
        this.id = `od-embed-${this.getAttribute("event-id")}`;
        const embedScript = document.createElement('script');
        embedScript.setAttribute('src', 'https://app.opendate.io/packs/od_embed.js')
        const frame = document.createElement("iframe");
        Object.assign(frame, {
            id: `od-confirm-${this.getAttribute("event-id")}-iframe`,
            title: 'Opendate',
            scrolling: 'no',
            allowpaymentrequest: 'true',
            style: 'border:none; width: 1px; min-width: 100%;transition: all .5s ease-in-out;'
        });
        const alertStyle = document.createElement('style');
        alertStyle.innerText = `:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:'Inter',system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33,37,41,.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33,37,41,.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0,0,0,.175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0,0,0,.15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0,0,0,.075);--bs-box-shadow-lg:0 1rem 3rem rgba(0,0,0,.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0,0,0,.075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13,110,253,.25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545;}.alert{visibility:visible!important;--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);font-family:var(--bs-font-sans-serif);font-size:1.2em;border-radius:var(--bs-alert-border-radius);}.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis);}.text-center{text-align:center!important;}`;
        const alertEl = document.createElement('div');
        alertEl.innerHTML = `<div class="alert alert-warning text-center" style="z-index: 1000; margin: 0 auto;"><strong>Use a Browser Set to English (US)</strong><br><br>There is an error due to the browser's language or region. <strong>Consider using a browser set to English (US)</strong>, which does not exhibit the error.<br><br>This is not your or your device's fault. Venue developers are working to resolve this inequitable issue. We sincerely apologize for the inconvenience.</div>`;


        frame.addEventListener('load', () => {
            this.dispatchEvent(
                new CustomEvent("iframe-did-load", {
                    bubbles: true,
                    cancelable: false,
                    composed: true
                }),
            );
        })
        
        let errorFree = false;
        try {
            var __thousands = '';
            var __decimal = '';
            if (Intl) {
                var num = new Intl.NumberFormat().formatToParts(1000.1);
                __thousands = num[1].value;
                __decimal = num[3].value;
            }
            errorFree = true;
        } catch {
            errorFree = false;
        }
        const errorEvent = new CustomEvent("iframe-error-show", {
            bubbles: true,
            cancelable: false,
            composed: true
        });
        
        
        this.addEventListener('iframe-error-show', (ev) => {
            console.log('event received:' + ev);
        })
       

        if (errorFree) {
            frame.setAttribute('src', `https://app.opendate.io/confirms/${this.getAttribute("event-id")}/web_orders/new`);
            const resizerInit = document.createElement('script');
            resizerInit.innerText = `ODEmbed("od-confirm-${this.getAttribute("event-id")}-iframe");`;
            this.insertAdjacentElement('afterend', embedScript);
            embedScript.insertAdjacentElement('afterend', frame);
            frame.insertAdjacentElement('afterend', resizerInit);
        } else {
            this.dispatchEvent(errorEvent);
            this.insertAdjacentElement('afterend', alertStyle);
            alertStyle.insertAdjacentElement('afterend', alertEl);
            this.style.width = 0;
            this.style.height = 0;
        }
    }
}
customElements.define("tedx-wix-opendate-embed", WixOpenDateEmbed);


class MetaSetter extends HTMLElement {
    static observedAttributes = ["name", "content"];
    constructor() { super(); }
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() {this.render();}
    attributeChangedCallback() { this.render(); }
    render() {
        document.querySelector(`meta[name="${this.getAttribute("name")}"]`).setAttribute("content", this.getAttribute("content"));
    }
}
customElements.define("tedx-set-meta", MetaSetter);

class RoomCalendar extends HTMLElement {
    static observedAttributes = ["room-data", "room-code"];
    constructor() { super(); }
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() {
        const calScript = document.createElement('script');
        calScript.src = './calendar/cal-logic.js';
        document.head.appendChild(calScript);
        
        const calLink = document.createElement('style');
        calLink.innerHTML = `.ec{color-scheme:light;--ec-h:0;--ec-s:0%;--ec-l-300:91.00%;--ec-l-500:83.50%;--ec-l-600:78.40%;--ec-l-700:71.40%;--ec-bg-fallback-color:#fff;--ec-hs:var(--ec-h),var(--ec-s);--ec-color-300:hsl(var(--ec-hs),var(--ec-l-300));--ec-color-500:hsl(var(--ec-hs),var(--ec-l-500));--ec-color-600:hsl(var(--ec-hs),var(--ec-l-600));--ec-color-700:hsl(var(--ec-hs),var(--ec-l-700));--ec-border-color:var(--ec-color-500);--ec-accent-color:var(--ec-color-600);--ec-button-bg-color:var(--ec-bg-color);--ec-button-border-color:var(--ec-color-600);--ec-button-text-color:var(--ec-text-color);--ec-button-active-bg-color:var(--ec-color-300);--ec-button-active-border-color:var(--ec-color-700);--ec-button-active-text-color:var(--ec-button-text-color);--ec-event-bg-color:#039be5;--ec-event-text-color:#fff;--ec-bg-event-color:var(--ec-color-500);--ec-bg-event-opacity:0.3;--ec-list-day-bg-color:var(--ec-bg-color,var(--ec-bg-fallback-color));--ec-today-bg-color:rgba(255,220,40,.15);--ec-highlight-color:rgba(188,232,241,.3);--ec-popup-bg-color:var(--ec-bg-color,var(--ec-bg-fallback-color));--ec-now-indicator-color:#ea4335}.ec-dark .ec{color-scheme:dark;--ec-h:215;--ec-s:15%;--ec-l-300:25.50%;--ec-l-500:42.40%;--ec-l-600:49.80%;--ec-l-700:57.30%;--ec-bg-fallback-color:#22272e}@media(prefers-color-scheme:dark){.ec-auto-dark .ec{color-scheme:dark;--ec-h:215;--ec-s:15%;--ec-l-300:25.50%;--ec-l-500:42.40%;--ec-l-600:49.80%;--ec-l-700:57.30%;--ec-bg-fallback-color:#22272e}}.ec-timeline .ec-container{display:flex;flex:1 1 0%;min-height:0}.ec-timeline .ec-main{display:flex;flex-direction:column;min-width:0}.ec-timeline .ec-content{flex-direction:column}.ec-timeline .ec-body{flex:1 1 auto;overflow:auto}.ec-timeline .ec-body .ec-content{min-height:100%;min-width:-moz-max-content;min-width:max-content;position:relative}.ec-timeline .ec-body .ec-days{flex-shrink:0}.ec-timeline .ec-body .ec-days:not(:last-child){flex-grow:0}.ec-timeline .ec-header{overflow:hidden}.ec-timeline .ec-header .ec-days{min-width:-moz-max-content;min-width:max-content}.ec-timeline .ec-header .ec-day{display:flex;flex-basis:auto;flex-direction:column}.ec-timeline .ec-day,.ec-timeline .ec-header .ec-day:first-child .ec-day-head,.ec-timeline .ec-header .ec-day:first-child .ec-time:first-child{border:none}.ec-timeline .ec-day-head{border-style:none none none solid}.ec-timeline .ec-times{border-top:1px solid var(--ec-border-color);display:flex}.ec-timeline .ec-time{border-left:1px solid var(--ec-border-color);box-sizing:border-box;font-size:.95em;min-height:24px;overflow:hidden;text-overflow:ellipsis}.ec-timeline .ec-line,.ec-timeline .ec-time{width:72px}.ec-timeline .ec-events{height:100%;margin:0;position:relative}.ec-timeline .ec-event{position:absolute}.ec-timeline .ec-bg-event{height:100%;z-index:auto}.ec-timeline .ec-lines{display:flex}.ec-timeline .ec-line:not(:first-child):after{border-left:1px solid var(--ec-border-color);content:"";height:100%;pointer-events:none;position:absolute}.ec-timeline .ec-sidebar{border-right-style:solid;border:1px solid var(--ec-border-color);border-right:1px var(--ec-border-color);padding:0}.ec-timeline .ec-sidebar .ec-sidebar-title{border-bottom:1px solid var(--ec-border-color);box-sizing:initial;flex-shrink:0}.ec-timeline .ec-sidebar .ec-content{flex:1;overflow:hidden}.ec-timeline .ec-sidebar .ec-resource{flex-shrink:0;padding:0 8px}.ec-timeline .ec-sidebar .ec-resource:not(:last-child){border-bottom:1px solid var(--ec-border-color);flex-grow:0}.ec-timeline .ec-sidebar .ec-resource:last-child{flex-basis:100%!important}.ec-timeline .ec-sidebar .ec-resource span{padding-top:8px}.ec-time-grid .ec-body .ec-event{position:absolute}.ec-time-grid .ec-body .ec-event-title{position:sticky;top:0}.ec-time-grid .ec-body .ec-resizer{bottom:0;cursor:ns-resize;height:50%;left:0;max-height:8px;right:0}.ec-time-grid .ec-body .ec-resizer.ec-start{bottom:auto;top:0}.ec-time-grid .ec-bg-event{width:100%;z-index:1}.ec-time-grid .ec-time{line-height:24px;position:relative;text-align:right;top:-12px}.ec-time-grid .ec-all-day .ec-time,.ec-time-grid .ec-header .ec-time{height:0;overflow-y:hidden;visibility:hidden}.ec-time-grid .ec-line,.ec-time-grid .ec-time{height:24px}.ec-time-grid .ec-lines{width:8px}.ec-time-grid .ec-line:not(:first-child):after{border-bottom:1px solid var(--ec-border-color);content:"";pointer-events:none;position:absolute;width:100%}.ec-time-grid .ec-body:not(.ec-compact) .ec-line:nth-child(2n):after{border-bottom-style:dotted}.ec-time-grid .ec-sidebar-title{height:0;overflow-y:hidden;text-align:right;visibility:hidden}.ec-time-grid .ec-all-day .ec-sidebar-title{height:auto;padding:8px 0;visibility:visible}.ec-day-grid .ec-body{flex:1 1 auto}.ec-day-grid .ec-body .ec-day{min-height:5em;position:relative}.ec-day-grid .ec-content{flex-direction:column;height:100%}.ec-day-grid .ec-uniform .ec-content{overflow:hidden}.ec-day-grid .ec-uniform .ec-days{flex:1 1 0%;min-height:0}.ec-day-grid .ec-uniform .ec-day{min-height:0}.ec-day-grid .ec-day:first-child{border-left:none}.ec-day-grid .ec-day-head{border:none;display:flex;flex-direction:row-reverse;justify-content:space-between;padding:4px 4px 3px}.ec-day-grid .ec-day-foot{bottom:0;font-size:.85em;padding:2px;position:absolute}.ec-day-grid .ec-day-foot a{cursor:pointer}.ec-day,.ec-days,.ec-resource{flex:1 1 0;max-width:100%;min-width:0}.ec{background-color:var(--ec-bg-color);color:var(--ec-text-color);display:flex;flex-direction:column;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ec ::-webkit-scrollbar{background-color:transparent}.ec ::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:var(--ec-border-color);border:4px solid transparent;border-radius:8px;box-shadow:none;min-height:40px}.ec :hover::-webkit-scrollbar-thumb{background-color:var(--ec-accent-color)}.ec-hidden-scroll{display:none;flex-shrink:0;overflow-y:scroll;visibility:hidden}.ec-with-scroll .ec-hidden-scroll{display:block}.ec-toolbar{align-items:center;display:flex;flex:0 0 auto;justify-content:space-between;margin-bottom:1em}.ec-toolbar>*{margin-bottom:-.5em}.ec-toolbar>*>*{margin-bottom:.5em}.ec-toolbar>*>:not(:last-child){margin-right:.75em}.ec-title{margin:0}.ec-button{background-color:var(--ec-button-bg-color);border:1px solid var(--ec-button-border-color);border-radius:.25rem;font-size:1rem;line-height:1.5;padding:.375rem .75rem}.ec-button:not(:disabled){color:var(--ec-button-text-color);cursor:pointer}.ec-button.ec-active,.ec-button:not(:disabled):hover{background-color:var(--ec-button-active-bg-color);border-color:var(--ec-button-active-border-color);color:var(--ec-button-active-text-color);z-index:1}.ec-expander{margin-right:.25em;width:1.25em}.ec-expander .ec-button{aspect-ratio:1;height:1.25em;line-height:normal;padding:0}.ec-button-group{display:inline-flex}.ec-button-group .ec-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.ec-button-group .ec-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.ec-icon{display:inline-block;width:1em}.ec-icon.ec-next:after,.ec-icon.ec-prev:after{border-right:2px solid;border-top:2px solid;content:"";display:inline-block;height:.5em;position:relative;width:.5em}.ec-icon.ec-prev:after{transform:rotate(-135deg) translate(-2px,2px)}.ec-icon.ec-next:after{transform:rotate(45deg) translate(-2px,2px)}.ec-all-day,.ec-body,.ec-day,.ec-day-head,.ec-days,.ec-header{border:1px solid var(--ec-border-color)}.ec-header{display:flex;flex-shrink:0}.ec-header .ec-resource{flex-direction:column}.ec-header .ec-resource .ec-days{border-top-style:solid}.ec-header .ec-days{border-bottom:none}.ec-header .ec-day{line-height:24px;min-height:24px;overflow:hidden;text-align:center;text-overflow:ellipsis}.ec-all-day{border-top:none;flex-shrink:0}.ec-all-day .ec-days{border-bottom:none}.ec-all-day .ec-day{padding-bottom:4px;position:relative}.ec-body{overflow-x:hidden;overflow-y:auto;position:relative}.ec:not(.ec-list) .ec-body{border-top:none}.ec-sidebar{flex:0 0 auto;flex-direction:column;max-width:100%;padding:0 4px 0 8px;width:auto}.ec-content,.ec-sidebar{display:flex}.ec-list .ec-content{flex-direction:column}.ec-days,.ec-resource{display:flex}.ec-days{border-style:none none solid}.ec-days:last-child{border-bottom:none}.ec-day-grid .ec-days,.ec-resource .ec-days{flex:1 0 auto}.ec-day{border-style:none none none solid}.ec-day.ec-today{background-color:var(--ec-today-bg-color)}.ec-day.ec-highlight{background-color:var(--ec-highlight-color)}.ec-day.ec-other-month .ec-day-head time{opacity:.3}.ec-list .ec-day{border:none}.ec-list .ec-day-head{background-color:var(--ec-list-day-bg-color);border-style:solid none;margin:-1px 0 0;padding:8px 14px;position:sticky;top:0;z-index:2}.ec-list .ec-day:first-child .ec-day-head{border-top:none}.ec-list .ec-day-side{float:right}.ec-list .ec-no-events{padding:5em 0;text-align:center}.ec-events{margin:0 6px 0 0}.ec-events.ec-preview,.ec-time-grid .ec-events{position:relative}.ec-all-day .ec-events,.ec-day-grid .ec-events{display:flow-root}.ec-event{background-color:var(--ec-event-bg-color);border-radius:3px;box-shadow:0 0 1px 0 var(--ec-border-color);box-sizing:border-box;color:var(--ec-event-text-color);display:flex;font-size:.85em;line-height:1.5;padding:2px;z-index:1}.ec-all-day .ec-event,.ec-day-grid .ec-event{position:relative}.ec-list .ec-event{background-color:transparent;border-radius:0;color:inherit;flex-direction:row;padding:8px 14px}.ec-event.ec-preview{opacity:.8;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;z-index:1000}.ec-event.ec-pointer{box-shadow:none;color:inherit;display:flex;pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:0}.ec-event-body{display:flex;flex-direction:column;width:100%}.ec-all-day .ec-event-body,.ec-day-grid .ec-event-body,.ec-timeline .ec-event-body{flex-direction:row}.ec-event-tag{border-radius:2px;margin-right:8px;width:4px}.ec-event-time{flex-shrink:0;margin:0 0 1px;max-height:100%;overflow:hidden;white-space:nowrap}.ec-day-grid .ec-event-time,.ec-timeline .ec-event-time{margin:0 3px 0 0;max-width:100%;text-overflow:ellipsis}.ec-event-title{font-weight:inherit;margin:unset;overflow:hidden}.ec-all-day .ec-event-title,.ec-day-grid .ec-event-title,.ec-timeline .ec-event-title{min-height:1.5em;text-overflow:ellipsis;white-space:nowrap}.ec-list .ec-event-title{font-size:1rem}.ec-draggable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ec-ghost{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ec-bg-events{position:relative}.ec-all-day .ec-bg-events,.ec-day-grid .ec-bg-events{inset:0;position:absolute}.ec-bg-event{background-color:var(--ec-bg-event-color);opacity:var(--ec-bg-event-opacity);position:absolute}.ec-all-day .ec-bg-event,.ec-day-grid .ec-bg-event{height:100%;z-index:auto}.ec-time{white-space:nowrap}.ec-popup{background-color:var(--ec-popup-bg-color);border:1px solid var(--ec-border-color);border-radius:6px;box-shadow:0 1px 3px 0 hsla(var(--ec-hs),50%,.15),0 4px 8px 3px hsla(var(--ec-hs),50%,.15);display:flex;flex-direction:column;min-width:180px;outline:1px solid transparent;padding:8px 10px 14px;position:absolute;top:0;width:110%;z-index:1010}.ec-popup .ec-day-head{display:flex;justify-content:space-between;text-align:left}.ec-popup .ec-day-head a{cursor:pointer;font-size:1.5em;line-height:.8}.ec-popup .ec-events{margin:0;min-height:0;overflow:auto}.ec-extra{height:100%;margin-left:-6.5px;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ec-now-indicator{border-top:2px solid var(--ec-now-indicator-color);pointer-events:none;position:absolute;width:100%;z-index:1005}.ec-now-indicator:before{background:var(--ec-now-indicator-color);border-radius:50%;content:"";height:12px;margin-top:-7px;pointer-events:none;position:absolute;width:12px}.ec-resizer{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ec-all-day .ec-resizer,.ec-day-grid .ec-resizer,.ec-timeline .ec-resizer{bottom:0;cursor:ew-resize;max-width:8px;right:0;top:0;width:50%}.ec-all-day .ec-resizer.ec-start,.ec-day-grid .ec-resizer.ec-start,.ec-timeline .ec-resizer.ec-start{left:0;right:auto}.ec-dragging{cursor:pointer!important}.ec-resizing-y{cursor:ns-resize!important}.ec-resizing-x{cursor:ew-resize!important}`;
        document.head.appendChild(calLink);
        this.render();
    }
    attributeChangedCallback() { this.render(); }
    render() {
        let calendarData = [];
        const databaseBuildingIds = {"BH":"1","CH":"2","ED":"3","EP":"4","FA":"5","GY":"6","PH":"7","JH":"8","LI":"9","LH":"10","MO":"11","SM":"12","MY":"13","OP":"14","PY":"15","TV":"16","RH":"17","RB":"18","PV":"19","FF":"20","SB":"21","SY":"22","TH":"23","WH":"24","WY":"25","KH":"26","HH":"27","SE":"28","SW":"29","GL":"36","HU":"39","AD":"42","AC":"43","GR":"46","MN":"47","GA":"48","CG":"126","MC":"127","TE":"137","WT":"138","SG":"173","BQ":"174","IF":"175","FQ":"176","FR":"177","GG":"178","RA":"179","RE":"180","WI":"181","C2":"184","EO":"189","MU":"190","UB":"192","I":"193","MA":"195","NA":"204","LS":"205","AN":"206","AS":"207","AZ":"208","ZB":"209","BC":"210","CP":"211","FX":"212","GF":"213","FV":"214","CS":"215","S7":"218","EG":"219","PC":"220","NT":"221","M2":"223","LW":"224","JS":"225","KD":"226","GS":"228","CN":"229","CX":"230","PB":"458","MG":"459","PJ":"460","CL":"470","VW":"471","MS":"473","MZ":"479","HC":"481","TC":"483","AB":"484","CU":"485","HS":"486","CR":"489","AM":"490","AH":"493","HI":"494","LU":"495","VD":"496","HL":"500","LL":"501","OA":"504","NV":"505"};
        const ctsBuildingId = databaseBuildingIds[this.getAttribute('room-code').substring(2,4).replace(' ','')];
        const roomNumber = this.getAttribute('room-code').split(' ')[1];
        const classroomDatabaseURL = `https://cts.iu.edu/rooms/search?campus_id=1&building_id=${ctsBuildingId}&room_number=${roomNumber}&room_number_exact_search=%7Cexact%7C`;
        JSON.parse(this.getAttribute('room-data')).forEach(event => {
            calendarData.push({
                "id" : event['id'],
                "allDay" : event['all_day'] == 0 ? false : true,
                "start" : event['start'],
                "end" : event['end'],
                "editable" : false,
                "startEditable" : false,
                "durationEditable" : false,
                "title" : "Event"
            })
        });
        console.log(calendarData);
        // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@event-calendar/build@3.9.0/event-calendar.min.css">
        // <script src="https://cdn.jsdelivr.net/npm/@event-calendar/build@3.9.0/event-calendar.min.js"></script>
        

        this.innerHTML = `
        
        <div id="ec"></div>
        `;
        
        const initScript = document.createElement('script');
        initScript.innerHTML = `const ec = new EventCalendar(document.getElementById('ec'), 
        {view: 'timeGridDay', 
        headerToolbar: {start: 'prev,next',center: 'title',end: 'today'},
        resources: [{id: 1, title: '${this.getAttribute('room-code')}'}],
        scrollTime: '09:00:00',
        events: ${JSON.stringify(calendarData)},
        views: {
            timeGridWeek: {pointer: true},
            resourceTimeGridWeek: {pointer: true},
            resourceTimelineWeek: {
                pointer: true,
                slotMinTime: '09:00',
                slotMaxTime: '21:00',
                slotWidth: 80,
                resources: [{id: 1, title: '${this.getAttribute('room-code')}'}]
            }
        },dayMaxEvents: true,nowIndicator: true,selectable: true});`;
    this.insertAdjacentElement('afterend', initScript);

    }
}


customElements.define("tedx-room-calendar", RoomCalendar);