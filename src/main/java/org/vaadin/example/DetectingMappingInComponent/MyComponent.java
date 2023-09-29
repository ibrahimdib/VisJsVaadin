package org.vaadin.example.DetectingMappingInComponent;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Tag("div")
@Route("detect")
public class MyComponent extends Div {

  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

public MyComponent() {
    if (!isTemplateMapped()) {
    	
      getElement().getStyle().set("color", "red")
      						 .set("width", "200");
    
    }
    
    System.out.println(!isTemplateMapped());
  }
}
