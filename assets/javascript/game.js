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




// -------FUNCTIONING CODE FOR CLICKING AND MOVING --------------
// console.log(Object.keys(characters).length);
// console.log(Object.keys(characters));
// console.log($("#character-name").parent().attr('id'));
// $("#character-name").text($("#character-name").parent().attr('id'));

// //click function to move characters to different zones
//     $(".character").on("click", function(){
//         if ($(".character").attr("zone") === "choice-area") {
//             if($("#character-name").parent().attr('id') !== "gandalf") {
//                 $(".character").appendTo($("#staging-zone")).show('slow');
//                 $(".character").attr("zone","staging-zone");
//             }
//         }    
//         else if ($(".character").attr("zone") === "staging-zone") {
//             $("#current-enemy").append($(this));
//             $(this).attr("zone","current-enemy");
//         }
//     });



});     //<-----do everything when the document is ready
