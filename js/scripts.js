$(document).ready(function() {
  $("#button").click(function() {
    $(".rule").toggle()
  });

  $("#start-game-button").click(function(event) {
    event.preventDefault();

    player1 = $("#player1Name").val();
    player2 = $("#player2Name").val();
    $("#playerinfo").hide();
    // display input
    $("#gameStartPlayer1Name").text(player1);
    $("#gameStartPlayer2Name").text(player2);

  });



});