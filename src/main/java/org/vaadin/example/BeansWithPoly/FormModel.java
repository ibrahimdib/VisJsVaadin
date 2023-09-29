package org.vaadin.example.BeansWithPoly;

import com.vaadin.flow.templatemodel.Exclude;
import com.vaadin.flow.templatemodel.TemplateModel;

public interface FormModel extends TemplateModel {
	  @Exclude("id")
	  void setPerson(Person person);
	  Person getPerson();
	}
