import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './header.js';
import './footer.js';
import { data, options, nodeIds } from './data-set.js';
import { Network } from 'vis-network/peer'; // Import Network from vis-network/peer





class VisControl extends PolymerElement {

	// nodes = data.nodes;


	static get template() {
		return html`

	<head>
    <script type="text/javascript" src="https://unpkg.com/vis-network@7.7.0/dist/vis-network.min.js"></script>


	<style>
	
	
  /* Add some spacing and styling to the form and its elements */
        #inputsForm {
            padding: 20px;
            background-color: white;
            border: 1px solid #ccc;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            font-family: Arial, sans-serif;
            font-size: 14px;
        }

        .inputs table {
            width: 100%;
        }

        .inputs td {
            padding: 8px;
        }

        .inputs input[type="text"],
        .inputs input[type="number"] {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .inputs select {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        /* Style the submit button */
        #submit-button, #save-button , #load-xml-button , #load-button , #save-xml-button ,#save-in-json-file, #load-from-json-file, #xml-file-input{
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
        }

        /* Style the submit button on hover */
        #submit-button:hover, #save-button:hover, #load-xml-button:hover, #load-button:hover , #save-xml-button:hover, #save-in-json-file:hover, #load-from-json-file:hover, #xml-file-input:hover{
            background-color: #0056b3;
        }


        #wrapper {
            display: flex;
        }

        #tool-bar {
			width: 300px;
            height: 300px;
            font-family: calibri;
            font-size: 20px;
			
        }

        #network-container {
            width: 70%;
            height: 600px;
            border: 1px solid #ccc;
        }

        .main-list ul {
            display: none;
        }

        .main-list li:active>ul {
            display: block;
        }

        .main-list,
        .sub-list {
            list-style-type: none;
            background-color: white;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        }

        .main-list li,
        .sub-list li {
            padding: 8px 16px;
            cursor: pointer;
        }

        .main-list li:hover,
        .sub-list li:hover {
            background-color: lightblue;
        }

        .dropdown {
            position: absolute;
            background-color: white;
            border: 1px solid #ccc;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }

        .dropdown a {
            display: block;
            padding: 8px 16px;
            text-decoration: none;
            color: black;
        }

        .dropdown a:hover {
            background-color: #f1f1f1;
        }

        /* CSS for the Link Style Drop-Down Menu */
        #link-style-menu {
            position: absolute;
            background-color: white;
            border: 1px solid #ccc;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            display: none;
            /* Initially hide the menu */
        }

        #link-style-menu a {
            display: block;
            padding: 8px 16px;
            text-decoration: none;
            color: black;
        }

        #link-style-menu a:hover {
            background-color: #f1f1f1;
        }
</style>

	</head>
	
	

<body>

<slot name="header"></slot>

<div id="wrapper">
    <div id="tool-bar"  > Tools
        <br>
        <ul class="main-list" style$=" display :[[toolsHidden]];">
            <li on-click= "addShape"  id="add-shapes">
                Add Shapes
                <ul class="sub-list"  style$=" display :[[shapesHidden]];">
                    <li id="add-rectangle">Add rectangle </li>
                    <li id="add-circle">Add Circle </li>
                    <li id="add-ellipse">Add Ellipse </li>
                    <li id="add-triangle">Add Triangle </li>
                    <li id="add-image">
                        <input type="file" id="image-input" accept="image/*" style="display:none">
                        <label for="image-input">Add Image</label>
                    </li>
                </ul>
            </li>

            <li on-click="addLink" id="add-links">
                Add Links
                <ul class="sub-list" style$=" display :[[linksHidden]];">
                    <li id="add-link1">Direct link </li>
                    <li id="add-link2">Curved link </li>
                    <li id="add-link3">Dynamic link</li>
                    <li id="add-link4">Continuous link </li>

                </ul>
            </li>
            
            <li on-click = "deleteNode" id="delete-node">Delete a Node </li>
            <li on-click = "deleteLink" id="delete-link">Delete a Link </li>
            <li on-click="getEdgeProperties" id="edgeProps">Edge Properties </li>
        </ul>
    </div>
    <div id="network-container" style="margin-top: 150px; position: fix;"></div>


</div>

<!-- Add this code inside the body tag -->
<div id="link-style-menu" class="dropdown">
    <a id="link-style-direct">    Direct    </a>
    <a  id="link-style-continuous">Continuous</a>
    <a  id="link-style-curve">     Curve     </a>
    <a  id="link-style-dynamic">   Dynamic   </a>
</div>


<div   id = "edgeInputs" hidden$="[[propsHidden]]" ;" > Edge Properties 

<form id ="inputsForm">
<div class = "inputs" > 

<table class="table">


<tr> 
<td>
Color
</td>

<td>
<input type = "text" id = "edgeColor" > 
</td> 
</tr>

<tr> 
<td>
Width
</td>

<td>
<input type = "text" id = "edgeWidth" > 
</td> 
</tr>


<tr> 
<td>
Smooth
</td>

<td>
<select id = "smth">
<option value="true" selected > True </option>
<option value="false" > False </option>
</select>
</td> 
</tr>


<tr> 
<td>
Opacity
</td>

<td>
<input type = "number" id = "edgeOpacity" > 
</td> 
</tr>


<tr> 


<td>
<input type = "submit" id = "submit-button" > 
</td> 
</tr>

</table>

</div>


</form>
</div>

<button id="save-button">Save Graph</button>
<button id="load-button">Load Graph</button>

<button id="save-in-json-file">Save Graph as JSON  file</button>
<button id="load-from-json-file">Load Graph from JSON file</button>
<input type="file" id="file-input" style="display: none;">

<button id="save-xml-button">Save Graph as XML</button>


<input type="file" id="xml-file-input" accept=".xml">
<button id="load-xml-button" > load from XML </button>




	<slot name="footer"></slot>
</body> `;
	}




	getEdgeProperties() {
		this.propsHidden = !this.propsHidden;

		console.log(this.propsHidden);
	}

	addShape() {
		this.shapesHidden === 'none'
		if (this.shapesHidden === 'none')
			this.shapesHidden = 'block';
		else
			this.shapesHidden = 'none';

		console.log(this.shapesHidden);
	}

	addLink() {
		this.linksHidden === 'none'
		if (this.linksHidden === 'none')
			this.linksHidden = 'block';
		else
			this.linksHidden = 'none';

		console.log(this.linksHidden);
	}

	connectedCallback() {
		super.connectedCallback();
		const container = this.shadowRoot.querySelector('#network-container');


		const network = new Network(container, data, options)


		var x = 100, y = 100;
		var edges = data.edges;
		var nodes = data.nodes;

		function addNode(Node) {

			const newNodeId = nodes.length > 0 ? Math.max(...nodes.getIds()) + 1 : 1;
			nodes.add({ id: newNodeId, label: 'Node ' + (nodes.length + 1), shape: Node, x: x, y: y });
			console.log(nodes.get(newNodeId));
		}

		// Function to add an image node
		function addImage(Node, imageUrl) {
			const newNodeId = nodes.length > 0 ? Math.max(...nodes.getIds()) + 1 : 1;

			nodes.add({
				id: newNodeId,
				label: 'Node ' + (nodes.length + 1),
				shape: Node,
				image: imageUrl,
				x: x,
				y: y,
			});
			console.log(nodes.get(newNodeId));
		}


		var addRectangleNode = this.shadowRoot.querySelector('#add-rectangle');
		var addCircleNode = this.shadowRoot.querySelector("#add-circle");
		var addTriangleNode = this.shadowRoot.querySelector("#add-triangle");
		var addEllipseNode = this.shadowRoot.querySelector("#add-ellipse");
		var addImageNode = this.shadowRoot.querySelector("#add-image");

		addRectangleNode.addEventListener("click", function() {
			addNode('box');
		});

		addCircleNode.addEventListener("click", function() {
			addNode('circle');
		});

		addTriangleNode.addEventListener("click", function() {
			addNode('triangle');
		});

		addEllipseNode.addEventListener("click", function() {
			addNode('ellipse');
		})


		addRectangleNode.addEventListener("click", function() {
			addNode('box');
		});

		addImageNode.addEventListener('change', function(event) {
			var selectedImage = event.target.files[0];
			var reader = new FileReader();

			reader.onload = function() {
				var imageUrl = reader.result;
				addImage('image', imageUrl);
				// Reset the input element to allow selecting the same image again
				if (event.target) {
					event.target.value = '';
				}
			};

			reader.readAsDataURL(selectedImage);
		});


		//------------------------------------------------------------------------------------------------------------
		// Add event listeners for link buttons
		var link = this.shadowRoot.querySelector("#add-link1");


		var startNodeId = null; // To store the selected starting node ID
		var endNodeId = null;   // To store the selected ending node ID
		link.addEventListener("click", function() {


			// Listen for a click on a node to select the starting node
			network.once("click", function(params) {
				startNodeId = params.nodes[0];
				const newEdgeId = edges.length > 0 ? Math.max(...edges.getIds()) + 1 : 1;

				if (startNodeId !== undefined) {

					if (startNodeId) {
						console.log(nodes.get(startNodeId));
					}

					// Listen for another click on a node to select the ending node
					network.once("click", function(params) {
						endNodeId = params.nodes[0];

						if (endNodeId !== undefined) {

							if (endNodeId) {
								console.log(nodes.get(endNodeId));
							}

							// Create a link between the selected nodes
							edges.add({
								id: newEdgeId,
								label: 'Edge ' + (edges.length + 1),
								color: 'red',
								from: startNodeId,
								to: endNodeId,
								smooth: false,
							});
							console.log(edges.get(newEdgeId));
							startNodeId = null; // Reset the starting node ID
							endNodeId = null;   // Reset the ending node ID
						}
					});
				}

			});

		});



		var curveLink = this.shadowRoot.querySelector("#add-link2");





		curveLink.addEventListener("click", function() {
			// Listen for a click on a node to select the starting node
			network.once("click", function(params) {
				startNodeId = params.nodes[0];
				const newEdgeId = edges.length > 0 ? Math.max(...edges.getIds()) + 1 : 1;

				if (startNodeId !== undefined) {
					if (startNodeId) {
						console.log(nodes.get(startNodeId));
					}
					// Listen for another click on a node to select the ending node
					network.once("click", function(params) {
						endNodeId = params.nodes[0];
						if (endNodeId !== undefined) {
							if (endNodeId) {
								console.log(nodes.get(endNodeId));
							}
							var round = prompt("Enter the roundness");

							// Create a curved link between the selected nodes
							edges.add({
								id: newEdgeId,
								label: 'Edge ' + (edges.length + 1),
								color: 'purple',
								from: startNodeId,
								to: endNodeId,
								smooth: {
									type: "curvedCW",  // Use "curvedCW" for clockwise curvature
									roundness: parseInt(round),     // Adjust roundness as needed
								}
							});
							console.log(edges.get(newEdgeId));

							startNodeId = null; // Reset the starting node ID
							endNodeId = null;   // Reset the ending node ID
						}
					});
				}
				console.log(edges.get(newEdgeId));
			});
		});

		var dynamicLink = this.shadowRoot.querySelector("#add-link3");

		dynamicLink.addEventListener("click", function() {


			// Listen for a click on a node to select the starting node
			network.once("click", function(params) {
				startNodeId = params.nodes[0];
				const newEdgeId = edges.length > 0 ? Math.max(...edges.getIds()) + 1 : 1;

				if (startNodeId !== undefined) {
					if (startNodeId) {
						console.log(nodes.get(startNodeId));
					}

					// Listen for another click on a node to select the ending node
					network.once("click", function(params) {
						endNodeId = params.nodes[0];
						if (endNodeId !== undefined) {
							if (endNodeId) {
								console.log(nodes.get(endNodeId));
							}

							// Create a link between the selected nodes
							edges.add({
								id: newEdgeId,
								label: 'Edge ' + (edges.length + 1),
								color: 'blue',
								from: startNodeId,
								to: endNodeId,
								smooth: { type: 'dynamic' },
							});
							console.log(edges.get(newEdgeId));
							startNodeId = null; //Reset the starting node ID
							endNodeId = null;   //Reset the ending node ID
						}
					});
				}

			});
		});


		var continuousLink = this.shadowRoot.querySelector("#add-link4");

		continuousLink.addEventListener("click", function() {


			// Listen for a click on a node to select the starting node
			network.once("click", function(params) {
				startNodeId = params.nodes[0];
				const newEdgeId = edges.length > 0 ? Math.max(...edges.getIds()) + 1 : 1;
				if (startNodeId !== undefined) {

					if (startNodeId) {
						console.log(nodes.get(startNodeId));
					}
					// Listen for another click on a node to select the ending node
					network.once("click", function(params) {
						endNodeId = params.nodes[0];
						if (endNodeId !== undefined) {
							if (endNodeId) {
								console.log(nodes.get(endNodeId));
							}
							// Create a link between the selected nodes
							edges.add({
								id: newEdgeId,
								label: 'Edge ' + (edges.length + 1),
								color: 'blue',
								from: startNodeId,
								to: endNodeId,
								smooth: { type: 'continuous' },
							});
							console.log(edges.get(newEdgeId));
							startNodeId = null; // Reset the starting node ID
							endNodeId = null;   // Reset the ending node ID
						}
					});
				}

			});
		});


		//-------------------------------------------------------------------------------------------------
		var deleteNode = this.shadowRoot.querySelector("#delete-node");


		deleteNode.addEventListener("click", function() {

			network.once("click", function(params) {
				const firTselectedNodeId = params.nodes[0];
				if (firTselectedNodeId !== null) {
					// Find all edges connected to the selected node
					const connectedEdges = edges.get({
						filter: function(edge) {
							return edge.from === firTselectedNodeId || edge.to === firTselectedNodeId;
						}
					});


					// Remove the selected node
					nodes.remove({ id: firTselectedNodeId });
					console.log(" Successfully removed The Node !");


					// Remove all connected edges
					edges.remove(connectedEdges);



				}

			});


		});

		var deleteLink = this.shadowRoot.querySelector("#delete-link");
		var link = null;
		deleteLink.addEventListener("click", function() {
			network.once("click", function(params) {
				link = params.edges[0];
				if (link !== undefined) {

					edges.remove(link);
					console.log(edges.get(link));
				}

			});


		});


		let flag = false;
		let flag1 = false;
		// Store the currently selected node ID
		let selectedNodeId = null;
		let selectedEdgeId = null;
		let dropDownMenu;
		network.on("oncontext", function(params) {
			params.event.preventDefault();

			// Store the selected node ID if a node is clicked
			if (params.nodes.length > 0) {
				// Store the selected node ID
				selectedNodeId = params.nodes[0];
				if (flag) {
					dropDownMenu = document.createElement("div");
					dropDownMenu.classList.add("dropdown");

					const rect = params.pointer.DOM;
					dropDownMenu.style.left = rect.x + "px";
					dropDownMenu.style.top = rect.y + "px";
					dropDownMenu.style.position = "absolute";
					dropDownMenu.style.backgroundColor = "white";
					dropDownMenu.style.border = "1px solid #ccc";
					dropDownMenu.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";

					dropDownMenu.style.zIndex = 1000;
					dropDownMenu.style.padding = "10px"; // Add padding for better visual appearance
					dropDownMenu.style.width = "150px"; // Adjust the width as needed
					dropDownMenu.style.textAlign = "left"; // Align text to the left
					dropDownMenu.style.fontSize = "14px"; // Set font size
					dropDownMenu.style.color = "#333"; // Set text color
					dropDownMenu.style.overflow = "hidden"; // Hide overflow content
					dropDownMenu.style.cursor = "pointer"; // Hide overflow content

					var removeOption = document.createElement("a");

					removeOption.textContent = "Remove";
					removeOption.addEventListener("click", removeNode);


					var linkOption = document.createElement("a");

					linkOption.textContent = "Link";
					linkOption.addEventListener("click", linkNode);

					var changeShapeOption = document.createElement("a");

					changeShapeOption.textContent = "Change Shape";
					changeShapeOption.addEventListener("click", changeShape);

					var changeColorOption = document.createElement("a");

					changeColorOption.textContent = "Change Color";
					changeColorOption.addEventListener("click", changeColor);

					var changeNameOption = document.createElement("a");

					changeNameOption.textContent = "Change Name";
					changeNameOption.addEventListener("click", changeName);



					dropDownMenu.appendChild(removeOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(linkOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(changeShapeOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(changeColorOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(changeNameOption);
					dropDownMenu.appendChild(document.createElement("br"));

					document.body.appendChild(dropDownMenu);
					flag = false;
				} else {

					if (dropDownMenu) {
						dropDownMenu.style.display = 'none';
					}

					flag = true;
				}
			}


			else if (params.edges.length > 0) {
				// Store the selected node ID
				selectedEdgeId = params.edges[0];

				if (flag1) {
					dropDownMenu = document.createElement("div");
					dropDownMenu.classList.add("dropdown");



					const rect = params.pointer.DOM;
					dropDownMenu.style.left = rect.x + "px";
					dropDownMenu.style.top = rect.y + "px";
					dropDownMenu.style.position = "absolute";
					dropDownMenu.style.backgroundColor = "white";
					dropDownMenu.style.border = "1px solid #ccc";
					dropDownMenu.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";

					dropDownMenu.style.zIndex = 1000;
					dropDownMenu.style.padding = "10px"; // Add padding for better visual appearance
					dropDownMenu.style.width = "150px"; // Adjust the width as needed
					dropDownMenu.style.textAlign = "left"; // Align text to the left
					dropDownMenu.style.fontSize = "14px"; // Set font size
					dropDownMenu.style.color = "#333"; // Set text color
					dropDownMenu.style.overflow = "hidden"; // Hide overflow content
					dropDownMenu.style.cursor = "pointer"; // Hide overflow content


					var removeOption = document.createElement("a");

					removeOption.textContent = "Remove";
					removeOption.addEventListener("click", removeLink);
					removeOption.style.color = "black";




					var changeColorOption = document.createElement("a");

					changeColorOption.textContent = "Change Color";
					changeColorOption.addEventListener("click", changeEdgeColor);

					var changeNameOption = document.createElement("a");

					changeNameOption.textContent = "Change Name";
					changeNameOption.addEventListener("click", changeEdgeName);

					var createDahesOption = document.createElement("a");

					createDahesOption.textContent = "Dashes";
					createDahesOption.addEventListener("click", createDahes);


					dropDownMenu.appendChild(removeOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(changeColorOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(changeNameOption);
					dropDownMenu.appendChild(document.createElement("br"));
					dropDownMenu.appendChild(createDahesOption);
					dropDownMenu.appendChild(document.createElement("br"));

					document.body.appendChild(dropDownMenu);
					flag1 = false;
				} else {

					if (dropDownMenu) {
						dropDownMenu.style.display = 'none';
					}

					flag1 = true;
				}
			}



		});








		// Handle the remove action here
		function removeNode() {
			if (selectedNodeId !== null) {
				// Find all edges connected to the selected node
				const connectedEdges = edges.get({
					filter: function(edge) {
						return edge.from === selectedNodeId || edge.to === selectedNodeId;
					}
				});

				// Remove all connected edges
				edges.remove(connectedEdges);

				// Remove the selected node
				nodes.remove({ id: selectedNodeId });

				dropDownMenu.style.display = 'none';
			}
		}






		// Link node function
		let castingRoundness = 0;
		var startNodeId4 = null;
		var endNodeId4 = null;
		function linkNode() {
			// Listen for a click on a node to select the starting node
			network.once("click", function(params) {
				let startNodeId4 = params.nodes[0];
				if (startNodeId4 !== undefined) {
					console.log("First linked Node: ", nodes.get(startNodeId4));

					// Listen for another click on a node to select the ending node
					network.once("click", function(params) {
						let endNodeId4 = params.nodes[0];
						if (endNodeId4 !== undefined) {
							console.log(nodes.get(endNodeId4));
							var newEdgeId = edges.length > 0 ? Math.max(...edges.getIds()) + 1 : 1;

							// Create a link between the selected nodes
							var linkStyle = prompt("Enter one of these styles: direct, continuous, curve, or dynamic, respectively use 1, 2, 3, or 4");
							if (linkStyle) {
								var edgeOptions = {
									id: newEdgeId,
									label: 'Edge ' + (edges.length + 1),
									color: 'red',
									from: startNodeId4,
									to: endNodeId4,
								};

								if (linkStyle === '1') {
									edgeOptions.smooth = false;
								} else if (linkStyle === '2' || linkStyle === '4') {
									edgeOptions.smooth = { type: linkStyle };
								} else if (linkStyle === '3') {
									var roundness = prompt("Enter the roundness ");
									var castingRoundness = parseInt(roundness);
									if (!isNaN(castingRoundness)) {
										edgeOptions.smooth = {
											type: linkStyle,
											roundness: castingRoundness,
										};
									}
								}

								// Add the new edge to the graph
								edges.add(edgeOptions);
								console.log(edges.get(newEdgeId));
							}

							startNodeId4 = null; // Reset the starting node ID
							endNodeId4 = null; // Reset the ending node ID
						}
					});
				}
			});
			dropDownMenu.style.display = 'none';
		}




		// Change shape function
		function changeShape() {


			if (selectedNodeId !== null) {
				var shape = prompt("Enter 1: rectangle, 2: triangle, 3: ellipse, 4: circle, 5: image from file");

				if (shape !== null) {
					switch (shape) {
						case '1':
							nodes.update({ id: selectedNodeId, shape: 'box' });
							break;

						case '2':
							nodes.update({ id: selectedNodeId, shape: 'triangle' });
							break;

						case '3':
							nodes.update({ id: selectedNodeId, shape: 'ellipse' });
							break;

						case '4':
							nodes.update({ id: selectedNodeId, shape: 'circle' });
							break;

						case '5':
							// Allow the user to select an image file
							var imageInput = document.createElement("input");
							imageInput.type = "file";
							imageInput.accept = "image/*";
							imageInput.style.display = "none";

							imageInput.addEventListener("change", function() {
								if (imageInput.files.length > 0) {
									var selectedImage = imageInput.files[0];
									var reader = new FileReader();

									reader.onload = function() {
										var imageUrl = reader.result;
										nodes.update({ id: selectedNodeId, shape: 'image', image: imageUrl });
									};

									reader.readAsDataURL(selectedImage);
								}
							});

							// Trigger the file input
							imageInput.click();
							break;

						default:
							alert("Invalid shape");
					}
				}
			}

			dropDownMenu.style.display = 'none';

		}


		// Change color function
		function changeColor() {


			if (selectedNodeId !== null) {



				var color = prompt("enter your needed color");

				if (color !== null) {

					nodes.update({ id: selectedNodeId, color: color });

				}


				dropDownMenu.style.display = 'none';
			}
		}

		function changeName() {




			if (selectedNodeId !== null) {
				var name = prompt("Enter the new Name");

				if (name !== null) {
					nodes.update({ id: selectedNodeId, label: name });
				}
				dropDownMenu.style.display = 'none';
			}
		}

		function removeLink() {

			if (selectedEdgeId !== null) {
				edges.remove({ id: selectedEdgeId });
			}
			dropDownMenu.style.display = 'none';
		}

		function changeEdgeName() {

			var newName = prompt("Enter the new Name");
			if (selectedEdgeId !== null) {

				edges.update({ id: selectedEdgeId, label: newName });

			}
			dropDownMenu.style.display = 'none';

		}

		function changeEdgeColor() {


			var newColor = prompt("Enter the new color");
			if (selectedEdgeId !== null) {

				edges.update({ id: selectedEdgeId, color: newColor });

			}
			dropDownMenu.style.display = 'none';
		}


		let checkIfDashes = true;
		function createDahes() {



			if (selectedEdgeId !== null) {

				if (checkIfDashes) {

					var dash = prompt("Enter the length of the first dash segment");
					var gap = prompt("Enter  the length of the first gap segment");

					edges.update({ id: selectedEdgeId, dashes: [dash, gap] });
					checkIfDashes = false;
					console.log("Added Dashes!");
				} else {

					edges.update({ id: selectedEdgeId, dashes: [0, 0] });

					checkIfDashes = true;
					console.log("Removed Dashes!");
				}

				console.log(edges.get(selectedEdgeId));

			}

			dropDownMenu.style.display = 'none';
		}





		// Update the position of the drop-down menu when the node is dragged
		network.on("dragEnd", function(params) {


			selectedNodeId = params.nodes[0];
			selectedEdgeId = params.edges[0];

			const nodePosition = network.getPositions([selectedNodeId])[selectedNodeId];
			const edgePosition = network.getPositions([selectedEdgeId])[selectedEdgeId];

			if (selectedNodeId && dropDownMenu) {

				if (nodePosition) {
					dropDownMenu.style.left = nodePosition.x + "px";
					dropDownMenu.style.top = nodePosition.y + "px";
				}
			}


			if (selectedEdgeId && dropDownMenu) {

				if (edgePosition) {
					dropDownMenu.style.left = edgePosition.x + "px";
					dropDownMenu.style.top = edgePosition.y + "px";
				}
			}

			if (selectedNodeId) {
				nodes.update({ id: selectedNodeId, x: nodePosition.x, y: nodePosition.y });

				console.log(nodes.get(selectedNodeId));
			}

		});




		var submit = this.shadowRoot.querySelector("#submit-button");

		submit.addEventListener("click", (event) => {
			event.preventDefault();
			var Alledges = edges.get();

			var color = this.shadowRoot.querySelector("#edgeColor").value;
			var width = this.shadowRoot.querySelector("#edgeWidth").value;
			var smth = this.shadowRoot.querySelector("#smth").value;
			var opacity = this.shadowRoot.querySelector("#edgeOpacity").value;

			console.log(Alledges);

			for (let edge of Alledges) {

				edges.update({

					id: edge.id,
					color: color,
					width: width,
					smooth: smth,
					opacity: opacity
				});

			}


		});


		//Save button event listener
		this.shadowRoot.querySelector('#save-button').addEventListener('click', function(event) {
			// Implement the save logic here (serialize and store the graph data)
			// Example code for saving to local storage:

			// Serialize the graph data
			// Get the positions of nodes

			const serializedData = {
				nodes: nodes.get(),
				edges: edges.get(),

			};
			const jsonData = JSON.stringify(serializedData);
			localStorage.setItem('savedGraph', jsonData);


			console.log(jsonData);
			// Provide feedback to the user, e.g., showing a success message
			alert('Graph saved successfully!');
		});



		//Load button event listener
		this.shadowRoot.querySelector('#load-button').addEventListener('click', function() {
			// Retrieve the serialized data from local storage
			const jsonData = localStorage.getItem('savedGraph');

			if (jsonData) {
				// Parse the JSON string to get the graph data
				const parsedData = JSON.parse(jsonData);
				console.log(parsedData);
				// Clear the current graph (if needed)
				nodes.clear();
				edges.clear();

				// Load the parsed graph data into the graph visualization
				nodes.add(parsedData.nodes);
				edges.add(parsedData.edges);









				// Redraw the network to update the node positions
				network.redraw();


				// Provide feedback to the user
				alert('Graph loaded successfully with saved positions and labels!');
			} else {
				// Handle the case when there's no saved data
				alert('No saved graph data found.');
			}
		});





		var saveInJson = this.shadowRoot.querySelector('#save-in-json-file');
		var loadFromJson = this.shadowRoot.querySelector('#load-from-json-file');

		saveInJson.addEventListener("click", function() {
			const serializedData = {
				nodes: nodes.get(),
				edges: edges.get(),
			};

			const jsonData = JSON.stringify(serializedData);

			const blob = new Blob([jsonData], { type: 'application/json' });

			const url = URL.createObjectURL(blob);


			// Create a link element and trigger a click event to simulate a download
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = 'graph_data.json';
			document.body.appendChild(a);
			a.click();

			// Clean up
			URL.revokeObjectURL(url);
			document.body.removeChild(a);

			// Provide feedback to the user
			alert('Graph saved successfully!');

		});


		var fi = this.shadowRoot.querySelector('#file-input');

		loadFromJson.addEventListener('click', function() {
			// Trigger a click event on the hidden file input
			fi.click();
		});




		fi.addEventListener("change", function(event) {
			const fileInput = event.target;
			const selectedFile = fileInput.files[0];

			if (selectedFile) {
				const reader = new FileReader();

				reader.onload = function(e) {
					const jsonData = e.target.result;

					// Parse the JSON string to get the graph data
					const parsedData = JSON.parse(jsonData);

					// Clear the current graph (if needed)
					nodes.clear();
					edges.clear();

					// Load the parsed graph data into the graph visualization
					nodes.add(parsedData.nodes);
					edges.add(parsedData.edges);

					// Redraw the network to update the node positions
					network.redraw();

					// Provide feedback to the user
					alert('Graph loaded successfully from the selected file!');
				};

				reader.readAsText(selectedFile);
			} else {
				// Handle the case when no file is selected
				alert('No file selected.');

			}

		});



		//Function to convert graph data to XML format
		function convertToXML(graphData) {
			let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
			xml += '<graph>\n';

			// Convert nodes to XML
			xml += '  <nodes>\n';
			graphData.nodes.forEach((node) => {
				xml += `    <node id="${node.id}" label="${node.label}" x="${node.x}" y="${node.y}" color="${node.color}" shape ="${node.shape}" />\n`;
			});
			xml += '  </nodes>\n';

			// Convert edges to XML
			xml += '  <edges>\n';
			graphData.edges.forEach((edge) => {
				if (edge.smooth === true || edge.smooth === false) {
					xml += `    <edge id="${edge.id}" label="${edge.label}" from="${edge.from}" to="${edge.to}" color="${edge.color}" smooth="${edge.smooth}" />\n`;
				} else {
					xml += `    <edge id="${edge.id}" label="${edge.label}" from="${edge.from}" to="${edge.to}" color="${edge.color}">\n`;
					xml += `      <smooth type="${edge.smooth.type}" />\n`; // Assuming edge.smooth.type contains the type
					xml += `    </edge>\n`;
				}
			});
			xml += '  </edges>\n';


			xml += '</graph>';

			return xml;
		}

		this.shadowRoot.querySelector('#save-xml-button').addEventListener('click', function() {
			// Serialize the graph data
			const serializedData = {
				nodes: nodes.get(),
				edges: edges.get(),
			};

			// Convert the graph data to XML format
			const xmlData = convertToXML(serializedData);

			// Create a Blob containing the XML data
			const blob = new Blob([xmlData], { type: 'text/xml' });

			// Create a link to download the XML file
			const a = document.createElement('a');
			a.href = window.URL.createObjectURL(blob);
			a.download = 'graph.xml';
			a.style.display = 'none';

			// Add the link to the document and trigger a click event to download the file
			document.body.appendChild(a);
			a.click();

			// Clean up
			window.URL.revokeObjectURL(a.href);
			document.body.removeChild(a);

			// Provide feedback to the user
			alert('Graph saved as XML successfully!');
		});



		const fileInput1 = this.shadowRoot.querySelector('#xml-file-input');

		fileInput1.addEventListener('change', function() {

			// Get the file input element


			// Add an event listener to the file input

			const selectedFile = fileInput1.files[0];

			if (selectedFile) {
				const reader = new FileReader();

				reader.onload = function(e) {
					const xmlData = e.target.result;

					// Process the loaded XML data here
					parseXmlData(xmlData);
				};

				reader.readAsText(selectedFile);
			} else {
				// Handle the case when no file is selected
				alert('No file selected.');
			}


			// Trigger a click event on the file input to open the file dialog
			fileInput1.click();
		});

		//Function to parse XML data
		function parseXmlData(xmlData) {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

			// Now you can work with xmlDoc, which contains the parsed XML data
			// For example, you can access elements like this:
			const nodes = xmlDoc.getElementsByTagName('node');
			const edges = xmlDoc.getElementsByTagName('edge');

			// Clear the current graph (if needed)
			data.nodes.clear();
			data.edges.clear();

			// Process nodes and edges as needed and add them to the Vis.js data
			for (let i = 0; i < nodes.length; i++) {
				const node = nodes[i];
				data.nodes.add({
					id: node.getAttribute('id'),
					label: node.getAttribute('label'),
					x: parseFloat(node.getAttribute('x')),
					y: parseFloat(node.getAttribute('y')),
					color: node.getAttribute('color'), // You might need to convert this to a proper color format
					shape: node.getAttribute('shape') // You might need to set an appropriate shape here
				});
			}

			for (let i = 0; i < edges.length; i++) {
				const edge = edges[i];
				data.edges.add({
					id: edge.getAttribute('id'),
					label: edge.getAttribute('label'),
					from: edge.getAttribute('from'),
					to: edge.getAttribute('to'),
					color: edge.getAttribute('color') // You might need to convert this to a proper color format
				});
			}

			// Redraw the Vis.js network
			network.redraw();

			// Provide feedback to the user
			alert('Graph loaded successfully from the XML file!');
		}



		console.log(nodes.get(), edges.get(), options, network);
	}








	static get is() {

		return 'vis-control';
	}




}

customElements.define(VisControl.is, VisControl);


