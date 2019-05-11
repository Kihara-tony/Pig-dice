function player(name,roll,total,active) {
  this.name = name;
  this.roll =0;
  this.total=0;
  this.active=active;
}
var game =function(){
  var name=prompt("Enter name of the first player:");
  var player2=prompt("Enter name of the second player:");
}
 $(document).ready(function(){
   $(".player1").text(player1);
   $(".player2").text(player2);
   // new game play button
   $("#submit").click(function(){
     init()
   })
  $(".about img").click(function(){
    $(".about").slideToggle();
    $(".ab").slideToggle();
  });
  $(".instruct").click(function(){
    $(".instruct").slideToggle();
    $(".ins").slideToggle();
  });
  $(".rules").click(function(){
    $(".rules").slideToggle();
    $(".rul").slideToggle();
  })
});
