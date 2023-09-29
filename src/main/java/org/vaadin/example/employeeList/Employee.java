package org.vaadin.example.employeeList;



public class Employee {
    private String name;
    private String title;
    private String email;
    private long id;
    
    
    public Employee() {}

    public Employee(String name, String title, String email, long id) {
        this.name = name;
        this.title = title;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getTitle() {
        return title;
    }

    public String getEmail() {
        return email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    

}