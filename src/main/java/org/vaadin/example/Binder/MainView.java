//package org.vaadin.example.Binder;
//
//import com.vaadin.flow.component.Tag;
//import com.vaadin.flow.component.dependency.JsModule;
//import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
//import com.vaadin.flow.component.template.Id;
//import com.vaadin.flow.router.Route;
//import com.vaadin.flow.templatemodel.TemplateModel;
//
//@Tag("main-view")
//@JsModule("./src/main-view.js")
//@Route("")
//public class MainView extends PolymerTemplate<TemplateModel> {
//
//    /**
//	 * 
//	 */
//	private static final long serialVersionUID = 1L;
//
//	@Id("user-form")
//    private UserForm userForm;
//
//    @Id("users-grid")
//    private UsersGrid usersGrid;
//	
//	
//	/**
//	 * Initializes the Main view and the listeners of its components.
//	 */
//	public MainView() {
//
//	    // selection listener on the rows of the grid.
//	    usersGrid.addSelectionListener(selectionEvent -> {
//	        Optional<User> optionalUser = usersGrid.getSelectedItems().stream().findAny();
//
//	        if (optionalUser.isPresent()) {
//	            userForm.setBean(optionalUser.get());
//	            setEditionEnabled(true);
//	        } else {
//	            userForm.removeBean();
//	            setEditionEnabled(false);
//	        }
//	    });
//
//	    initFormListeners();
//	    
//	    
//	    formButtonsBar.addSaveListener(saveEvent -> {
//	        // it checks that all validators defined in the form pass without error.
//	        if (!userForm.getBinder().validate().isOk()) {
//	            return;
//	        }
//
//	        Optional<User> optionalUser = userForm.getBean();
//
//	        if (optionalUser.isPresent()) {
//	            User user = optionalUser.get();
//
//	            user = UsersRepository.save(user);
//
//	            usersGrid.refresh(user);
//	            userForm.setBean(user); // update the data in the form
//	        }
//	    });
//	    
//	    
//	    formButtonsBar.addCancelListener(cancelEvent -> {
//	        usersGrid.deselectAll();
//	    });
//	    
//	    
//	    formButtonsBar.addDeleteListener(deleteEvent -> {
//	        Optional<User> optionalUser = usersGrid.getSelectedItems().stream().findAny();
//
//	        if (optionalUser.isPresent()) {
//	            UsersRepository.delete(optionalUser.get());
//	            usersGrid.deselectAll();
//	            usersGrid.refreshAll();
//	        }
//	    });
//	  
//	}
//
//}
