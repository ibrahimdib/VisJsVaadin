package org.vaadin.example.visControl;

public class Node {
    private int id;
    private String label;
    private String shape;
    private int x;
    private int y;

  

    public Node(int id, String label, String shape, int x, int y) {
		
		this.id = id;
		this.label = label;
		this.shape = shape;
		this.x = x;
		this.y = y;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getLabel() {
		return label;
	}



	public void setLabel(String label) {
		this.label = label;
	}



	public String getShape() {
		return shape;
	}



	public void setShape(String shape) {
		this.shape = shape;
	}



	public int getX() {
		return x;
	}



	public void setX(int x) {
		this.x = x;
	}



	public int getY() {
		return y;
	}



	public void setY(int y) {
		this.y = y;
	}



	@Override
    public String toString() {
        return "Node [id=" + id + ", label=" + label + ", shape=" + shape + ", x=" + x + ", y=" + y + "]";
    }
}
