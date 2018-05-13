var game = {
  //players property
  player1Name: null,
  player2Name: null,

  //set player names
  setPlayer1Name: function(name) {
    this.player1Name = name;
  },

  setPlayer2Name: function(name) {
    this.player2Name = name;
  },

}
$(document).ready(function() {

  $("#start-game-button").click(function() {
    $("#player-names-container").hide();
    var name1 = $("input#player1Name").val();
    var name2 = $("input#player2Name").val();
    //user game object
    game.setPlayer1Name(name1);
    game.setPlayer2Name(name2);

    $("span#gameStartPlayer1Name").html(name1);
    $("span#gameStartPlayer2Name").html(name2);

    $("game-container").show();


  });
});