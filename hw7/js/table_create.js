/* File:  harshypatel.github.io/website/hw7/js/table_create.js
   Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu
   Copyright (c) 2020 by Harsh Y Patel.  All rights reserved.  
   File created:Nov 22nd, 2020
   updated by Harsh Y Patel Nov 22nd, 2020, 8:00 PM
 */

function Table_Create() {
	
	var column_start = parseInt(document.getElementById('column_start').value);
    var column_end = parseInt(document.getElementById('column_end').value);
    var row_start = parseInt(document.getElementById('row_start').value);
    var row_end = parseInt(document.getElementById('row_end').value);

	// flip values //
	if (column_start > column_end){  
		var temp = column_end;
		column_end = column_start;
		column_start = temp;
	}
	
	if (row_start > row_end){
		var temp1 = row_end;
		row_end = row_start;
		row_start = temp1;
	}
	
	var column_length = column_end-column_start;
	var row_depth = row_end-row_start;
	
	// create table //
    var TableContent = "";
    var i,j,multiplicand,multiplier,multiplied; 
	
    TableContent += "<table>";
    TableContent += "<thead>";
    TableContent +="<tr>";
    TableContent += "<th>";
    TableContent += "X";
    TableContent +="</th>";

    for (i = 0; i <= column_length; i++) {
        TableContent += "<th>";
        TableContent +=Number(column_start) + i
        TableContent +="</th>"; 
        }

    TableContent += "</thead>";
    TableContent += "<tbody>";
    TableContent += "<tr>";

	TableContent += '<h1>';
    for (i = 0; i <= row_depth; i++) {
        TableContent += "<th>";
        TableContent += (Number(row_start) + i);
        TableContent += "</th>"; 
       
    for (j = 1; j <= column_length+1; j++) {
        TableContent += "<td>";
        multiplicand = (Number(row_start) + i);
        multiplier = Number(column_start) + (j - 1);
        multiplied = multiplicand* multiplier;
        console.log(multiplied);
        TableContent += multiplied;
        TableContent +="</td>";
        if(j==column_length+1){
        TableContent += "</tr>";
            }
        }
    }

	TableContent += "</h1>";
	TableContent += "</tbody>";
	TableContent +="</table>";
	document.getElementById("table").innerHTML = TableContent;
}