import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-sign-in')
export class Me extends LitElement {
  render() {
    return html`
      <h3>The mouse is at:</h3>
      <pre></pre>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-me': Me;
  }
}
