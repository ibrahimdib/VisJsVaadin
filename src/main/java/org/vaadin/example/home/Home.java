package org.vaadin.example.home;




import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

@SuppressWarnings("serial")
@Route("homeView")
@Tag("index-view")
@JsModule("./src/js/index.js")

public class Home extends PolymerTemplate<InterfaceTemplate> {
	
	

	public Home() {
		   
		Div inputs = new Div();
		VerticalLayout v = new VerticalLayout();
		
		
		HorizontalLayout horiz =  new HorizontalLayout();
		Label usernameLabel =  new Label("Username");
		TextField usernameTextField =  new TextField();
		horiz.add(usernameLabel,usernameTextField);
		
		
		HorizontalLayout horizP =  new HorizontalLayout();
		Label paaswordLabel =  new Label("Password");
		TextField passwordTextField =  new TextField();
		
		horizP.add(paaswordLabel, passwordTextField);
		
		Button login = new Button("Login");
		
		
		v.add(horiz, horizP, login);
		inputs.add(v);
		inputs.getStyle().set("border", "1px dashed lightblue")
						 .set("margin", "100px");
						
		
		getElement().appendChild(inputs.getElement());
	     
	}



	
}
