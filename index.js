var main =[];
var player = [];
var colors = ["blue","green","yellow","red"];
resultdecider();


$(document).keypress(function()
{
    var v = main.length ;
    $("#level-title").text("Level " + v);
   
    randomizer()
})

$(".btn").on("click",clickedfn)

function clickedfn() {
    var clickd = clickd+1;
    var m = this.id;
    player.push(m);
    $("." + m).addClass("pressed");
    setTimeout(function(){
        $("." + m).removeClass("pressed");
    },100);
    var music = new Audio("sounds/" + m + ".mp3");
    music.play();
    

}

function randomizer() {
    var rand = Math.floor(Math.random()*4);
    var picked = colors[rand];
    main.push(picked);
    play(picked);    
}

function play(picked) {
    $("." + picked).fadeOut(250).fadeIn(250);
    var sound = new Audio("sounds/" + picked + ".mp3");
    sound.play();
    
}


//logic

function resultdecider(clickd) {
   if(clickd > main.length)
   {
    gameover();
   }
   else if (main[clickd]!=player[clickd])
   {
    gameover();
   }
    
    
   }
    


function gameover() {
    // main = [];
    // player = [];
    $("body").addClass("game-over");
    
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

    $("#level-title").text("game over");

    
}






