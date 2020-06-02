class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-custom fixed-top">
                <a class="navbar-brand" href="#">
                    <img src="src/img/undraw_breakfast_psiw.png" alt="">
                    <span class="text-white">Meal Finder</span>
                </a>
            </nav>
        `;
    }
}

customElements.define("navbar-custom", Navbar);