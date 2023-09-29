package org.vaadin.example.Binder;



import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("form-buttons-bar")
@JsModule("./src/js/form-buttons-bar.js")
@Route("formButtonsBar")
public class FormButtonsBar extends PolymerTemplate<TemplateModel> {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id("saveButton")
    private Button saveButton;

    @Id("cancelButton")
    private Button cancelButton;

    @Id("deleteButton")
    private Button deleteButton;

    public FormButtonsBar() {
        // Set button labels or other properties as needed
        saveButton.setText("Save");
        cancelButton.setText("Cancel");
        deleteButton.setText("Delete");

        // Add event listeners or click handlers for the buttons if needed
        saveButton.addClickListener(e -> handleSaveButtonClick());
        cancelButton.addClickListener(e -> handleCancelButtonClick());
        deleteButton.addClickListener(e -> handleDeleteButtonClick());
    }

    public void handleSaveButtonClick() {
        // Handle the Save button click event here
        // You can dispatch a custom event or perform other actions
    }

    public void handleCancelButtonClick() {
        // Handle the Cancel button click event here
        // You can dispatch a custom event or perform other actions
    }

    public void handleDeleteButtonClick() {
        // Handle the Delete button click event here
        // You can dispatch a custom event or perform other actions
    }
}

