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


$("#current-enemy").on("click", function(){
    $("#current-enemy").text(characters.sauron.ap);
});

});
