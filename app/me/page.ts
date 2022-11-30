import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../../components/banner';

@customElement('app-me')
export class Me extends LitElement {
  render() {
    return html`
      <hero-banner title="Weird Internet People"></hero-banner>
      <div>
      <span>
        Hey, bobolo (sometimes called Radis), a computer science graduate who
        doesn't like computers very much, usually likes to read about economics,
        energy, law changes, Frontend is currently the main work, basically also
        in Shenzhen (or other cities in Guangdong) activities.
      </span>
      <span>
        I am now working at
        <a
          href="https://crypto.com"
        >
          Crypto.com
        </a>
        responsible for the Frontend part of
        <a
          href="https://crypto.com/pay-merchant"
        >
          Crypto.com Pay Project
        </a>
        and also involved in some projects of Crypto.com User Core,
        <a
          href="https://coding.net"
        >
          Coding
        </a>
        ,some other projects under Code Repositories, Micro FrontEnds, and Code
        Scan.
      </span>
      <span >
        Although I like to read what interests me, I don't like to write much,
        be it computer or otherwise, mainly because it's too painful to code and
        I get hung up on the wording and logic.
      </span>
      <span >
        In addition to making some writing, sometimes also make some convenient in work or life
        <a href="/features">
          feature
        </a>
        .
      </span>
      <h5>
        Feel free to share
      </h5>
      <ul>
        <li>Kenichi Ohmae《New business katsugan juku》</li>
        <li>
          Jesse Livermore《Reminiscences of a Stock Operator》
        </li>
        <li>George Soros 《The Alchemy of Finance》</li>
        <li>Ray Dalio 《Principles》</li>
      </ul>
  </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-me': Me;
  }
}
