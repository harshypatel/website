/*
	Name: Harsh Y Patel 
	File: harshypatel.github.io/website/hw8/js/hw8_start.js 
	Harsh Y Patel, UMass Lowell Computer Science, harsh_patel4@student.uml.edu  
	Copyright (c) 2020 by Harsh Patel.  All rights reserved.   
	File created:Dec 16th, 2020                          
	updated by Harsh Y Patel Dec 16th, 2020, 8:00 PM 
*/

var word_score = 0; //  word_score with a value of 0
var word_length = 0; //  word_length with a value of 0
var letter_place_on_rack = []; // letter_place_on_rack that has value for letters
var scrabble_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

$().ready(function() { // starts here
    create_scrabble_board(); // creating scrabble board
    create_letters(); // creating letters
    use_drag_and_drop(); // drag and drop is called

    $("#reset_game").click(function() {
        reset_game();
        use_drag_and_drop();
    });

    $("#new_letters").click(function() {
        new_letters();
        use_drag_and_drop();
    });

    $("#return_current_letters").click(function() {
        return_current_letters();
        use_drag_and_drop();
    });

    $("#clear_board").click(function() {
        clear_board();
        use_drag_and_drop();
    });

    $("#submit").click(function() {
        submit_u_word();
        use_drag_and_drop();
    });
});

//reates letters
function create_letters() {
    var letters;
    letters = "";
    letters += '<table id="rack_of_word"><tr>';

    letter_place_on_rack = [];

    for(var x = 0; x < 7; x++) {
        var random_index;
        random_index = Math.floor(Math.random() * scrabble_letters.length); // gets random index

        while(ScrabbleTiles[scrabble_letters[random_index]].number_remaining === 0) {
            random_index = Math.floor(Math.random() * scrabble_letters.length);
        }

        var letter_link = "../images/Scrabble_Tiles/Scrabble_Tile_" + scrabble_letters[random_index] + ".jpg"; // access to letter location
        letters += "<td><img id='tile_drag_" + x + "' class='board_piece_" + scrabble_letters[random_index] + "' src='" + letter_link + "' /></img></td>";

        ScrabbleTiles[scrabble_letters[random_index]].number_remaining = ScrabbleTiles[scrabble_letters[random_index]].number_remaining - 1; // updates the remaining number
        letter_place_on_rack.push({"Letter": scrabble_letters[random_index], "id" : "tile_drag_" + x, "position": x, "value" : ScrabbleTiles[scrabble_letters[random_index]].value, "Link" : "<img id='tile_drag_" + x + "' class='board_piece_" + scrabble_letters[random_index] + "' src='" + letter_link + "' /></img>"});
    }

    letters += '</tr></table>';
    $("#score").html(word_score); // show score
    $("#letter_rack").html(letters); // show letters on rack
}

function use_drag_and_drop() {
    do_drag();
    do_drop();
}

// function responsible for doing drag
function do_drag(string) {
    for(var x = 0; x < 7; x++) {
        $("#tile_drag_" + x).draggable( { // source: https://downing.io/GUI/js/scrabble/draggable.js
            revert: "invalid",
            start: function(ev, ui) {
                startPos = ui.helper.position();
            },
            stop: function() { 
                $(this).draggable('option', 'revert', 'invalid');
            }
        });
    }
}

// doing drop
function do_drop() {
    $("#scrabble_board_game td").droppable( { // source: http://jsfiddle.net/awsFU/
        accept: ".ui-draggable", // accepts ui-draggable as valid
        tolerance: 'intersect', // drag overlaps drop
        revert: "invalid",
        drop: function(event, ui) {
            if($(this).attr('id') != undefined) {
                ui.draggable.draggable('option', 'revert', true);
                return;
            }
            else {
                $(this)[0].id = $(this)[0].id + " dropped";
                ui.draggable[0].style.cssText = "";
                var image;
                image = ui.draggable[0].outerHTML;
                var stringID;
                stringID = String($(this)[0].id);
                var correct_w;
                correct_w = stringID.match(/(.+)(dropped)/);
                if(!is_space_letter(ui.draggable)) {
                    var otherTD;
                    otherTD = '<td class="' + $(this)[0].className + '" id="' + correct_w[2] + '">' + image + '</td>';
                    $(this)[0].outerHTML = otherTD;
                }
                else { 
                    var otherImage;
                    otherImage = swap_letter(ui.draggable);
                    var otherTD;
                    otherTD = '<td class="' + $(this)[0].className + '" id="' + correct_w[2] + '">' + otherImage + '</td>';
                    $(this)[0].outerHTML = otherTD;
                }

                ui.draggable[0].outerHTML = "";
                use_drag_and_drop()
                remove_ID_after_drag();
            }
        },
        out: function(event, ui) {
        }
    });
}

//scrabble board game
function reset_game() {
    var scrabble_letters;
    scrabble_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

    for(var x = 0; x < scrabble_letters.length; x++) {
        ScrabbleTiles[scrabble_letters[x]].number_remaining = ScrabbleTiles[scrabble_letters[x]].original_distribution;
    }

    word_score = 0; // reset
    word_length = 0; // reset
    create_scrabble_board(); // new_game
    create_letters(); // new_letters
    $(".error_message").html("");
}

// reset new letters
function new_letters() {
    var temp = $("#scrabble_board_game").find('td');
    temp.each(function() {
        if($(this)[0].id == "dropped") {
            $(this)[0].innerHTML = "";
            remove_ID_after_drag();
        }
    });

    for(var x = 0; x < letter_place_on_rack.length; x++) {
        var letter;
        letter = letter_place_on_rack[x].Letter;
        ScrabbleTiles[letter].number_remaining += 1;
    }

    letter_place_on_rack = [];
    create_letters(); // reset
    use_drag_and_drop(); // reset
}

// start new rack
function return_current_letters() {
    var temp;
    temp = $("#scrabble_board_game").find('td'); // finds all td

    temp.each(function() {
        if(String($(this)[0].id) === "dropped") {
            $(this).removeAttr('id');
            $(this)[0].firstChild.outerHTML = "";
        }
    });

    update_letter(); // update letters
}

// clear the board
function clear_board() {
    create_scrabble_board(); //  board game
    word_length = 0; // reset to zero
}

// submit your word
function submit_u_word() {
    var Word;
    Word = [];
    Word = get_the_word_from_the_board();

    if(word_length == Word.length) {
        var error;
        error = "ERROR: No Letter Or No Already Placed Word!";
        $(".error_message").html(error);
    }
    else {
        var scrabble_score;
        scrabble_score = get_game_score(Word); // receives score

        current_word_on_the_board(Word); // word valid
        receiveNewLetter();
        word_score += scrabble_score; // update the score
        word_length = Word.length;
        $('#score').html(word_score);
        Word = [];
    }
}

// black letter
function is_space_letter($Space) {
    var get_id;
    get_id = $Space[0].className;

    var current_letter;
    current_letter = get_id.match(/(board_piece_)(.)(.+)/);

    if(current_letter[2] != "_") {
        return false;
    }
    else { 
        return true;
    }
}

// swap letter
function swap_letter($spaceLetter) {
    var letter;
    letter = prompt("Please enter a letter from A-to-Z to replace the space [_] letter", "S"); // Source; https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt

    while(isAlphabet(letter) || String(letter).length > 1) {
        letter = prompt("Please enter a letter from A-to-Z to replace the space [_] letter", "S");
    }

    letter = letter.toUpperCase(); // changes the letter to upper case

    var text;
    text = $spaceLetter[0].outerHTML;

    var regularExpression;
    regularExpression = text.match(/(.+)(board_piece_)(.)(.+)(Scrabble_Letter_)(.)(.+)/);

    text = regularExpression[1] + regularExpression[2] + letter + regularExpression[4] + regularExpression[5] + letter + regularExpression[7]; // changes to a new letter

    return text;
}

// removes id
function remove_ID_after_drag() {
    var temp;
    temp = $("#scrabble_board_game").find('td'); // finds all td

    temp.each(function() { 
        if($(this)[0].childElementCount == 0 && $(this)[0].id != "") {
            $(this).removeAttr('id');
        }
    });
}

 // is alphabet
function isAlphabet(letter) {
    var temp;
    temp = String(letter);

    var resultingLetter;
    resultingLetter = temp.match(/([A-Za-z])+$/); // Source: https://www.w3resource.com/javascript/form/all-letters-field.php

    if(resultingLetter != null) { 
        return false;
    }
    else {
        return true;
    }
}

// get letter
function receiveLetter($temp) {
    var imageID;
    imageID = $temp[0].firstChild.id;

    for(var x = 0; x < letter_place_on_rack.length; x++) { 
        if(letter_place_on_rack[x].id == imageID) {
            return letter_place_on_rack[x];
        }
    }
}

// update the rack with new letter
function receiveNewLetter() {
    var MissingLetters;
    MissingLetters = 7 - letter_place_on_rack.length;

    var temp;
    temp = [0, 0, 0, 0, 0 , 0, 0];

    var y;
    y = 0;

    for(var x = 0; x < 7; x++) {
        if(y < letter_place_on_rack.length) {
            if(letter_place_on_rack[y].position == x) {
                temp[x] = letter_place_on_rack[y];
                y++;
            }
        }
    }

    for(var x = 0; x < temp.length; x++) {
        if(temp[x] == 0) {
            var random_index;
            random_index = Math.floor(Math.random() * scrabble_letters.length); // source: https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
            while(ScrabbleTiles[scrabble_letters[random_index]].number_remaining === 0) {
                random_index = Math.floor(Math.random() * scrabble_letters.length);
            }

            ScrabbleTiles[scrabble_letters[random_index]].number_remaining = ScrabbleTiles[scrabble_letters[random_index]].number_remaining - 1; // changes the left value in ScrabbleTiles

            var letter_link;
            letter_link = "../images/Scrabble_Tiles/Scrabble_Tile_" + scrabble_letters[random_index] + ".jpg"; // access to letter location

            temp[x] = ({"Letter": scrabble_letters[random_index], "id" : "tile_drag_" + x, "position": x, "value" : ScrabbleTiles[scrabble_letters[random_index]].value, "Link" : "<img id='tile_drag_" + x + "' class='board_piece_" + scrabble_letters[random_index] + "' src='" + letter_link + "' /></img>"});
        }
    }

    letter_place_on_rack = [];
    letter_place_on_rack = temp;
    update_letter();
}

// updates tiles
function update_letter() {
    var letters;
    letters = "";
    letters += '<table id="rack_of_word"><tr>';

    var kool = 0;

    temp = $("#letter_rack").find('td'); // finds all td

    for(var x = 0; x < temp.length; x++) { 
        if(x >= letter_place_on_rack.length) { 
            letters += "<td></td>";
        }
        else { // otherwise add to tiles
            letters += "<td>" + letter_place_on_rack[kool].Link + "</td>";
            kool++;
        }
    }

    letters += '</tr></table>';
    $("#letter_rack").html(letters);
}

// revmoves letter from rack
function remove_letters_of_rack(x) {
    var temp;
    temp = [];

    for(var y = 0; y < letter_place_on_rack.length; y++) {
        if(y != x) {
            temp.push(letter_place_on_rack[y]);
        }
    }

    letter_place_on_rack = [];
    letter_place_on_rack = temp;
}

// word is placed on the board
function current_word_on_the_board($word) {
    var  temp;
    temp = $("#scrabble_board_game").find('td'); // finds all td

    temp.each(function() { // goes through each td
        if($(this)[0].id == "dropped") {
            var tempID;
            tempID = $(this)[0].firstChild.className;

            var current_letter;
            current_letter = tempID.match(/(board_piece_)(.)(.+)/);

            var random_index;
            random_index = String($(this)[0].firstChild.id).replace("tile_drag_", "");

            remove_letters_of_rack(random_index);
            $(this)[0].firstChild.id = "letterImageIsValid"; 
            $(this)[0].firstChild.className = current_letter[2];
            $(this)[0].id = "valid"; // makes id to valid
        }
    });
}

// function that receives word from the scrabble board
function get_the_word_from_the_board() {
    var Word;
    Word = [];

    var temp;
    temp = $("#scrabble_board_game").find('td');

    temp.each(function() { 
        if($(this)[0].childElementCount > 0 && ($(this)[0].id == "dropped" || $(this)[0].id == "valid")) {
            if($(this)[0].id != "dropped") {
                var string;
                string = String($(this).attr('class'));

                var temp2;
                temp2 = string.match(/([a-zA-Z]+)(.+)(\d+)(.+)/);
                $temp = $(this);

                Word.push( { // pushes eveything
                    "Letter" : $(this)[0].firstChild.className,
                    "Value" : ScrabbleTiles[$(this)[0].firstChild.className].value,
                    "position" : temp2[3],
                    "times" : temp2[1],
                    "score" : 0
                });
            }
            else {
                var string;
                string = String($(this).attr('class'));

                var temp2;
                temp2 = string.match(/([a-zA-Z]+)(.+)(\d+)(.+)/);
                temp = $(this);

                var letter;
                letter = receiveLetter(temp);

                if(letter.Letter == "_") { // handles if there is a space letter
                    var text;
                    text = $(this)[0].firstChild.className;

                    var regularExpression;
                    regularExpression = text.match(/(board_piece_)(.)(.+)/);
                    letter.Letter = regularExpression[2];
                    letter.Value = ScrabbleTiles[regularExpression[2]].value;
                }

                Word.push( {
                    "Letter" : letter.Letter,
                    "Value" : letter.value,
                    "position" : temp2[3],
                    "times" : temp2[1],
                    "score" : 0
                });
            }
        }
    });

    return Word;
}

// get game score
function get_game_score($word) {
    var game_score_total;
    game_score_total = 0;

    for(var x = 0; x < $word.length; x++) {
        if(String($word[x].times) === "threeTimesTheLetter") {
            $word[x].score = parseInt($word[x].Value) * 3;
        }
        else if(String($word[x].times) === "twoTimesTheLetter") {
            $word[x].score = parseInt($word[x].Value) * 2;
        }
        else { 
            $word[x].score = parseInt($word[x].Value)
        }

        game_score_total += $word[x].score; // add up the total score
    }

    for(var x = 0; x < $word.length; x++) {
        if(String($word[x].times) === "threeTimesTheWord") { 
            game_score_total = parseInt(game_score_total) * 3;
        }
        else if(String($word[x].times) === "twoTimesTheWord") {
            game_score_total = parseInt(game_score_total) * 2;
        }
        else {
            game_score_total = parseInt(game_score_total);
        }
    }

    return game_score_total;
}
