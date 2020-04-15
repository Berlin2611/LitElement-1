import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewAbout  extends PageViewElement {


  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
        <div>
            <h2>About</h2>
        </div>
        <p>Esto es about</p>
        
        <img src="https://picsum.photos/300/200" alt="imagen">
        
    `;
  }
}

customElements.define('view-about', ViewAbout);