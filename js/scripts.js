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
    jQuery(".ins").show();
    jQuery(".instruct").hide();
  });
  $(".ins").click(function(){
    jQuery(".instruct").show();
    jQuery(".ins").hide();
  });
  $(".rules").click(function(){
    jQuery(".rul").show();
    jQuery(".rules").hide();
  });
  $(".rul").click(function(){
    jQuery(".rules").show();
    jQuery(".rul").hide();
  });
  $("#game").click(function(){
    var player1=prompt("Enter name of the first player:")
    var player2=prompt("Enter name of the second player:")
    $(".player1").text(player1);
    $(".player2").text(player2);
  });
});

function player(name,roll,total,active) {
  this.name = name;
  this.roll =0;
  this.total=0;
  this.active=active;
}

function next(){
  active ===1 || active ===0;

}
//  $(document).ready(function(){
//
//
//    // new game play button
//    $("#submit").click(function(){
//      init();
//    });
//
//    // roll button
//    $("#roll").click(function(){
//      if(playing){
//        rolls =math.floor(math.random()*6)+1;
//      }
//      if(rolls !==1){
//        roll += rolls;
//        $(".insert" + active).text(roll);
//      }
//      else{
//        next();
//      }
//    })
//
//    // hold button
//    $("#hold").click(function(){
//      if(playing){
//        total[active] +=roll;
//        $(".remove" + active).text(total[active]);
//      }
//    //
//    //   // winner
//    //   if(total[active]>=15){
//    //     $(".winner" + active).text(Winner!);
//    //     playing=false;
//    //   }
//    //   else{
//    //     next();
//    //   }
//    // })
//
// });
// })
