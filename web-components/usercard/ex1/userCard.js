class UserCard extends HTMLElement {
    constructor() {
        super();

        //this.attachShadow({mode:'open'});
        this.innerHTML = `
        <style> 
        h3 {
            color: red;
        }
        </style>
        <h3>
            ${this.getAttribute("name")}
        </h3>`;
        console.log("working ......");
    }
}

window.customElements.define('user-card', UserCard);