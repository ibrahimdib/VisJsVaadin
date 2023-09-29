import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Test extends PolymerElement {
	static get template() {
		return html` 
		

<div id="div" style$="color : {{color}}; font-size : [[size]]" > {{name}} </div>
<button on-click="handleClick"> test </button>

`;


	}

	static get is() { return 'test-template' }

	handleClick() {
		this.$server.receiveName(this.name);
		this.$server.receiveName(this.color);
		this.$server.receiveName(this.size);
	}
}

customElements.define(Test.is, Test);