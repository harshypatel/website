/*
	Name: Harsh Y Patel 
	File: harshypatel.github.io/website/hw8/js/create_board.js 
	Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu  
	Copyright (c) 2020 by Harsh Patel.  All rights reserved.   
	File created:Dec 16th, 2020                          
	updated by Harsh Y Patel Dec 16th, 2020, 8:00 PM 
*/

var scrabbleTable = "";
function create_scrabble_board() { 
	  $("#scrabble_board_game").html(scrabbleTable);
    scrabbleTable += '<table>';

  	var kool;
		kool = 1;

	  while(kool < 9) {
		    scrabble_row(kool);
		    kool++;
	  }

	  kool = 7;

	  while(kool > 0) {
		    scrabble_row(kool);
		    kool--;
	  }

    scrabbleTable += '</table>';
    $("#scrabble_board_game").html(scrabbleTable);
	  scrabbleTable = "";

	  var temp;
		temp = $("#scrabble_board_game").find('td');

	  var length;
		length = temp.length;

	  var row;
		row = 1;

	  var column;
		column = 1;

	  temp.each(function() { // for making the scrabble board tile
		    var char;
				char = row.toString() + "-" + column.toString();
		    $(this).addClass(char);

		    if(column == 15) {
			      row++;
			      column = 0;
		    }

		    column++;
	  });
}

function scrabble_row(number) {
    switch(number) {
        case 1:
			scrabbleTable += '<tr><td class="threeTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheWord tile"></td>';
			break;
		
        case 2:
			scrabbleTable += '<tr><td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			break;
		
        case 3:
			scrabbleTable += '<tr><td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			break;
		
		case 4:
			scrabbleTable += '<tr><td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			break;
		
		case 5:
			scrabbleTable += '<tr><td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			break;
		
		case 6:
			scrabbleTable += '<tr><td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			break;
		
		case 7:
			scrabbleTable += '<tr><td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			break;
		
		case 8:
			scrabbleTable += '<tr><td class="threeTimesTheWord tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="Star tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="twoTimesTheLetter tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="tile"></td>';
			scrabbleTable += '<td class="threeTimesTheWord tile"></td>';
			break;
	}
}
