$(document).ready(function() {

// attack power = ap
// counter attack = ca
// health points = hp

var characters = {
    gandalf: {
        hp: 150,
        ca:20,
        ap:10
    },
    legolas: {
        hp: 120,
        ca:20,
        ap:8
    },
    frodo: {
        hp: 100,
        ca:5,
        ap:11
    },
    sauron: {
        hp: 180,
        ca:20,
        ap:15
    }
    
}

var zone = "";

//  create a character to use
function createCharacter(name) {
    const gandalf = $("<div>");
    gandalf.addClass("character");
    gandalf.attr("zone","choice-area");
    $("#choice-area").append(gandalf);
}

createCharacter();

// $(".character").on("click", function(){
//     $("#current-enemy").text($(this).attr("zone"));
// });


//vvvv--------- TRYING TO GET VALUE OF ATTRIBUTE TO WORK RIGHT NOW ------- vvvvvvvvvv


    $(".character").on("click", function(){
        if ($(".character").attr("zone") === "choice-area") {
            $("#staging-zone").append($(this));
            $(this).attr("zone","staging-zone");
        }    
    });

    $(".character").on("click", function(){
        if ($(".character").attr("zone") === "staging-zone") {
            $("#current-enemy").append($(this));
            $(this).attr("zone","current-enemy");
        }
    });






});     //<-----do everything when the document is ready
