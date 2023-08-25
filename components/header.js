class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .nav__list {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        list-style-type: none;
      }
    </style>
    
    <header>
      <nav class='nav'>
        <ul class='nav__list'>
          <li class='nav__item'><a href="/index.html">Home</a></li>
          <li class='nav__item'><a href="./eventos.html">Eventos</a></li>
          <li class='nav__item'><a href="/contato.html">Contato</a></li>
          <li class='nav__item'><a href="/sobre.html">Sobre</a></li>
          <li class='nav__item'><a href="/entrar.html">Entrar</a></li>
        </ul>
      </nav>
      <img src="assets/Logo.jpg" alt="Logo IFSP">
    </header>
    `;
  }
}

customElements.define('header-component', Header);