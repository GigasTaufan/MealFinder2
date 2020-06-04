class Jumbimg extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <h2 class="text-center judul">The Best Place To Find A Good Meal</h2>
        <img class = "image-header" alt = "Food Image"> `;
    }
}

customElements.define("jumb-img", Jumbimg);