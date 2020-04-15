import { LitElement, html, css } from 'lit-element';
import './views/view-home';
import './views/view-about';
export class PwaLive extends LitElement {

    static get styles(){
        return css `
        :host{
            display: block;
            padding: 15px;
        }
        h1{
            font-weight: 300;
        }
        .page{
            display: none;
        }
        .page[active] {
            display: block;
          }
        `;
    }


    static get properties(){
        return{
            selected: { type: String },
        };
    }

    constructor(){
        super();
        this.selected = 'home';
    }   

    render() {
        return html`
            <h1> My App </h1>

            <nav>
                <a href="#" @click="${this.go}" name="home">Home</a>
                <a href="#" @click="${this.go}" name="about">About</a>
                <a href="#">Contact</a>
            </nav>
            <main>
             
                    <view-home  class="page" ?active="${this.selected === 'home'}"></view-home>
                    <view-about class="page" ?active="${this.selected === 'about'}"></view-about>             
               
            </main>
        `;
    }
    goHome(e){
        e.preventDefault();
        this.selected = 'home';
    }
    goAbout(e){
        e.preventDefault();
        this.selected = 'about';
    }
    go(e){
        e.preventDefault();
        let page = e.target.getAttribute('name');
        this.selected = page;
    }
}
customElements.define('pwa-live', PwaLive);