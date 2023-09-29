package org.vaadin.example.dataBinding;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;

@Tag("two-way-template")
@JsModule("./src/js/two-way-binding.js")
@Route("mainn")
public class PolymerTwoWayBindingTemplate
        extends PolymerTemplate<TwoWayBindingModel> {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PolymerTwoWayBindingTemplate() {
        reset();
        
        
        getElement().addPropertyChangeListener("name", event -> System.out
                .println("Name is set to: " + getModel().getName()));
        getElement().addPropertyChangeListener("accepted",
                event -> System.out.println("isAccepted is set to: "
                        + getModel().getAccepted()));
        getElement().addPropertyChangeListener("size", event -> System.out
                .println("Size is set to: " + getModel().getSize()));
    }

    @EventHandler
    private void reset() {
        getModel().setName("John");
        getModel().setAccepted(false);
        getModel().setSize("medium");
    }
}
