const main = function () {
    const searchBar = document.querySelector("#searchBar");
    const searchBtn = document.querySelector("#searchBtn");
    const mealList = document.querySelector("#mealList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchMeal(searchBar.value);
    };

    const renderResult = function (results) {
        mealList.innerHTML = "";
        results.forEach(function (meal) {
            const name = meal.name;
            const fanArt = meal.fanArt;
            const country = meal.country;

            const mealElement = document.createElement("div");
            mealElement.setAttribute("class", "meal");

            mealElement.innerHTML = '<img class="fan-art-meal" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="meal-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<p>' + country + '</p>' +
                '</div>';
            mealList.appendChild(mealElement);
        })
    };

    const fallbackResult = function (message) {
        mealList.innerHTML = "";
        mealList.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    searchBtn.addEventListener("click", onButtonSearchClicked);
};