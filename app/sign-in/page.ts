import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {MouseController} from './email';

@customElement('app-sign-in')
export class SignIn extends LitElement {
  private mouse = new MouseController(this);

  render() {
    return html`
      <h3>The mouse is at:</h3>
      <pre>
        x: ${this.mouse.pos.x as number}
        y: ${this.mouse.pos.y as number}
      </pre
      >
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-sign-in': SignIn;
  }
}
