package org.vaadin.example.Style;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Tag("my-view")
@JsModule("./src/js/my-view.js")
@Route("style")
public class View extends Div {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
