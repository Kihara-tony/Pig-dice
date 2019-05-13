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
  function player(name,roll,total,active,playing) {
    this.roll =0;
    this.total=0;
    this.active=active;
    playing = true;
  }
  function user() {
    if (player1.active === true && player2.active === false) {
        $('.one').children().prop('disabled', false);
        $('.one').removeClass('disableGamingArea');
        $('.two').children().prop('disabled', true);
        $('.two').addClass('disableGamingArea');
    } else {
        $('.one').children().prop('disabled', true);
        $('.one').addClass('disableGamingArea');
        $('.two').children().prop('disabled', false);
        $('.two').removeClass('disableGamingArea');
    }
};

  // roll button
  function guess(){
    return Math.floor((Math.random()*6)+1);
    user();
  }
  $("#roll").click(function(){
    $(".insert").text(guess());
  });
  // function total(){
  //   return total += guess;
  // }
  // $("#hold").click(function(){
  //   $(".remove").text(total());
});
