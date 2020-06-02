import "../component/meal-list.js";
import "../component/search-box.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchBar = document.querySelector("search-box");
    const mealList = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchBar.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealList.meals = results;
    };

    const fallbackResult = message => {
        mealList.renderError(message);
    };

    searchBar.clickEvent = onButtonSearchClicked;
};

export default main;