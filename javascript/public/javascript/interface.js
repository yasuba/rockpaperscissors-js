$(document).ready(function() {

    var player1 = new Player('Player');
    var player2 = new Player('Computer');
    var game = new Game(player1, player2);
    var weapons = ["rock", "paper", "scissors", "lizard", "spock"];

    $('.choices img').on('click', function(){
        if ($('.name').val() === "")
            {
                $('.name').jrumble();
                setInterval(function() { $('.name').trigger('stopRumble');},700);
                $('.name').trigger('startRumble');    


            }
        else
            {
                player1.name = $('.name').val();
                player1.picks($(this).data('pick'));
                player2.randomChoice(weapons);

                $('<li>' + game.winningMessage() + '</li>').prependTo('#results').slideDown();
                $("#results li:gt(2)").fadeOut(1000, function(){
                $(this).remove();
            });
            }
    });
  });