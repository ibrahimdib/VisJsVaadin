package org.vaadin.example.Binder;

import java.util.Optional;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.vaadin.example.Binder.UserForm.FormComponentModel;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.validator.EmailValidator;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("user-form")
@JsModule("./src/js/user-form.js")
@Route("userForm1")
public class UserForm extends PolymerTemplate<FormComponentModel> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Binder<User> binder;

	@Id("email")
	private TextField email;

	@Id("first-name")
	private TextField firstName;

	@Id("last-name")
	private TextField lastName;

	@Id("comments")
	private TextArea comment;

	  @Id("add")
	  private Button button;


	private void initBinder() {
		binder = new Binder<>();

		// email
		binder.forField(email).withValidator(new EmailValidator("This doesn't look like a valid email address"));
			

		// firstName
		binder.forField(firstName)
				.withValidator(firstName -> firstName.length() > 1, "The first name must contain at least 2 characters")
				.asRequired();

		// lastName
		binder.forField(lastName).asRequired("Last name can't be empty");

		// comment
		binder.forField(comment);
	}

	public UserForm() {
		initBinder();
	}

	/**
	 * Connects the bean to the binder.
	 *
	 * @param user bean
	 */
	public void setBean(User user) {
		binder.setBean(user);
	}

	/**
	 * Clears the form and disconnnect any bean.
	 */
	public void removeBean() {
		binder.removeBean();
	}

	/**
	 * Gets the binder of the UserForm
	 *
	 * @return binder it binds the fields of an object to the fields shown
	 */
	public Optional<User> getBean() {
		return Optional.of(binder.getBean());
	}

	// Define User and FormComponentModel classes if they are not already defined

	public interface FormComponentModel extends TemplateModel {
		// Define FormComponentModel class if needed
	}
}
