class SearchBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchBar").value;
    }

    render() {
        this.innerHTML = `
        <div class="search-box text-center">
            <input type="search" class="form-control" id="searchBar" placeholder="Search your meal here..." >
            <button class="btn btn-primary" id="searchBtn" type="submit"> Search </button> 
        </div> `;

        this.querySelector("#searchBtn").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-box", SearchBox);