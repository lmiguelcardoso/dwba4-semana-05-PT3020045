class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      
    </style>
    
    <footer>
      
    </footer>
    `;
  }
}

customElements.define('header-component', Header);