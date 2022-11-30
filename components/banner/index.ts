import {property, customElement} from 'lit/decorators.js';
import {html, LitElement, css} from 'lit';

@customElement('hero-banner')
export class HeroBanner extends LitElement {
  @property({ type: String })
  title = '';

  protected render() {
    return html`
    <div class="banner-container">
      <h2 class="title">
        ${this.title}
      </h2>
    </div>
    `;
  }

  static styles = css`
    .banner-container{
      height: 420px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
    }
    .title{
      font-size: 2.25rem;
      line-height: 1.2;
      color: #000;
    }
  `;
}
declare global {
  interface HTMLElementTagNameMap {
    'hero-banner': HeroBanner;
  }
}