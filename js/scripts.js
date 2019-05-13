function guess(){
  var six = Math.floor(Math.random()*6)+1;
  return six;
}
function Player(){
  this.cumulative = 0;
  this.total = 0;
}
player1 = new Player();
player2 = new Player();

Player.prototype.roll = function(){
  var random = guess();
  if (random === 1){
    this.cumulative = 0;
    alert("You rolled a 1,Next players turn");
  }
  else {
    this.cumulative += random;
  }
  return random;
}
Player.prototype.held = function(){
  this.total += this.cumulative;
  this.cumulative = 0;
  return this.total;
}
Player.prototype.win = function(){
  if(player1.total >= 100){
    alert("player1 has won !!!!!!!!!!!");
  }
  else if (player2.total >= 100) {
    alert("player2 has won !!!!!!!!!!!!")
  }
};

$(document).ready(function(){
  $(".about").click(function(){
    $(".ab").show();
    $(".about").hide();
  });
  $('.ab').click(function(){
    $(".ab").hide();
    $(".about").show();
  });
  $(".instruct").click(function(){
    $(".ins").show();
    $(".instruct").hide();
  });
  $(".ins").click(function(){
    $(".instruct").show();
    $(".ins").hide();
  });
  $(".rules").click(function(){
    $(".rul").show();
    $(".rules").hide();
  });
  $(".rul").click(function(){
    $(".rules").show();
    $(".rul").hide();
  });
  $("#game").click(function(){
    var player1=prompt("Enter name of the first player:")
    $(".player1").text(player1);
    var player2=prompt("Enter name of the second player:")
    $(".player2").text(player2);
  });
  $("#roll1").click(function(){
    $(".roll1").text(player1.roll());
    $(".insert1").text(player1.cumulative);
  });
  $("#roll2").click(function(){
    $(".roll2").text(player2.roll());
    $(".insert2").text(player2.cumulative);
  });
  $("#hold1").click(function(){
    $(".remove1").text(player1.held());
    player1.win();
    alert("Next player's turn!!");
  });
  $("#hold2").click(function(){
    $(".remove2").text(player2.held());
    player2.win();
    alert("Next player's turn!!");
  });
});
