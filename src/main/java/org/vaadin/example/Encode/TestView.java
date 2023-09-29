package org.vaadin.example.Encode;

import java.util.Date;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;


@Route("encoder")
@Tag("encode-decode-date")
@JsModule("./src/js/encode-decode-date.js")
public class TestView extends PolymerTemplate<MyModel>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	
	@EventHandler
	public void commit() {
		
		Date date = getModel().getBirthDate();
		System.out.println(date);
		
		
		getModel().setBirthDate(date);
		
		
	}
	
}
