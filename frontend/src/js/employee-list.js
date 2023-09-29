import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class EmployeesList extends PolymerElement {
	static get template() {
		return html`
			<table>
				<tr >
					<th>Name</th>
					<th>Title</th>
					<th>Email</th>
				</tr>
						<div on-click="processElement" >
				<template is="dom-repeat" items="[[employees]]">
		
					<tr on-click="handleClick" id="[[item.name]]">
						<td>{{item.name}}</td>
						<td>{{item.title}}</td>
						<td>{{item.email}}</td>
					</tr>
			
				</template>
					</div>
			</table>
			<div>
				<button on-click="handleClick"> save </button>
			
			</div>`;
	}

	static get properties() {
		return {
			employees: {
				type: Array,
				value: [],
			}
		};
	}

	static get is() { return 'employees-list' }
}

customElements.define(EmployeesList.is, EmployeesList);
