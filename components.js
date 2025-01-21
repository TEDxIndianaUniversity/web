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
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
        const c = `<script src="https://app.opendate.io/packs/od_embed.js"></script><iframe allowpaymentrequest="true" id="od-confirm-${this.getAttribute("event-id")}-iframe" scrolling="no" src="https://app.opendate.io/confirms/${this.getAttribute("event-id")}/web_orders/new" style="border: none; width: 1px; min-width: 100%; overflow: hidden; height: 150px;" title="Opendate"></iframe><script>ODEmbed("od-confirm-${this.getAttribute("event-id")}-iframe", {bgColor: "#fdfdfd"});</script>`
        this.innerHTML = c;
    }
}
customElements.define("tedx-wix-opendate-embed", WixOpenDateEmbed);