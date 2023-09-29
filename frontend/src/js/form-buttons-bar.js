import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class FormButtonsBar extends PolymerElement {
    static get template() {
        return html`
            <style>
                /* Define your component's styles here */
                .button-bar {
                    display: flex;
                    justify-content: space-between;
                }
            </style>
            <div class="button-bar">
                <button on-click="_handleSave" id="saveButton">Save</button>
                <button on-click="_handleCancel" id="cancelButton">Cancel</button>
                <button on-click="_handleDelete" id="cancelButton">Delete</button>
            </div>
        `;
    }

    static get is() {
        return 'form-buttons-bar';
    }

    _handleSave() {
        // Handle the Save button click event here
        this.dispatchEvent(new CustomEvent('save'));
    }

    _handleCancel() {
        // Handle the Cancel button click event here
        this.dispatchEvent(new CustomEvent('cancel'));
    }

    _handleDelete() {
        // Handle the Delete button click event here
        this.dispatchEvent(new CustomEvent('delete'));
    }
}

customElements.define(FormButtonsBar.is, FormButtonsBar);
