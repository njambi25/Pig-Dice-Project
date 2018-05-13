var game = {
  //players property
  player1Name: null,
  player2Name: null,

  turn: 1,
  turnScore: 0,
  //set player names
  setPlayer1Name: function(name) {
    this.player1Name = name;
  },

  setPlayer2Name: function(name) {
    this.player2Name = name;
  },

  changeTurns: function() {
    if (this.turn == 1) {
      this.turn = 2;
    } else if (this.turn == 2) {
      this.turn = 1;
    }
  },

  rollDice: function() {
    var diceValue = Math.floor(Math.random() * 6) + 1;

    if (diceValue == 1) {
      alert("You rolled a 1 ! next player's turn");
      this.changeTurns();
    } else {
      this.turnScore += diceValue;
    }
  },

};

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

    //rolldice

    $("#roll-dice-button").click(function() {
      game.rollDice()
    });



  });
});