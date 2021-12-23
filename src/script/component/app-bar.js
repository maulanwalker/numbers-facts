class AppBar extends HTMLElement {
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
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                width: 100%;
                height: 150px;
                display: block;
                background-color: #3E64FF;
                box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
            }

            h1 {
                color: #ECFCFF;
                font-size: 3em;
                padding-top: 30px;
            }

            p {
                color: #ECFCFF;
            }
            
            @media screen and (max-width: 550px) {
                h1 {
                    font-size: 2em;
                }
                p {
                    font-size: 0.9em;
                }
            }
        </style>
        <h1>Numbers Facts</h1>
        <p>a number-first approach to search</p>`;
    }
}

customElements.define("app-bar", AppBar);