import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';

class SlotContainer extends PolymerElement {
    static get template() {
        return html`
            <div style="border: 1px solid black; padding: 10px; margin: 10px;"">
                <slot on-click="save"></slot>
			<button on-click= "click"> save </button>
            </div>`;
    }

    static get is() {
        return 'slot-container';
    }

click(){
	
	console.log("clicked");
}

save(){
	console.log("save");
	
}
}
customElements.define(SlotContainer.is, SlotContainer);