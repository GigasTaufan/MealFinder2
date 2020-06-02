class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer footer-custom">
                <div class="container text-center">
                    <span class="text-white">Meal Finder, 2020, Gigas Taufan</span>
                </div>
            </footer>
        `;
    }
}

customElements.define("footer-custom", Footer);