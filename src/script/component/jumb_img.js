class Jumbimg extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <h2 class="text-center">The Best Place To Find A Good Meal</h2>
        <img class = "image-header" src = "src/img/undraw_breakfast_psiw.png" alt = "Food Image"> `;
    }
}

customElements.define("jumb-img", Jumbimg);