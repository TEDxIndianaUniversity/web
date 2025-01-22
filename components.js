class WixWebShareButton extends HTMLElement {
    static observedAttributes = ["label", "share-data"];
    constructor() {super();}
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() { 
        this.render(); 
        this.addEventListener('click', async () => {
            try { await navigator.share(
                {title: this.getAttribute("share-title"), text: this.getAttribute("share-text"), url: this.getAttribute("share-url")}
            );}
            catch (err) {console.error(`Web Share API Error: ${err}`);}
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
    constructor() {super();}
    attributeChangedCallback(name, oldValue, newValue) { render() }
    connectedCallback() { 
        
        this.render(); 
    }
    attributeChangedCallback() { this.render(); }
    render() {
        this.id = `od-embed-${this.getAttribute("event-id")}`;
        const embedScript = document.createElement('script');
        embedScript.setAttribute('src','https://app.opendate.io/packs/od_embed.js')
        const frame = document.createElement("iframe");
        Object.assign(frame, {
            id: `od-confirm-${this.getAttribute("event-id")}-iframe`,
            src: `https://app.opendate.io/confirms/${this.getAttribute("event-id")}/web_orders/new`,
            title: 'Opendate',
            scrolling: 'no',
            allowpaymentrequest: 'true',
            style: 'border:none; width: 1px; min-width: 100%;'
          })
        const resizerInit = document.createElement('script');
        resizerInit.innerText = `ODEmbed("od-confirm-${this.getAttribute("event-id")}-iframe");`;
        this.insertAdjacentElement('afterend',embedScript);
        embedScript.insertAdjacentElement('afterend',frame);
        frame.insertAdjacentElement('afterend',resizerInit);
    }
}
customElements.define("tedx-wix-opendate-embed", WixOpenDateEmbed);