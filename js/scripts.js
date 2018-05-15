//business logic
function gameplayer() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.roll = function() {
    return Math.floor(Math.random() * 6);
  }
}






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

    player1Stats = new gameplayer();
    player2Stats = new gameplayer();

  });
  //player1roll
  $("#roll-dice-button1").click(function() {
    var rolled = player1Stats.roll();
    player1Stats.turnScore += rolled;
    if (rolled == 1) {
      player1Stats.turnScore = 0;
      $("#stats-turn-score1").text(player1Stats.turnScore);
      $("#play1").hide()
      $("#play2").show()

    }

    $("#stats-turn-score1").text(player1Stats.turnScore);
    $("#stats-player-1-total-score1").text(player1Stats.totalScore);

  });
  $("#hold-button1").click(function() {
    player1Stats.totalScore += player1Stats.turnScore;
    player1Stats.turnScore = 0;
    $("#stats-player-1-total-score").text(player1Stats.totalScore);
    $("#stats-turn-score1").text(player1Stats.turnScore);
    $("#play1").hide()
    $("#play2").show()

  });

});