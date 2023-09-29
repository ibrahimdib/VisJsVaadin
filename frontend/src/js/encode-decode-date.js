
import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';

class EncodeDecodeDate extends PolymerElement {
static get template() {
    return html`
        <div style="width: 200px;">
            <label>Birth date:</label>
            <label for="day">Enter your birthday:</label><paper-input id="day" value="{{birthDate.day}}"></paper-input>
            <label for="month">Enter the month of your birthday:</label><paper-input id="month" value="{{birthDate.month}}"></paper-input>
            <label for="year">Enter the year of your birthday:</label><paper-input id="year" value="{{birthDate.year}}"></paper-input>
            <button on-click="commit" id="commit">Commit</button>
        </div>`;
}

static get is(){
	
	return "encode-decode-date";
}

commit() {
    const inputElements = ['day', 'month', 'year']; // IDs of the input elements

    const inputValues = {};
    
    // Loop through the input elements
    inputElements.forEach(inputId => {
        const inputElement = this.$[inputId];
        const inputValue = inputElement.value;
        const inputType = inputElement.getAttribute('type');
        
        // Store the value and its type in the inputValues object
        inputValues[inputId] = {
            value: inputValue,
            type: inputType,
        };
    });

    // Now you have an object with values and types for each input
    console.log('Input Values and Types:', inputValues);
}





}

customElements.define(EncodeDecodeDate.is, EncodeDecodeDate);