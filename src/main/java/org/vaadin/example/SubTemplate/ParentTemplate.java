package org.vaadin.example.SubTemplate;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.router.Route;


@Tag("parent-template")
@JsModule("./src/js/parent-template.js")
@Route("parent")
public class ParentTemplate extends PolymerTemplate<Model> {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id("childTemplate")
    private ChildTemplate child;
	
	public ParentTemplate() {
		
		getModel().setName("hello");
	}
}


