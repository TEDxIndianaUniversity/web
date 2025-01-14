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
        const c = `<div data-testid="linkElement" class="VU4Mnk wixui-button wixui-tedx-button tedx-button wixui-sharebutton-vw sharebutton-vw wixui-no-arrow no-arrow wixui-webshare-button webshare-button PlZyDq" aria-disabled="false"><span class="w4Vxx6 wixui-button__label">${this.getAttribute("label")}</span></div>`
        this.innerHTML = c;
    }
}
customElements.define("tedx-wix-share-button", WixWebShareButton);
