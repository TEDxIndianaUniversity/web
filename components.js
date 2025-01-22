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
    connectedCallback() {
        
        this.render();
    }
    attributeChangedCallback() { this.render(); }
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
        alertEl.innerHTML = `<div class="alert alert-warning text-center" style="z-index: 1000;"><strong>Use a Browser Set to English (US)</strong><br><br>There is an error due to the browser's language or region. <strong>Consider using a browser set to English (US)</strong>, which does not exhibit the error.<br><br>This is not your or your device's fault. Venue developers are working to resolve this inequitable issue. We sincerely apologize for the inconvenience.</div>`;


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