"use strict";



//I selected two DOM nodes; a textarea input and a button
let textArea = document.querySelector("textarea");
let button = document.querySelector("button");

//I registered a handler function to run on button click. The function gets user input string; converts to an array of strings and iterates over it
button.addEventListener("click", ()=>{
	if (document.getElementById("table")){
		document.getElementById("table").remove();
	}
	let textString = textArea.value;
	let frequencyMap = wordFreq(textString);
	let table = getTableNode(frequencyMap);
	table.id = "table";	
	document.querySelector("#frequency_table").appendChild(table);
	
});


//a function that returns a string frequency map
function wordFreq(string){
	var words = string.replace(/[.]/g, "").split(/\s/);
	var freqMap = {};
	words.forEach(function(w){
		if (!freqMap[w]){
			freqMap[w] = 0;
		}
		freqMap[w] += 1;
	});

	return freqMap;
}
//a function that dynamically generates a html table
function getTableNode(frequencyObject){
	let tableNode = document.createElement("table");
	let headRow = ["Word", "Frequency"];
	let trHead = document.createElement("tr");
	trHead.id = "head";
	for (let i of headRow){
		let thCell = document.createElement("th");
		let thCellContent = document.createTextNode(i);
		thCell.appendChild(thCellContent);
		trHead.appendChild(thCell);
	}
	tableNode.appendChild(trHead);

	let index = 0;
	for (let i of Object.keys(frequencyObject)){
		let trBody = document.createElement("tr");
		let word=Object.keys(frequencyObject)[index];
		index+=1;
		let frequency = String(frequencyObject[i]);
		let tdArray = [word, frequency];
		for (let i of tdArray){
			let tdCell = document.createElement("td");
			let tdCellData = document.createTextNode(i);
			tdCell.appendChild(tdCellData);
			trBody.appendChild(tdCell);
			tableNode.appendChild(trBody);
		}
	}
	return tableNode;
}
