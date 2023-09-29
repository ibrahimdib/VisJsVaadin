package org.vaadin.example.BeansWithPoly;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;


@Tag("my-form")
@JsModule("./src/js/my-form.js")
@Route("form")
public class Form extends PolymerTemplate<FormModel> {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Form() {
		
	
        Person person = new Person("John", "Doe", 82);
        getModel().setPerson(person);
        
        getElement().addEventListener("click" , event ->{
        	System.out.println(person.getFirstName());
        	
        	person.setFirstName("Ibrahim");
        	System.out.println(person.getFirstName());
        });
    }
	
	@EventHandler
	public void handle() {
		Person person = getModel().getPerson();
		person.setFirstName("Yochaa");
		getModel().setPerson(person);
	} 
}

