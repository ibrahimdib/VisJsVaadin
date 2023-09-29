import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid.js'
import './user-form.js';

class MainView extends PolymerElement {
    static get template() {
        return html`
            <style>
            </style>
            <div id="main-container">
                <vaadin-grid id="users-grid"></vaadin-grid>
                <user-form id="user-form"></user-form>
            </div>`;
    }

    static get is() {
          return 'main-view';
    }
}

customElements.define(MainView.is, MainView);