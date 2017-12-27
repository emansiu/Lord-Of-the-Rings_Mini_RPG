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

//Global variable for total number of characters
var charNumTotal = Object.keys(characters).length;

//looping through character object to create all possible players
for(var i = 0; i < charNumTotal; i++) {

    const playerOption = $("<div>");
    let currentCharacter = Object.keys(characters)[i];
    let hp = characters[currentCharacter].hp;

    playerOption.addClass("character hero");
    playerOption.attr("zone", "choice-area");
    playerOption.attr("who", currentCharacter);
    playerOption.append("<p>"+ currentCharacter  +"</p>");
    playerOption.append("<img src='assets/images/img_icons/"+ currentCharacter  +".jpg'>");
    playerOption.append("<p>hp: "+ hp  +"</p>");
    
    $("#choice-area").append(playerOption);
}


// ------- CODE FOR CLICKING AND MOVING --------------

    $(".character").on("click", function(){
        var moveCharacters = [];
        if ($(".character").attr("zone") === "choice-area") {
            // whoever you choose moves into player zone
            $(this).attr("zone", "player");
            // everyone else moves into staging zone
            $('.character').not(this).each(function(){
                $(this).attr("zone", "staging-zone");
                $(this).appendTo($("#staging-zone"));
                $(this).removeClass("hero").addClass("staging");

                console.log($(this).attr("zone"));
            });
        }
        else if ($(".character").attr("zone") === "staging-zone") {
                // whoever you choose moves into enemy zone
                $(this).attr("zone", "enemy");
                $(this).appendTo($("#current-enemy"));
                $(this).removeClass("staging").addClass("enemy");

                console.log($(this).attr("zone"));
        }
    });



});     //<-----do everything when the document is ready
