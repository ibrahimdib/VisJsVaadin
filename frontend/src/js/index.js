
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import './header.js';
import './footer.js';

class IndexView extends PolymerElement {
	static get template() {
		return html`
				
			<header-view></header-view>
			<slot></slot>
			<footer-view></footer-view>
		`;
	}

	static get is() {
		return 'index-view';
	}
}

customElements.define(IndexView.is, IndexView);





