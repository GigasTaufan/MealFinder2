class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
            <div class = "meal-info" >
                <h2>${this._meal.strMeal}</h2>
                <h4>${this._meal.strArea}</h4>
                <p>${this._meal.strInstructions}</p>
            </div>`;
    }
}

customElements.define("meal-item", MealItem);