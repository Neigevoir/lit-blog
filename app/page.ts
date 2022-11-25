import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './router';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <nav class="nav">
        <a href="/">Home</a>
        <a href="/sign-in">Sign In</a>
      </nav>
      <app-router></app-router>
    `;
  }

  static styles = css`
    .nav {
      display: flex;
      justify-content: center;
      padding: 1.5em;
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
    'app-root': AppRoot;
  }
}
