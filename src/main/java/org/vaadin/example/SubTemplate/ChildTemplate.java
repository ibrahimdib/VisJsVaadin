package org.vaadin.example.SubTemplate;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("child-template")
@JsModule("./src/js/child-template.js")
@Route("child")
public  class ChildTemplate extends PolymerTemplate<TemplateModel> {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@EventHandler
    private void handleClick() {
        System.out.println("Click on Button in the child template");
    }
	
	public  ChildTemplate() {
		
	
		
	}
}