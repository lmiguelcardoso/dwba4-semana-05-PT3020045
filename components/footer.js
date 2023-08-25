class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      
    </style>
    
    <footer>
       <a href="/index.html">
    <img height="50px" src="assets/MoveTop.png" style="display: inline-block;">
  <a>
  <span>|</span>
  <a href="https://www.facebook.com">
    <img height="50px" src="assets/facebook.png" style="display: inline-block;">
  </a>
  <p>IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato: (011)
    2504-0100</p>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);