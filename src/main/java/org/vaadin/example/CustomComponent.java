package org.vaadin.example;





import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HasText;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.router.Route;

@Tag("div")
@Route("l")

public class CustomComponent extends Component
        implements HasText {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
  // implementation omitted
//	  private void addDependencies() {
//		    UI.getCurrent().getPage()
//		            .addJavaScript("./src/js/module.js");

//		  }
	  
	  public CustomComponent () {
		  
//		  addDependencies();
		  

		  
	  }
	
}