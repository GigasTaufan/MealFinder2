class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-custom fixed-top">
                <a class="navbar-brand" href="#">
                    <img class="navImg" alt="Food Image">
                    <span class="text-white">Meal Finder</span>
                </a>
            </nav>
        `;
    }
}

customElements.define("navbar-custom", Navbar);