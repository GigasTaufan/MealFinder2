import "../component/search-box.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchBar = document.querySelector("search-box");
    const mealList = document.querySelector("#mealList");

    // const onButtonSearchClicked = () => {
    //     // const dataSource = new DataSource(renderResult, fallbackResult);
    //     // dataSource.searchMeal(searchBar.value);
    //     DataSource.searchMeal(searchBar.value)
    //         .then(renderResult)
    //         .catch(fallbackResult)
    // };

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchBar.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealList.innerHTML = "";
        results.forEach(function (meal) {
            const {
                name,
                fanArt,
                country,
                instruction
            } = meal;

            const mealElement = document.createElement("div");
            mealElement.setAttribute("class", "meal");

            mealElement.innerHTML = '<img class="fan-art-meal" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="meal-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<h4>' + country + '</h4>' +
                '<p>' + instruction + '</p>' +
                '</div>';
            mealList.appendChild(mealElement);
        })
    };

    const fallbackResult = message => {
        mealList.innerHTML = "";
        mealList.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    // searchBtn.addEventListener("click", onButtonSearchClicked);
    searchBar.clickEvent = onButtonSearchClicked;
};

export default main;