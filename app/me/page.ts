import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../../components/banner';

@customElement('app-me')
export class Me extends LitElement {
  render() {
    return html` <hero-banner title="个人介绍"></hero-banner> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-me': Me;
  }
}
