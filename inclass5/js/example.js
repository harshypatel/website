var my_list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
var new_item_last = document.createElement('li');                    // first create an element
var new_text_last = document.createTextNode('cream');                // now a text node called "cream"
new_item_last.appendChild(new_text_last);                            // Add node to li element
my_list.appendChild(new_item_last);                                  // Add element after the last child

// ADD NEW ITEM START OF LIST
var new_item_first = document.createElement('li');                   // first create an element
var new_text_first = document.createTextNode('kale');                // now a text node called "kale"
new_item_first.appendChild(new_text_first);                          // Add node to li element
my_list.insertBefore(new_item_first, my_list.firstChild);            // Add element before the first child


var total_items = document.querySelectorAll('li');                   // get total list of the items

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var kool,jax = 0;
for (kool = 0; kool < total_items.length; kool++) {                //change it from hot to cool
   if (total_items[kool].className!='hot') {
       total_items[kool].className = 'cool';
       jax++;
   }
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                         // header element
var heading_text = heading.firstChild.nodeValue;                    // header(h2) text
var total_li_elements = jax;                                        // No. of <li> elements
var new_heading = heading_text + '<span>' + total_li_elements + '</span>';
heading.innerHTML = new_heading;                                    // add the total list
