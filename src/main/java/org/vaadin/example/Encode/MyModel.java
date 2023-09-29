package org.vaadin.example.Encode;

import java.util.Date;

import com.vaadin.flow.templatemodel.Encode;
import com.vaadin.flow.templatemodel.TemplateModel;

public interface MyModel extends TemplateModel {

    Date getBirthDate();

    @Encode(DateToDateBeanEncoder.class)
    void setBirthDate(Date birthDate);
}
