package org.vaadin.example.visControl;

import com.vaadin.flow.component.Html;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Footer;
import com.vaadin.flow.component.html.Hr;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("vis-control")
@JsModule("./src/js/vis-control.js")
@Route("visjs")

public class VisControl extends PolymerTemplate<TemplateModel> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	Html header;

	Footer footer;

	public VisControl() {

		header = getNav();
		footer = getFooter();
		
        // Create elements for the header and footer slots
        Element headerElement = new Element("div");
        headerElement.setAttribute("slot", "header");
        headerElement.appendChild(header.getElement());

        Element footerElement = new Element("div");
        footerElement.setAttribute("slot", "footer");
        footerElement.appendChild(footer.getElement());

        // Add the elements to your component
        getElement().appendChild(headerElement, footerElement);

	}

	public static Html getNav() {
		Html ul = new Html(
				"<ul style='margin: 0; padding: 8px 15px; list-style: none; display: flex; box-shadow: 0 1px 8px rgba(0,0,0,0.3); width: 100%; height: 50px; '>"
						+ "<a href=''  > <li style='background: #0B84ED; color: #fff; width: 400px;height: 40px;display: flex;justify-content: center;align-items: center;font-size: 2rem;margin: 10px 20px 10px 0; '> Welcome to Our Site </li></a>"

						+ "</li>" + "<li style=' padding: 3px; margin: 10px 20px 10px 0;'>"
						+ "<a href='contact-us' style='display: inline-block; text-decoration: none;  height: 40px;\r\n"
						+ "                width: var(--btn-width-100);\r\n" + "                font-size: 1.5rem;\r\n"
						+ "                display: flex;\r\n" + "                justify-content: center;\r\n"
						+ "                align-items: center;\r\n" + "                color: rgb(158, 158, 158);\r\n"
						+ "                transition: .5s;'>Contact Us</a>" + "</li>"
						+ "<li style='  padding: 3px;margin: 10px 20px 10px 0;'>"
						+ "<a href='login' style='display: inline-block; text-decoration: none;   height: 40px;\r\n"
						+ "                width: var(--btn-width-100);\r\n" + "                font-size: 1.5rem;\r\n"
						+ "                display: flex;\r\n" + "                justify-content: center;\r\n"
						+ "                align-items: center;\r\n" + "                color: rgb(158, 158, 158);\r\n"
						+ "                transition: .5s;'>Login</a>" + "</li>"

						+ "</ul>");

		return ul;

	}

	public static Footer getFooter() {

		Footer footer = new Footer();

		// Create a horizontal layout to organize footer content
		HorizontalLayout footerContent = new HorizontalLayout();

		// Add components to the footer content
		Span copyrightSpan = new Span("© 2023 Your Company");
		Span separatorSpan = new Span("|");
		Span privacySpan = new Span("Privacy Policy");
		Span termsSpan = new Span("Terms of Service");

		footerContent.add(copyrightSpan, separatorSpan, privacySpan, separatorSpan, termsSpan);

		// Add the footer content to the footer element
		footer.add(footerContent);

		// Style the footer
		footer.getStyle().set("background-color", "#333").set("color", "#fff").set("padding", "10px 0");
		footerContent.setSpacing(true);
		footerContent.setWidth("20000px");
		separatorSpan.getStyle().set("margin", "0 10px");

		// Create a horizontal line as a separator
		Hr separator = new Hr();
		separator.getStyle().set("border-color", "#555");

		// Add the separator and footer to the main content

		return footer;

	}

}
