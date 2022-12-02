import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import './router';
import '../components/navbar';
import '../components/contact';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <app-navbar></app-navbar>
      <app-router></app-router>
      <app-contact></app-contact>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
