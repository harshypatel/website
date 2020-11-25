/* File:  harshypatel.github.io/website/hw7/js/initial.js
   Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu
   Copyright (c) 2020 by Harsh Y Patel.  All rights reserved.  
   File created:Nov 22nd, 2020
   updated by Harsh Y Patel Nov 22nd, 2020, 8:00 PM
*/

$(function() {
	
	table_valid(); //first create a table through table_valid
	
	input_slider(); //input slider
	
    $(".button").click(function() { // when submit is clicked do following
        
        tab_create(); //create tab
        
        var delete_button = '<button type="button">Delete All</button>'; //button for tabs
        document.getElementById("remove_tabs").innerHTML = delete_button;
    });

    $("#tabs").on("click", "span.ui-icon-close", function() { //close current tab
	
        var panel_id = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panel_id).remove();
        $("#tabs").tabs("refresh");
        
        if($("#tabs ul li").length == 0) { //remove tab one by one
            $(".ui-tabs").tabs("destroy");
            document.getElementById("remove_tabs").innerHTML = "";
        }
    });

    $("#remove_tabs").click(function() { //removes all tabs
        document.getElementById("tabs").innerHTML = "<ul></ul>";
        $(".ui-tabs").tabs("destroy");
        document.getElementById("remove_tabs").innerHTML = "";
    });
});

function input_slider() {
	
    $("#xBegin").slider({
        min: -20,
        max: 20,
        slide: function(event, ui) { // update form value when slider change
            $("#column_start").val(ui.value);
            table_valid();
        }
    });
    $("#column_start").on("keyup", function() { // update slider value when form change
        $("#xBegin").slider("value", this.value);
        table_valid();
    });

    $("#xEnd").slider({
        min: -20,
        max: 20,
        slide: function(event, ui) {
            $("#column_end").val(ui.value);
            table_valid();
        }
    });
    $("#column_end").on("keyup", function() {
        $("#xEnd").slider("value", this.value);
        table_valid();
    });

    $("#yBegin").slider({
        min: -20,
        max: 20,
        slide: function(event, ui) {
            $("#row_start").val(ui.value);
            table_valid();
        }
    });
    $("#row_start").on("keyup", function() {
        $("#yBegin").slider("value", this.value);
        table_valid();
    });

    $("#yEnd").slider({
        min: -20,
        max: 20,
        slide: function(event, ui) {
            $("#row_end").val(ui.value);
            table_valid();
        }
    });
    $("#row_end").on("keyup", function() {
        $("#yEnd").slider("value", this.value);
        table_valid();
    });
}