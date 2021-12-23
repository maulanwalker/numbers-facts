class LicenseBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 180px;
                padding: 30px;
                box-sizing: border-box;
            }

            :host {
                width: 100%;
                height: 80px;
                display: block;
                background-color: #3E64FF;
            }

            p {
                color: #ECFCFF;
                font-weight: bold;
            }
            
            @media screen and (max-width: 550px) {
                p {
                    font-size: 0.9em;
                }
                * {
                    padding: 15px;
                }
            }
        </style>
        <p>Hak Cipta &#169; Maulan Walker 2021.</p>`;
    }
}

customElements.define("license-bar", LicenseBar);