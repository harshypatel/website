/* File:  harshypatel.github.io/website/hw7/js/table_validation.js
   Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu
   Copyright (c) 2020 by Harsh Y Patel.  All rights reserved.  
   File created:Nov 22nd, 2020
   updated by Harsh Y Patel Nov 22nd, 2020, 8:00 PM
 */

function table_valid(){ //table_valid == createtable
	
	validate_input();
	
	if($("#column_start").valid() && $("#column_end").valid() && $("#row_start").valid() && $("#row_end").valid()) {
        Table_Create();
    };
}

function validate_input(){
	$("#table_form").validate({
        rules:{ //  SET THE RULES FOR TEXT  //
			column_start:{
				required: true,
				number: true,
				min: -20,
				max: 20
			},		
			column_end:{
				required: true,
				number: true,
				min: -20,
				max: 20
			},
			row_start:{
				required: true,
				number: true,
				min: -20,
				max: 20
			},
			row_end:{
				required: true,
				number: true,
				min: -20,
				max: 20
			}
		},
		messages:{   // PRINT THE ERROR MESSAGE  //
			column_start:{
				required: " A value is required.",
				number: " Please enter a positive integer ",
				min: " Value must be greater than -20 ",
				max: " Value must be less than 20 "
			},
			column_end:{
				required: " A value is required.",
				number: " Please enter a positive integer ",
				min: " Value must be greater than -20 ",
				max: " Value must be less than 20 "
			},
			row_start:{
				required: " A value is required.",
				number: " Please enter a positive integer ",
				min: " Value must be greater than -20 ",
				max: " Value must be less than 20 "
			},
			row_end:{
				required: " A value is required.",
				number: " Please enter a positive integer ",
				min: " Value must be greater than -20 ",
				max: " Value must be less than 20 "
			}
        }
    });
}