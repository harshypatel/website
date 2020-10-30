/* File:  /~hpatel2/script.js
  Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu
  Copyright (c) 2020 by Harsh Y Patel.  All rights reserved.  
  File created:Oct 29th 2020
    updated by Harsh Y Patel Oct 29th 2020, 8:00 PM
 */
function Table_Create() {
    var row_start = parseInt(document.getElementById('row_start').value);
    var row_end = parseInt(document.getElementById('row_end').value);
    var column_start = parseInt(document.getElementById('column_start').value);
    var column_end = parseInt(document.getElementById('column_end').value);

	console.log(row_start);
	console.log(row_end);
	console.log(column_start);
	console.log(column_end);


	var row_length = row_end-row_start;
	var column_height = column_end-column_start;
	
	/* Error check */
	if (row_start > row_end) {
        document.getElementById("message").innerHTML = "ERROR: Minimum row value is bigger than maximum";
        return false
        }
	else {
		document.getElementById("message").innerHTML = "";
	}
	
    if (column_end < column_start) {
		document.getElementById("message").innerHTML = "ERROR: Minimum column value is bigger than maximum";
        return false;
        }
	else {
		document.getElementById("message").innerHTML = "";
	}
	
	
	
	
	/* create table */
    var TableContent = "";
    var i,j,multiplicand,multiplier,multiplied; 
       
        

    TableContent += "<table>";
    TableContent += "<thead>";
    TableContent +="<tr>";
    TableContent += "<th>";
    TableContent += "X";
    TableContent +="</th>";


    for (i = 0; i <= row_length; i++) {
        TableContent += "<th>";
        TableContent +=Number(row_start) + i
        TableContent +="</th>"; 
        }



    TableContent += "</thead>";
    TableContent += "<tbody>";
    TableContent += "<tr>";

		TableContent += '<h1>';
    for (i = 0; i <= column_height; i++) {
        TableContent += "<th>";
        TableContent += (Number(column_start) + i);
        TableContent += "</th>"; 
        
         
    for (j = 1; j <= row_length+1; j++) {
        TableContent += "<td>";
        multiplicand = (Number(column_start) + i);
        multiplier = Number(row_start) + (j - 1);
        multiplied = multiplicand* multiplier;
        console.log(multiplied);
        TableContent += multiplied;
        TableContent +="</td>";
        if(j==row_length+1){
        TableContent += "</tr>";
                    }
                    
        }
            
    }

		TableContent += "</h1>";
		TableContent += "</tbody>";
		TableContent +="</table>";
		document.getElementById("table").innerHTML = TableContent;
}