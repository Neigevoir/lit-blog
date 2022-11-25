import {LitElement, html} from 'lit';
import {Router} from '@lit-labs/router';
import {customElement} from 'lit/decorators.js';

import './home/page';
import './sign-in/page';

@customElement('app-router')
export class AppRouter extends LitElement {
  private router = new Router(this, [
    {path: '/', render: () => html`<app-home></app-home>`},
    {path: '/sign-in', render: () => html`<app-sign-in></app-sign-in>`},
  ]);

  render() {
    return this.router.outlet();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-router': AppRouter;
  }
}
