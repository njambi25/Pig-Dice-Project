$(document).ready(function() {

  $("#start-game-button").click(function() {
    $("#player-names-container").hide();
    var name1 = $("input#player1Name").val();
    var name2 = $("input#player2Name").val();

    //user game object
    game.setPlayer1Name(name1);
    game.setPlayer2Name(name2);

  });
});