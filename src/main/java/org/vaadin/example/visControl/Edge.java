package org.vaadin.example.visControl;

public class Edge {
    private int id;
    private String label;
    private String color;
    private int from;
    private int to;
    private boolean smooth; // or an array of booleans

  

    public Edge(int id, String label, String color, int from, int to, boolean smooth) {
		
		this.id = id;
		this.label = label;
		this.color = color;
		this.from = from;
		this.to = to;
		this.smooth = smooth;
	}
    
    public Edge() {}



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



	public String getColor() {
		return color;
	}



	public void setColor(String color) {
		this.color = color;
	}



	public int getFrom() {
		return from;
	}



	public void setFrom(int from) {
		this.from = from;
	}



	public int getTo() {
		return to;
	}



	public void setTo(int to) {
		this.to = to;
	}



	public boolean isSmooth() {
		return smooth;
	}



	public void setSmooth(boolean smooth) {
		this.smooth = smooth;
	}



	@Override
    public String toString() {
        return "Edge [id=" + id + ", label=" + label + ", color=" + color + ", from=" + from + ", to=" + to + ", smooth=" + smooth + "]";
    }
}


//[3:26 PM] Hassan Abdine
//
//import com.vaadin.flow.component.dependency.CssImport;
//
//import com.vaadin.flow.component.dependency.JsModule;
//
//import com.vaadin.flow.component.orderedlayout.VerticalLayout;
//
//import com.vaadin.flow.router.Route;
//
//import org.vaadin.addons.visjs.network.VisNetwork;
//
// 
//
//@Route("")
//
//@CssImport(value = "./styles/shared-styles.css", themeFor = "vaadin-grid")
//
//@JsModule("@vaadin/vaadin-lumo-styles/presets/compact.js")
//
//public class VisjsAdapter extends VerticalLayout {
//
// 
//
//    public VisjsAdapter() {
//
//        VisNetwork visNetwork = new VisNetwork();
//
//        visNetwork.setSizeFull();
//
//        visNetwork.setOptions(getNetworkOptions());
//
//        visNetwork.setItems(getNetworkData());
//
//        add(visNetwork);
//
//    }
//
// 
//
//    private Options getNetworkOptions() {
//
//        // Customize the network options here
//
//        Options options = new Options();
//
//        // Set the desired options
//
//        return options;
//
//    }
//
// 
//
//    private DataSet getNetworkData() {
//
//        // Create and return the network data set here
//
//        DataSet dataSet = new DataSet();
//
//        // Add nodes and edges to the data set
//
//        return dataSet;
//
//    }
//
//}
//
//
//[3:26 PM] Hassan Abdine
//
//<dependency>    <groupId>org.vaadin.addons</groupId>    <artifactId>vaadin-flow-visjs</artifactId>    <version>1.0.0</version></dependency>
//
