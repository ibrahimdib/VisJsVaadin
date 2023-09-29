import { DataSet } from 'vis-data/peer';

// Create a new DataSet for nodes
const nodes = new DataSet([]);

// Create a new DataSet for edges
const edges = new DataSet([]);

var startNodeId0 = null; 


var data = {
	nodes: nodes,
	edges: edges,
};

var nodeIds = {
	
	startNodeId0 : startNodeId0,
	
}

var options = {
	interaction: {

		dragView: true,  // Disable dragging the entire view/graph
	},
	physics: false, // Disable physics simulation
	edges: {
		smooth: {
			type: "curvedCW",  // Use "curvedCW" for clockwise curvature
		},
		color: 'red', // Set line color
		arrows: {
			to: { enabled: true, scaleFactor: 1 } // Display arrows at the target end of the edge
		}
	},


};



export { data, options, nodeIds};
