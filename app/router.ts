import {LitElement, html} from 'lit';
import {Router} from '@lit-labs/router';
import {customElement} from 'lit/decorators.js';

import './home/page';
import './me/page';

const routes = [
  {
    path: '/',
    render: () => html`<app-home></app-home>`,
  },
  {
    path: '/me',
    render: () => html`<app-me></app-me>`,
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
