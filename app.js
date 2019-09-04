var randomnum;
var losts = 0;
var wins = 0;
var prev = 0;


var gameReset = function(){

};

var gameStart = function(){
        $(".crystals").empty();
        random_result = Math.floor(Math.random() * 69) + 30;
        console.log(random_result);
        $("#result").html('Random Result: ');
        for (var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);
        
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', 
            "data-random": random});
        crystal.html(random);
        $(".crystals").append(crystal);
        console.log(crystal);
        $(".crystal").append(crystal);
        };

    $("#prev").html("Total score:", prev);
};
gameStart();




$(document).on('click', ".crystal", function(){   
    var num = parseInt($(this).attr('data-random'));

    prev+= num;
    console.log(prev);

    $("#prev").html("Total score:"+ prev);

    if (prev > random_result){
        console.log("You lost the game!");
        losts--;
        $("#loss").html("total losses:" + losts);
        prev = 0;
        gameStart();
    } else if (prev === random_result){
        wins++;
        $("#win").html( "total wins:" + wins);
        prev = 0;
        gameStart();
    } 
});



