package org.vaadin.example.BeansWithPoly;

public class Person {
    private String firstName, lastName;
    private int age;
    private Long id;

    public Person() {
        // Needed for TemplateModel
    }

    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public Long getId() {
        return id;
    }
}
