class NumberItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set number(number) {
        this._number = number;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        :host{display:block;border-radius:7px;box-shadow:0 5px 10px 0 rgba(0,0,0,.3)}.number-fact{padding:20px}.number-fact>p{margin-top:12px}
        </style>
        <div class="number-fact">
        <p> <b> ${this._number.number} </b> is ${this._number.text} </p>
        </div>`;
    }
}

customElements.define("number-item", NumberItem);