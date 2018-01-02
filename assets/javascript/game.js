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

// defining undeclared variables for later
var playerHP;
var playerAP;
var enemyHP;
var enemyCA;
var compounder;
var currentEnemy;
var currentPlayer
var attacking = false;

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
        // whoever you choose moves into player zone and assigning their attributes from the character
            $(this).attr("zone", "player");
            currentPlayer = $("div[zone=player]").attr("who");
            playerHP = characters[currentPlayer].hp;
            playerAP = characters[currentPlayer].ap;
            compounder = characters[currentPlayer].ap;
        // everyone else moves into staging zone
            $('.character').not(this).each(function(){
                $(this).attr("zone", "staging-zone");
                $(this).appendTo($("#staging-zone"));
                $(this).removeClass("hero").addClass("staging");
            });

            // display instructions for what to do next
            $("div[id=info-area] > h1").text("Now choose who you are going to fight. But choose wisely some characters counter harder than others. Luckily you get stronger with every attack!");
            
    }
    else if ($(this).attr("zone") === "staging-zone" && $("#current-enemy").is(':empty')) {
        // whoever you choose moves into enemy zone
        $(this).attr("zone", "enemy");
        $(this).appendTo($("#current-enemy"));
        $(this).removeClass("staging").addClass("enemy");
        attacking = true;

        // enemy variables can stay in this scope since they change after every death
        currentEnemy = $("div[zone=enemy]").attr("who");
        enemyHP = characters[currentEnemy].hp;
        enemyCA = characters[currentEnemy].ca;


        //--- CREATING BUTTON ONCE AN ENEMY IS CHOSEN "AND" BUTTON DOESN'T EXIST ALREADY---
        if ($(".attack").length === 0 ) {
            var attackBtn = $("<div>");
            attackBtn.addClass("attack");
            attackBtn.html("<h3>Fight!</h3>");
            $("div[id=info-area] > h1").text("Click the 'Fight!' button to inflict your true feelings");            
            $("#info-area").append(attackBtn);
        }
        
    }

    //--- creating function for new attack button
    $(".attack").on("click", function() {
        if (attacking === true) {
            playerHP = playerHP - enemyCA;
            enemyHP = enemyHP - playerAP;
            
            $("div[zone=player] > p:last-child").text("hp: "+ playerHP);
            $("div[zone=enemy] > p:last-child").text("hp: " + enemyHP);

                // remove enemy if their HP goes to zero or below
                if (enemyHP <= 0) {
                    $("#current-enemy").empty();
                    $(".attack").remove();
                    attacking = false;
                    $("div[id=info-area] > h1").text("who's next?");                    
                }
                if (playerHP <= 0) {
                    $(".attack").remove();
                    $("div[id=info-area] > h1").text("You got dead. Hit reset to start over"); 
                    attacking = false;
                }
                if ($("#current-enemy").is(':empty') && $("#staging-zone").is(':empty')) {
                    $("div[id=info-area] > h1").text("You feel good about that? Good. Do it again - hit reset"); 
                }

            //------ level up AP power--------
            playerAP = playerAP + compounder;
        }
    
    });


    

    
});
$("div[id=info-area] > h1").text("Choose your hero to fight with.");
}
initialize();
// ^^^^-------ENDING FUNCTIONALITY FOR CLICKING ON CHARACTER CARDS -----^^^^^

// RESET FUNCTIONS AND CLICKS
function resetGame(){
    $("#choice-area").empty();
    $("#staging-zone").empty();
    $("#current-enemy").empty();
    $(".attack").remove();
    initialize();
     
}

//--- this button/class resets the game to start over
$(".reset").on("click", function() {
    resetGame();
});




});     //<-----do everything when the document is ready
