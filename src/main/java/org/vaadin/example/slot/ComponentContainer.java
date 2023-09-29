package org.vaadin.example.slot;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.dom.ElementFactory;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("slot-container")
@JsModule("./src/js/slot-container.js")
@Route("slot")
public class ComponentContainer extends PolymerTemplate<TemplateModel> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	  Element label;
	  Element button;
	public ComponentContainer() {
		
         label = ElementFactory.createLabel("Main layout header");
         button = ElementFactory.createButton("Click me");
        
  

        getElement().appendChild(label, button);
		
	}
	
	@EventHandler
	public void click() {
		
		  System.out.println("clicked");
	}
	
	@EventHandler
	public void save() {
		
		  System.out.println("save");
	}
	
	
	
}
