import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '@material/web/button/text-button.js';

@customElement('app-navbar')
export class AppNavbar extends LitElement {
  render() {
    return html`
      <header class="navbar">
        <a href="/">Bobolo</a>
        <nav class="nav">
          <a class="nav-item" href="/">Home</a>
          <a class="nav-item" href="/me">Me</a>
        </nav>
      </header>
    `;
  }

  static styles = css`
    .navbar {
      position: sticky;
      top: 0px;
      left: 0px;
      background-color: #1a202c;
      box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px 0px;
      flex-direction: row;
      display: flex;
      padding: 0px 5%;
      height: 60px;
      align-items: center;
      justify-content: space-between;
    }
    .nav-item {
      padding: 16px;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
      padding: 0px 10px;
    }
    a:hover {
      color: #535bf2;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-navbar': AppNavbar;
  }
}
