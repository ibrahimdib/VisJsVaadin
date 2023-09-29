package org.vaadin.example.Encode;

import java.io.Serializable;

public class DateBean implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String day;
    private String month;
    private String year;

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

}
