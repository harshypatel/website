/* File:  harshypatel.github.io/website/hw7/js/tab_create.js
   Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu
   Copyright (c) 2020 by Harsh Y Patel.  All rights reserved.  
   File created:Nov 22nd, 2020
   updated by Harsh Y Patel Nov 22nd, 2020, 8:00 PM
*/

/* create tab */
function tab_create() {
	
    var tab_number = $("#tabs ul li").length + 1; // tab numbers

    if(tab_number > 12) { // allow up to 12 tabs
		document.getElementById("message").innerHTML = "ERROR: Maximum number of tabs is reached.";
        return false;
	} else {
		document.getElementById("message").innerHTML = "";
	}

    if($("#column_start").valid() && $("#column_end").valid() && $("#row_start").valid() && $("#row_end").valid()) {
        $("#tabs").tabs(); // first tab
		
        $("#tabs ul").append("<li><a href='#tab-" + tab_number + "'>Tab " + tab_number + "</a><span class='ui-icon ui-icon-close' role='presentation'></span></li>");

        $("#tabs").append("<div id='tab-" + tab_number + "'>" + $("#table").html() + "</div>"); // table under the tab

        $("#tabs").tabs("refresh"); // after adding new tab refresh

        $("#tabs").tabs("option", "active", -1); // selected tab becomes active
    } else {
        alert(" Input values are missing ");
        return false;
    }
}