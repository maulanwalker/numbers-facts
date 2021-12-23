class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                top: 30px;
                display: flex;
                padding: 18px;
                position: sticky;
                box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
                border-radius: 7px;
                background-color: #5EDFFF;
            }

            .search-container > input {
                width: 75%;
                border: 0;
                padding: 16px;
                font-weight: bold;
                border-bottom: 1px #5EDFFF;
            }

            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px #5EDFFF;
            }
            
            .search-container > input::placeholder {
                color: cornflowerblue;
                font-weight: normal;
            }

            .search-container > input:focus::placeholder {
                font-weight: bold;
            }

            .search-container > button {
                width: 25%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: cornflowerblue;
                color: white;
                border: 0;
                text-transform: uppercase;
            }

            @media screen and (max-width: 550px) {
                .search-container {
                    position: static;
                    flex-direction: column;
                }

                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }

                .search-container > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search Number Fact" id="searchElement" type="search">
            <button id="searchButtonElement">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);