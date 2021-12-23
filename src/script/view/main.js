import "../component/search-bar.js";
import "../component/number-item.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const numberElement = document.querySelector("number-item");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchNumber(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        numberElement.number = results;
    };

    const fallbackResult = message => {
        numberElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;