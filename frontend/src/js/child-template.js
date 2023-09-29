import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';

class ChildTemplate extends PolymerElement {
    static get template() {
        return html`<button on-click="handleClick">Child Template</button>`;
    }

    static get is() { return 'child-template' }
}

customElements.define(ChildTemplate.is, ChildTemplate);