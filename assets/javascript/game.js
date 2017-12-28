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
    playerOption.attr("hp", hp);
    playerOption.append("<p>"+ currentCharacter  +"</p>");
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
        attackBtn.text("I'm a button!");
        $("#current-enemy").append(attackBtn);

        // ---setting up variables needed to do the math---
        var currentPlayer = $("div[zone=player]").attr("who");
        var currentPlayerDisplay = $("div[zone=player]").attr("hp");
        var currentEnemy = $("div[zone=enemy]").attr("who");
        var currentEnemyDisplay = $("div[zone=enemy]").attr("hp");
        var playerHP = characters[currentPlayer].hp ;
        var playerAP = characters[currentPlayer].ap ;
        var enemyHP = characters[currentEnemy].hp;
        var enemyCA = characters[currentEnemy].ca;
        
    }

    

    //--- creating function for new attack button
    $(".button").on("click", function() {
        
        
        playerHP = playerHP - enemyCA;
        enemyHP = enemyHP - playerAP;
        console.log(currentPlayer);
        console.log("player hp: "+playerHP);
        console.log("player ap: "+playerAP);
        console.log(currentEnemy);
        console.log("enemy hp: "+enemyHP);
        console.log("enemy ca: "+enemyCA);
        console.log(currentPlayerDisplay);
        currentPlayerDisplay = "hp: " + playerHP;
        
        
    });
});







});     //<-----do everything when the document is ready
