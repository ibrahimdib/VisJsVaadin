package org.vaadin.example.employeeList;

import java.util.ArrayList;
import java.util.List;

import org.vaadin.example.employeeList.EmployeesTable.EmployeesModel;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.polymertemplate.RepeatIndex;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.Include;
import com.vaadin.flow.templatemodel.TemplateModel;

@Route("list")
@Tag("employees-list")
@JsModule("./src/js/employee-list.js")
public class EmployeesTable extends PolymerTemplate<EmployeesModel> {
	/**
	* 
	*/
	private static final long serialVersionUID = 1L;

	public interface EmployeesModel extends TemplateModel {
		@Include({ "name", "title", "email" })
		void setEmployees(List<Employee> employees);

		List<Employee> getEmployees();
	}

//	  public void setEmployees(List<Employee> employees) {
//	      getModel().setEmployees(employees);
//	  }

	public List<Employee> getEmployees() {
		return getModel().getEmployees();
	}

	public void updateTitle() {
	    getEmployees().forEach(employee -> employee.setTitle("Mr."));
	}

	@EventHandler
	public void processElement(@RepeatIndex int itemIndex) {
		System.out.println(getEmployees().get(itemIndex).getName());
	
	}

	public EmployeesTable() {

		

	}

	@EventHandler
	public void handleClick()  {
		Employee e = new Employee("Ibrahim", "Java Dev", "@gmail.com", 1);
		Employee e1 = new Employee("chadi", "Java Dev", "@rrgmail.com", 2);

		List<Employee> emps = new ArrayList<Employee>();

		emps.add(e);
		emps.add(e1);

		getModel().setEmployees(emps);
		updateTitle();
	}
}
