

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
    connectedCallback() { this.render(); }
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
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
        document.querySelector(`meta[name="${this.getAttribute("name")}"]`).setAttribute("content", this.getAttribute("content"));
    }
}
customElements.define("tedx-set-meta", MetaSetter);

class NextTEDxEvent extends HTMLElement {
    static observedAttributes = ["name", "content"];
    constructor() { super(); }
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
        this.innerHTML = `
        <style>
            .tedx-ne {
                display: block;
                position: absolute;
                width: 100vw;
                left: 0;
                bottom: 0;
                height: 75px;
                background: black;
                color: white;
                border-radius: .5rem .5rem 0 0;
                z-index: 1000000;
                margin: 0;
                max-width: 100vw;
                font-family: 'Inter', 'Helvetica', sans-serif;
            }
            @media only screen and (min-width: 755px) {
                .tedx-ne {
                    margin: 10px calc(calc(100vw - 700px)/2);
                    border-radius: .5rem .5rem .5rem .5rem;
                }
            }
            .tedx-ne-body {
                display: flex;
                padding: 7.5px;
                flex-direction: row;
                justify-self: center;
                justify-content: center;
                align-content: center;
                gap: 15px;
                height: 60px;
            }
            .tedx-ne .powered-by {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                gap: 5px;
                font-size: .7em;
                height: 60px;
                font-weight: bold;
            }
            .powered-by p {
                margin: 0;
            }
            .tedx-ne #tedx-logo {
                display: block;
                height: calc(.7em + 12px);
            }
            .tedx-ne .event-promo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                gap: 5px;
            }

            .event-promo p {
                font-size: .7em;
                font-weight: bold;
                margin: 0;
            }

            .tedx-ne .tedx-button {
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 0.4rem;
                border: 2px solid rgba(97, 97, 97, 0.5);
                background: rgba(74, 74, 74, 0.5);
                width: max-content;
                height: max-content;
                padding: 5px 8px;
                text-decoration: none;
                color: white;
                font-size: .7em;

                background: rgba(178, 57, 57, 0.75);
                border: 2px solid rgba(77, 24, 24, 0.5);

                &::after {
                    display: inline-flex;
                    color: white;
                    font-weight: 700;
                    height: 100%;
                    content: " \\2192" / " ";
                }

                &:hover {
                    background: rgba(178, 57, 57, 0.85);
                }

                &:active {
                    background: rgba(178, 57, 57, 1);
                }
            }
        </style>
        <div class="tedx-ne">
            <a href="https://www.tedxiu.com/" style="text-decoration: none;color: white;">
            <div class="tedx-ne-body">
                <div class="powered-by">
                    <p>Developed by</p>
                    <svg xmlns="http://www.w3.org/2000/svg" id="tedx-logo" viewBox="0 0 2100 200" aria-label="TEDxIndianaUniversity">
                        <defs>
                            <style>
                            .cls-1,.cls-2{fill:#fff;stroke-width:0}.cls-2{fill:#ff0024}
                            </style>
                        </defs>
                        <g id="Capa_1-2" data-name="Capa 1">
                            <path class="cls-1" d="M551.24.57v146.12h-13.32V.57h13.32ZM593.43 78.2v68.5h-12.68V37.1h12.33v17.19h1.14c2.57-5.61 6.57-10.12 12.01-13.52s12.17-5.1 20.2-5.1c7.36 0 13.83 1.53 19.42 4.6 5.58 3.07 9.93 7.58 13.04 13.52 3.11 5.95 4.67 13.25 4.67 21.9v70.99h-12.68V76.47c0-8.99-2.51-16.1-7.52-21.33-5.01-5.23-11.72-7.85-20.13-7.85-5.75 0-10.85 1.24-15.32 3.71-4.47 2.47-7.99 6.03-10.58 10.67s-3.88 10.14-3.88 16.52ZM729.75 148.98c-8.98 0-16.84-2.38-23.58-7.13-6.75-4.76-12.01-11.39-15.78-19.91-3.78-8.52-5.67-18.43-5.67-29.75s1.89-21.15 5.67-29.64 9.06-15.1 15.85-19.84c6.79-4.73 14.7-7.1 23.73-7.1 6.65 0 12.18 1.18 16.6 3.53 4.42 2.35 7.96 5.27 10.62 8.74s4.73 6.85 6.2 10.13h1.14V.57h12.75v146.12h-12.4v-20.33h-1.5c-1.47 3.33-3.56 6.74-6.27 10.24-2.71 3.5-6.28 6.43-10.72 8.81-4.44 2.38-9.99 3.57-16.64 3.57Zm1.5-11.63c7.08 0 13.11-1.94 18.1-5.81 4.99-3.88 8.8-9.23 11.44-16.05s3.95-14.66 3.95-23.51-1.31-16.49-3.92-23.22-6.41-12.01-11.4-15.84-11.04-5.74-18.17-5.74-13.48 1.99-18.49 5.96c-5.01 3.97-8.81 9.34-11.4 16.09-2.59 6.76-3.88 14.34-3.88 22.76s1.31 16.2 3.92 23.04 6.42 12.29 11.44 16.3c5.01 4.02 11.15 6.03 18.42 6.03ZM811.9 18.26c-2.61 0-4.85-.89-6.7-2.67-1.85-1.79-2.78-3.94-2.78-6.46s.93-4.67 2.78-6.46c1.85-1.79 4.08-2.68 6.7-2.68s4.84.89 6.7 2.68c1.85 1.78 2.78 3.94 2.78 6.46s-.93 4.67-2.78 6.46c-1.85 1.78-4.09 2.67-6.7 2.67Zm-6.48 128.43V37.1h12.75v109.59h-12.75ZM875.07 149.19c-6.6 0-12.64-1.3-18.1-3.89-5.46-2.59-9.81-6.35-13.04-11.27-3.23-4.92-4.85-10.9-4.85-17.95 0-5.42 1.02-9.99 3.06-13.7 2.04-3.71 4.94-6.75 8.69-9.13 3.75-2.38 8.19-4.26 13.32-5.64 5.13-1.38 10.78-2.45 16.96-3.21 6.13-.76 11.32-1.43 15.57-2 4.25-.57 7.49-1.47 9.73-2.71 2.23-1.24 3.35-3.23 3.35-5.99v-2.57c0-7.47-2.22-13.35-6.66-17.66-4.44-4.3-10.82-6.46-19.13-6.46s-14.31 1.74-19.27 5.21c-4.96 3.47-8.44 7.56-10.44 12.27l-12.04-4.35c2.47-5.99 5.89-10.79 10.26-14.38 4.37-3.59 9.26-6.18 14.68-7.78 5.42-1.59 10.9-2.39 16.46-2.39 4.18 0 8.54.55 13.07 1.64s8.75 2.98 12.65 5.67c3.89 2.69 7.05 6.42 9.48 11.2 2.42 4.78 3.63 10.83 3.63 18.16v74.42h-12.68v-17.34h-.78c-1.52 3.23-3.78 6.38-6.77 9.42-2.99 3.04-6.75 5.54-11.26 7.49-4.51 1.95-9.81 2.92-15.89 2.92Zm1.71-11.63c6.75 0 12.59-1.5 17.53-4.5 4.94-3 8.75-6.98 11.44-11.95 2.68-4.97 4.03-10.45 4.03-16.45V88.82c-.95.9-2.53 1.71-4.74 2.43-2.21.71-4.75 1.35-7.62 1.89-2.87.55-5.74 1.01-8.59 1.39-2.85.38-5.42.71-7.7 1-6.18.76-11.45 1.95-15.82 3.57s-7.72 3.84-10.05 6.67c-2.33 2.83-3.49 6.46-3.49 10.88 0 6.66 2.38 11.81 7.13 15.45 4.75 3.64 10.71 5.46 17.88 5.46ZM961.87 78.2v68.5h-12.68V37.1h12.33v17.19h1.14c2.57-5.61 6.57-10.12 12.01-13.52s12.17-5.1 20.2-5.1c7.36 0 13.83 1.53 19.42 4.6 5.58 3.07 9.93 7.58 13.04 13.52 3.11 5.95 4.67 13.25 4.67 21.9v70.99h-12.68V76.47c0-8.99-2.51-16.1-7.52-21.33-5.01-5.23-11.72-7.85-20.13-7.85-5.75 0-10.85 1.24-15.32 3.71-4.47 2.47-7.99 6.03-10.58 10.67s-3.88 10.14-3.88 16.52ZM1088.46 149.19c-6.6 0-12.64-1.3-18.1-3.89-5.46-2.59-9.81-6.35-13.04-11.27-3.23-4.92-4.85-10.9-4.85-17.95 0-5.42 1.02-9.99 3.06-13.7 2.04-3.71 4.94-6.75 8.69-9.13 3.75-2.38 8.19-4.26 13.32-5.64 5.13-1.38 10.78-2.45 16.96-3.21 6.13-.76 11.32-1.43 15.57-2 4.25-.57 7.49-1.47 9.73-2.71 2.23-1.24 3.35-3.23 3.35-5.99v-2.57c0-7.47-2.22-13.35-6.66-17.66-4.44-4.3-10.82-6.46-19.13-6.46s-14.31 1.74-19.27 5.21c-4.96 3.47-8.44 7.56-10.44 12.27l-12.04-4.35c2.47-5.99 5.89-10.79 10.26-14.38 4.37-3.59 9.26-6.18 14.68-7.78 5.42-1.59 10.9-2.39 16.46-2.39 4.18 0 8.54.55 13.07 1.64s8.75 2.98 12.65 5.67c3.89 2.69 7.05 6.42 9.48 11.2 2.42 4.78 3.63 10.83 3.63 18.16v74.42h-12.68v-17.34h-.78c-1.52 3.23-3.78 6.38-6.77 9.42-2.99 3.04-6.75 5.54-11.26 7.49-4.51 1.95-9.81 2.92-15.89 2.92Zm1.71-11.63c6.75 0 12.59-1.5 17.53-4.5 4.94-3 8.75-6.98 11.44-11.95 2.68-4.97 4.03-10.45 4.03-16.45V88.82c-.95.9-2.53 1.71-4.74 2.43-2.21.71-4.75 1.35-7.62 1.89-2.87.55-5.74 1.01-8.59 1.39-2.85.38-5.42.71-7.7 1-6.18.76-11.45 1.95-15.82 3.57s-7.72 3.84-10.05 6.67c-2.33 2.83-3.49 6.46-3.49 10.88 0 6.66 2.38 11.81 7.13 15.45 4.75 3.64 10.71 5.46 17.88 5.46ZM1261.19.57h13.32v96.75c0 9.94-2.33 18.82-6.98 26.65-4.66 7.82-11.13 13.98-19.42 18.48-8.29 4.5-17.92 6.74-28.89 6.74s-20.54-2.26-28.86-6.78c-8.31-4.52-14.8-10.68-19.45-18.48-4.66-7.8-6.98-16.67-6.98-26.61V.57h13.32v95.82c0 7.75 1.73 14.66 5.2 20.73 3.47 6.06 8.35 10.83 14.64 14.3 6.29 3.47 13.67 5.21 22.12 5.21s15.84-1.74 22.16-5.21c6.32-3.47 11.2-8.24 14.64-14.3 3.44-6.06 5.17-12.97 5.17-20.73V.57ZM1316.24 78.2v68.5h-12.68V37.1h12.33v17.19h1.14c2.57-5.61 6.57-10.12 12.01-13.52s12.17-5.1 20.2-5.1c7.36 0 13.83 1.53 19.42 4.6 5.58 3.07 9.93 7.58 13.04 13.52 3.11 5.95 4.67 13.25 4.67 21.9v70.99h-12.68V76.47c0-8.99-2.51-16.1-7.52-21.33-5.01-5.23-11.72-7.85-20.13-7.85-5.75 0-10.85 1.24-15.32 3.71-4.47 2.47-7.99 6.03-10.58 10.67s-3.88 10.14-3.88 16.52ZM1419.27 18.26c-2.61 0-4.85-.89-6.7-2.67-1.85-1.79-2.78-3.94-2.78-6.46s.93-4.67 2.78-6.46c1.85-1.79 4.08-2.68 6.7-2.68s4.84.89 6.7 2.68c1.85 1.78 2.78 3.94 2.78 6.46s-.93 4.67-2.78 6.46c-1.85 1.78-4.09 2.67-6.7 2.67Zm-6.48 128.43V37.1h12.75v109.59h-12.75ZM1536.18 37.1l-39.97 109.59h-13.54L1442.7 37.1h13.75l32.49 92.82h1l32.49-92.82h13.75ZM1593.07 148.98c-10.21 0-19.05-2.39-26.51-7.17-7.46-4.78-13.22-11.42-17.28-19.91-4.06-8.49-6.09-18.28-6.09-29.36s2.03-20.85 6.09-29.43c4.06-8.59 9.69-15.32 16.89-20.19 7.2-4.88 15.52-7.31 24.97-7.31 5.94 0 11.66 1.08 17.17 3.25 5.51 2.16 10.46 5.47 14.86 9.92 4.39 4.45 7.87 10.04 10.44 16.77 2.57 6.73 3.85 14.69 3.85 23.87v6.28h-85.5V84.5h72.54c0-7.04-1.41-13.38-4.24-19.01-2.83-5.64-6.75-10.1-11.76-13.38-5.01-3.28-10.79-4.92-17.35-4.92-6.94 0-13.04 1.86-18.31 5.57s-9.39 8.61-12.36 14.7c-2.97 6.09-4.48 12.75-4.52 19.98v6.71c0 8.7 1.51 16.3 4.52 22.79 3.02 6.49 7.3 11.52 12.86 15.09 5.56 3.57 12.14 5.35 19.74 5.35 5.18 0 9.73-.81 13.64-2.43 3.92-1.62 7.22-3.79 9.9-6.53 2.68-2.74 4.71-5.74 6.09-9.03l12.04 3.93c-1.66 4.61-4.38 8.87-8.16 12.77s-8.48 7.03-14.11 9.38c-5.63 2.36-12.1 3.53-19.42 3.53ZM1658.64 146.69V37.1h12.33v16.84h.93c2.18-5.52 6-9.98 11.44-13.38 5.44-3.4 11.6-5.1 18.49-5.1 1.04 0 2.21.03 3.49.07s2.35.1 3.21.14v12.91c-.57-.09-1.57-.24-2.99-.43-1.43-.19-2.97-.29-4.63-.29-5.7 0-10.77 1.2-15.21 3.6-4.44 2.4-7.95 5.72-10.51 9.95-2.57 4.23-3.85 9.06-3.85 14.48v70.78h-12.68ZM1796.7 61.14l-11.61 3.28c-1.14-3.28-2.76-6.25-4.85-8.92-2.09-2.66-4.81-4.78-8.16-6.35-3.35-1.57-7.49-2.35-12.43-2.35-7.41 0-13.49 1.76-18.24 5.28-4.75 3.52-7.13 8.06-7.13 13.63 0 4.71 1.63 8.53 4.88 11.45s8.28 5.24 15.07 6.96l16.53 4.07c9.17 2.24 16.04 5.78 20.63 10.63 4.58 4.85 6.88 10.94 6.88 18.27 0 6.18-1.71 11.68-5.13 16.48-3.42 4.8-8.18 8.57-14.29 11.31-6.1 2.73-13.17 4.1-21.2 4.1-10.69 0-19.5-2.41-26.43-7.24-6.94-4.83-11.38-11.81-13.32-20.94l12.18-3c1.57 6.52 4.64 11.44 9.23 14.77s10.63 4.99 18.13 4.99c8.41 0 15.13-1.89 20.17-5.67 5.03-3.78 7.55-8.53 7.55-14.23 0-4.42-1.47-8.14-4.42-11.17s-7.41-5.24-13.4-6.67l-17.88-4.28c-9.5-2.28-16.53-5.9-21.09-10.84-4.56-4.95-6.84-11.08-6.84-18.41 0-6.04 1.64-11.36 4.92-15.95 3.28-4.59 7.79-8.19 13.54-10.81 5.75-2.62 12.3-3.93 19.67-3.93 10.02 0 18.04 2.27 24.05 6.81 6.01 4.54 10.34 10.79 13 18.73ZM1825.38 18.26c-2.61 0-4.85-.89-6.7-2.67-1.85-1.79-2.78-3.94-2.78-6.46s.93-4.67 2.78-6.46c1.85-1.79 4.08-2.68 6.7-2.68s4.84.89 6.7 2.68c1.85 1.78 2.78 3.94 2.78 6.46s-.93 4.67-2.78 6.46c-1.85 1.78-4.09 2.67-6.7 2.67Zm-6.48 128.43V37.1h12.75v109.59h-12.75ZM1900.9 37.1v11.06h-52.23V37.1h52.23Zm-35.91-26.26h12.75v107.24c0 4.57.78 8.15 2.35 10.74s3.61 4.42 6.13 5.49 5.2 1.61 8.05 1.61c1.66 0 3.09-.11 4.28-.32 1.19-.21 2.23-.44 3.13-.68l2.71 11.49c-1.24.47-2.76.91-4.56 1.32-1.81.4-4.04.61-6.7.61-4.66 0-9.13-1.02-13.43-3.07-4.3-2.04-7.83-5.09-10.58-9.13-2.75-4.04-4.13-9.06-4.13-15.05V10.84ZM1933.53 187.79c-2.52 0-4.87-.24-7.05-.71-2.19-.48-3.92-1-5.2-1.57l3.42-11.2c4.32 1.33 8.17 1.82 11.54 1.46 3.37-.36 6.37-1.88 8.98-4.57 2.61-2.69 4.94-6.79 6.98-12.31l3.99-11.13-40.26-110.66h13.75l32.49 92.82h1l32.49-92.82h13.75l-46.31 126.93c-1.95 5.28-4.35 9.69-7.2 13.23-2.85 3.54-6.14 6.18-9.87 7.92-3.73 1.74-7.9 2.6-12.5 2.6Z"/>
                            <path class="cls-2" d="M40.85 38H0V.59h126.57V38H85.73v108.55H40.85V38ZM133.54.59h122.87V38h-77.96v18.19h77.96v34.76h-77.96v18.19h77.98v37.41H133.54V.59ZM263.97.59h73.7c48.58 0 65.75 35.98 65.75 72.77 0 44.78-23.68 73.2-74.52 73.2h-64.93V.59Zm44.91 108.55h17.56c27.98 0 32.07-22.7 32.07-36.41 0-9.18-2.87-34.73-35.34-34.73h-14.29v71.14ZM467.95 90.66l-13.7-22.75-13.36 22.75h-32.91l31.24-46-30.08-44h32.92l12.19 21.75L466.79.66h32.91l-30.07 44 31.24 46h-32.91Z"/>
                        </g>
                    </svg>
                </div>
                <div class="event-promo">
                    <a href="https://www.tedxiu.com" class="tedx-button">See Events</a>
                </div>
            </div>
            </a>
        </div>
        `;
    }
}
customElements.define("tedx-next-event", NextTEDxEvent);

class RoomCalendar extends HTMLElement {
    static observedAttributes = ["room-data", "room-code"];
    constructor() { super(); }
    attributeChangedCallback(name, oldValue, newValue) { }
    connectedCallback() {
        const calStyle = document.createElement('link');
        calStyle.rel = 'stylesheet';
        calStyle.href = 'https://tedxindianauniversity.github.io/web/calendar/cal-style.css'
        // calStyle.href = './calendar/cal-style.css';
        this.insertAdjacentElement('beforeBegin', calStyle);

        const calScript = document.createElement('script');
        calScript.src = 'https://tedxindianauniversity.github.io/web/calendar/cal-logic.js';
        calScript.addEventListener('load', () => { this.render(); });
        this.insertAdjacentElement('beforeBegin', calScript);
    }
    getRoom() {
        return this.getAttribute('room-code')
    }
    render() {
        let calendarData = [];
        const databaseBuildingIds = { "BH": "1", "CH": "2", "ED": "3", "EP": "4", "FA": "5", "GY": "6", "PH": "7", "JH": "8", "LI": "9", "LH": "10", "MO": "11", "SM": "12", "MY": "13", "OP": "14", "PY": "15", "TV": "16", "RH": "17", "RB": "18", "PV": "19", "FF": "20", "SB": "21", "SY": "22", "TH": "23", "WH": "24", "WY": "25", "KH": "26", "HH": "27", "SE": "28", "SW": "29", "GL": "36", "HU": "39", "AD": "42", "AC": "43", "GR": "46", "MN": "47", "GA": "48", "CG": "126", "MC": "127", "TE": "137", "WT": "138", "SG": "173", "BQ": "174", "IF": "175", "FQ": "176", "FR": "177", "GG": "178", "RA": "179", "RE": "180", "WI": "181", "C2": "184", "EO": "189", "MU": "190", "UB": "192", "I": "193", "MA": "195", "NA": "204", "LS": "205", "AN": "206", "AS": "207", "AZ": "208", "ZB": "209", "BC": "210", "CP": "211", "FX": "212", "GF": "213", "FV": "214", "CS": "215", "S7": "218", "EG": "219", "PC": "220", "NT": "221", "M2": "223", "LW": "224", "JS": "225", "KD": "226", "GS": "228", "CN": "229", "CX": "230", "PB": "458", "MG": "459", "PJ": "460", "CL": "470", "VW": "471", "MS": "473", "MZ": "479", "HC": "481", "TC": "483", "AB": "484", "CU": "485", "HS": "486", "CR": "489", "AM": "490", "AH": "493", "HI": "494", "LU": "495", "VD": "496", "HL": "500", "LL": "501", "OA": "504", "NV": "505" };
        const ctsBuildingId = databaseBuildingIds[this.getAttribute('room-code').substring(2, 4).replace(' ', '')];
        const roomNumber = this.getAttribute('room-code').split(' ')[1];
        const currentDateTime = new Date();
        const classroomDatabaseURL = `https://cts.iu.edu/rooms/search?campus_id=1&building_id=${ctsBuildingId}&room_number=${roomNumber}&room_number_exact_search=%7Cexact%7C`;
        JSON.parse(this.getAttribute('room-data')).forEach(event => {
            calendarData.push({
                "id": event['id'],
                "allDay": event['all_day'] == 0 ? false : true,
                "start": event['start'],
                "end": event['end'],
                "editable": false,
                "startEditable": false,
                "durationEditable": false,
                "title": "Event"
            })
        });

        this.innerHTML = `<div id="ec"></div>`;

        const initScript = document.createElement('script');
        initScript.innerHTML = `var ec = new EventCalendar(document.getElementById('ec'), 
        {view: 'timeGridDay', 
        customButtons: {
            roomInfo: {
                text: 'Room Info',
                click: function() {
                    window.open('${classroomDatabaseURL}', '_blank').focus();
                }
            }
        },
        headerToolbar: {start: 'prev next',center: 'title' , end: 'today roomInfo'},
        editable: 'false',
        eventStartEditable: 'false',
        eventDurationEditable: 'false',
        selectable: 'false',
        resources: [{id: 1, title: '${this.getAttribute('room-code')}'}],
        scrollTime: '${currentDateTime.getHours()}:00:00',
        select: false,
        events: ${JSON.stringify(calendarData)},
        titleFormat: { month: 'short', day: 'numeric' },
        dayHeaderFormat: { weekday: 'short', month: 'short', day: 'numeric', omitCommas: true },
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
        },dayMaxEvents: true,nowIndicator: true,selectable: true});
        document.getElementsByClassName('ec-title')[0].innerText = document.getElementsByTagName('tedx-room-calendar')[0].getAttribute('room-code');

        try {if (!touchstartX) {}
        } catch {
         let touchstartX = 0
        }
        
        try {if (!touchendX) {}
        } catch {
         let touchendX = 0
        }

    function checkDirection() {
        if (touchendX - touchstartX > 60 || touchstartX - touchendX > 60) {
            if (touchendX < touchstartX) ec.next()
            if (touchendX > touchstartX) ec.prev()
        }
    }

    this.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })

    this.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    })

    var viewportWidth;
    var setViewportWidth = function () {
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    }
    function checkIfChangeView() {
        if (viewportWidth > 755) {
            ec.setOption('view', 'timeGridWeek');
            ec.setOption('headerToolbar', {start: 'prev next',center: 'title' , end: 'today roomInfo'});
        } else {
            ec.setOption('view', 'timeGridDay');
        ec.setOption('headerToolbar', {start: 'title',center: '' , end: 'today roomInfo'});
        }
    }
    setViewportWidth();
    checkIfChangeView();
    window.addEventListener('resize', function () {
        setViewportWidth();
        checkIfChangeView();
        document.getElementsByClassName('ec-title')[0].innerText = document.getElementsByTagName('tedx-room-calendar')[0].getAttribute('room-code');
    }, false);
    
        try {
            // Wix Custom Element specific rendering issue.
            document.querySelector("[data-testid='custom-element']:has( > tedx-room-calendar)").style.display = 'block';
        } catch {}
        `;
        this.insertAdjacentElement('afterend', initScript);
        const nextEventAd = document.createElement('tedx-next-event');
        this.insertAdjacentElement('afterend',nextEventAd);
        document.getElementsByClassName('ec-title')[0].addEventListener('load', () => {
            document.getElementsByClassName('ec-title')[0].innerText = document.getElementsByTagName('tedx-room-calendar')[0].getAttribute('room-code');
        })
        
    }
}

class LiteYTEmbed extends HTMLElement {
}
customElements.define('lite-youtube', LiteYTEmbed);



customElements.define("tedx-room-calendar", RoomCalendar);