import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import {getDate} from '../../utils/date';

import '../../components/banner';

@customElement('app-home')
export class AppHome extends LitElement {
  listData: any[];

  constructor() {
    super();
    this.listData = [
      {
        isMDX: false,
        title: 'Lit Blog',
        subTitle: 'building blog use Lit',
        desc: 'a blog, building by Lit and Lit Labs',
        postTime: 1660555825742,
      },
      {
        isMDX: false,
        title: 'Lit Blog',
        subTitle: 'building blog use Lit',
        desc: 'a blog, building by Lit and Lit Labs',
        postTime: 1660555825742,
      },
      {
        isMDX: false,
        title: 'Lit Blog',
        subTitle: 'building blog use Lit',
        desc: 'a blog, building by Lit and Lit Labs',
        postTime: 1660555825742,
      },
    ];
  }

  render() {
    return html` <hero-banner title="首页"></hero-banner>
      <div class="container">
        <div class="list-container">
          ${this.listData?.map(
            (v: any) => html`
              <div class="item">
                <h2 class="title">${v.title}</h2>
                <h3 class="sub-title">${v.subTitle}</h3>
                <span class="desc">${v.desc}</span>
                <span class="date">
                  ${getDate(Number(v.postTime))} By Bobolo
                </span>
                <hr class="hr" />
              </div>
            `
          )}
        </div>
      </div>`;
  }

  static styles = css`
    .container {
      margin-top: 5rem;
      margin-bottom: 5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: var(--blog-a-color);
    }
    .list-container {
      max-width: 64rem;
      margin: 0px auto;
    }
    .item {
      display: flex;
      cursor: pointer;
      width: 100%;
      flex-direction: column;
    }
    .title {
      line-height: 1.2;
      font-size: 24px;
    }
    .sub-title {
      font-size: 16px;
    }
    .desc {
      font-size: 14px;
    }
    .date {
      font-size: 16px;
      font-style: italic;
      text-align: right;
    }
    .hr {
      opacity: 0.6;
      border: 0;
      border-color: inherit;
      border-style: solid;
      border-bottom-width: 1px;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome;
  }
}
