import {LitElement, html} from 'lit';
import {Router} from '@lit-labs/router';
import {customElement} from 'lit/decorators.js';

const routes = [
  {
    path: '/',
    render: () => {
      import('./home/page');
      return html`<app-home></app-home>`;
    },
  },
  {
    path: '/me',
    render: () => {
      import('./me/page');
      return html`<app-me></app-me>`;
    },
  },
];

@customElement('app-router')
export class AppRouter extends LitElement {
  private router = new Router(this, routes);

  render() {
    return this.router.outlet();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-router': AppRouter;
  }
}
