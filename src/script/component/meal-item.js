class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="fan-art-meal" src="${this._meal.fanArt}" alt="Fan Art">
            <div class = "meal-info" >
                <h2>${this._meal.name}</h2>
                <h4>${this._meal.country}</h4>
                <p>${this._meal.instruction}</p>
            </div>`;
    }
}

customElements.define("meal-item", MealItem);