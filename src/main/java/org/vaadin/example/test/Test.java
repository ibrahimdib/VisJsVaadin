package org.vaadin.example.test;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;


@Tag("test-template")
@Route("testTemp")
@JsModule("./src/js/test.js")
public class Test extends PolymerTemplate<TestInterface>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public Test() {
		
		getModel().setName("Hello");
		getModel().setColor("red");
		getModel().setSize("26px");
		
		
		
		System.out.println(getModel().getSize());
		
	}
	
	@ClientCallable
	public void receiveName(String name) {
	    System.out.println("Received name from client: " + name);
	    // Add your logic here to handle the received name
	}

	


}
