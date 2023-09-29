package org.vaadin.example.test;

import com.vaadin.flow.templatemodel.TemplateModel;

public interface TestInterface  extends TemplateModel{

	void setName(String s);
	String getName();
	
	void setColor(String s);
	void setSize(String s);
	String getSize();
}
