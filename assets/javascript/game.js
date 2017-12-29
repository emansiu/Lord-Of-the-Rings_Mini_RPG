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

//FUNCTION TO CREATE CHARACTERS BASED ON CHARACTERS OBJECT
function initialize(){
    for(var i = 0; i < charNumTotal; i++) {

        const playerOption = $("<div>");
        let currentCharacter = Object.keys(characters)[i];
        let hp = characters[currentCharacter].hp;

        playerOption.addClass("character hero");
        playerOption.attr("zone", "choice-area");
        playerOption.attr("who", currentCharacter);
        playerOption.attr("hp", hp);
        playerOption.append("<h3>"+ currentCharacter  +"</h3>");
        playerOption.append("<img src='assets/images/img_icons/"+ currentCharacter  +".jpg'>");
        playerOption.append("<p id='hp'>hp: "+ playerOption.attr("hp") +"</p>");

        
        $("#choice-area").append(playerOption);
    }




// ------- CODE FOR CLICKING AND MOVING --------------

$(".character").on("click", function(){
    
    if ($(this).attr("zone") === "choice-area") {
        // whoever you choose moves into player zone
            $(this).attr("zone", "player");
        // everyone else moves into staging zone
            $('.character').not(this).each(function(){
                $(this).attr("zone", "staging-zone");
                $(this).appendTo($("#staging-zone"));
                $(this).removeClass("hero").addClass("staging");
            });
            
    }
    else if ($(this).attr("zone") === "staging-zone" && $("#current-enemy").is(':empty')) {
        // whoever you choose moves into enemy zone
        $(this).attr("zone", "enemy");
        $(this).appendTo($("#current-enemy"));
        $(this).removeClass("staging").addClass("enemy");


        //--- CREATING BUTTON ONCE AN ENEMY IS CHOSEN---
        var attackBtn = $("<div>");
        attackBtn.addClass("button");
        attackBtn.html("<h3>Fight!</h3>");
        $("#current-enemy").append(attackBtn);

        // ---setting up variables needed to do the math---
        var currentPlayer = $("div[zone=player]").attr("who");
        var currentPlayerDisplay = $("div[zone=player]").attr("hp");
        var currentEnemy = $("div[zone=enemy]").attr("who");
        var currentEnemyDisplay = $("div[zone=enemy]").attr("hp");
        var playerHP = characters[currentPlayer].hp;
        var playerAP = characters[currentPlayer].ap;
        var enemyHP = characters[currentEnemy].hp;
        var enemyCA = characters[currentEnemy].ca;
        var compounder = characters[currentPlayer].ap;
        
    }

    //--- creating function for new attack button
    $(".button").on("click", function() {
    
        playerHP = playerHP - enemyCA;
        enemyHP = enemyHP - playerAP;
        console.log(currentPlayer + " " + playerHP + " vs " + currentEnemy + " " + enemyHP);
        $("div[zone=player] > p:last-child").text("hp: "+ playerHP);
        $("div[zone=enemy] > p:last-child").text("hp: " + enemyHP);

        //------ level up AP power--------
        playerAP = playerAP + compounder;
    
    });

    

    
});
}
initialize();
// ^^^^-------ENDING FUNCTIONALITY FOR CLICKING ON CHARACTER CARDS -----^^^^^


//--- this reset the game to start over
$(".reset").on("click", function() {
    $("#choice-area").empty();
    $("#staging-zone").empty();
    $("#current-enemy").empty();
    initialize();
});




});     //<-----do everything when the document is ready
