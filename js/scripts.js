function player(name,roll,total,active,playing) {
  this.name = name;
  this.roll =0;
  this.total=0;
  this.active=active;
  playing = true;
}
$(document).ready(function(){
  $(".about").click(function(){
    $(".ab").show();
    $(".about").hide();
  });
  $('.ab').click(function(){
    $(".ab").hide();
    $(".about").show();
  })
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
  var active = function(){
    if(player1.active ===true && player2.active ===false){
      $(".one").prop("disabled",false);
      $(".two").prop("disabled",true);
    }
    else {
      $(".one").prop("disabled",true);
      $(".two").prop("disabled",false);
    };
  };


  // roll button
 player.prototype.dice =funtion(){
   var guess =Math.floor(Math.random() * 6);
   this.roll = guess;
   $("insert").text(roll);
   active();
   if(guess=== 1){
     this.total = 0;
     this.roll = 1;
     if (this.active === player1.active) {
       player1.active = false;
       player2.active = true;
       $(".one").children().prop("disabled",true);
       $(".one").addClass("disablePlaying");
       $(".two").children().prop("disabled",false);
       $(".two").removeClass("disablePlaying");
     }
     else if (this.active === player2.active) {
       player2.active =false;
       player1.active = true;
       $(".two").children().prop("disabled",true);
       $(".two").addClass("disablePlaying");
       $(".one").children().prop("disabled",false);
       $(".one").removeClass("disableplaying");
     }
     else {
       this.total += guess;
     }
   };     
 };
  // hold button
  $("#hold").click(function(){
    if(playing){
      total[active] +=roll;
      $(".remove" + active).text(total[active]);
    }
    // winner
    if(total[active]>=15){
      $(".winner" + active).text("Winner!");
      playing=false;
    }
    else{
      next();
    }
  });
});
