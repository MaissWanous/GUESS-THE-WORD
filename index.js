let basic = ['igkn', 'rdib',"edco","nosop", 'enueq',"itousd", 'avsajirtpc',"ttnraeurs","idecocrlo","glsetaevbe"];
let game =  ["king", "bird","code","spoon","queen","studio","javascript","resturant","crocodile","vegetables"];
let user = [];
let info =$("#text");
let btnAdd=$("#btn");
let i = 0;
let t = 3;
change(i,t);
btnAdd.click(
 play
);

function play() {
    user.push(info.val());
    info.val("");
    if(i==game.length-1) {
      alert("Good job");
      i=0;
      t=3;
      user = [];
      change(i,t);
    }
 
if (user[i].toLowerCase() === game[i].toLowerCase()) {
++i;
var audio = new Audio('mixkit-arcade-bonus-alert-767.wav');
audio.play();
change(i,t);
} else {
$("body").delay(10).fadeOut().fadeIn('slow');
var audio = new Audio('mixkit-game-show-wrong-answer-buzz-950.wav');
audio.play();
user.pop();
t--;
$(".attempts span").text(t);
if (t==0) {
  i=0;
  alert("Game Over");
  user = [];
  t=3;
 change(i,t);
}  
}
}

function change(i,t) {
  $(".word").text(basic[i]);
$(".level span").text(i+1);
$(".attempts span").text(t);
}

// $(document).keypress(function (event) {
//   if (event.keyCode === 13) //enter
// {
// play;           
// }})
    

