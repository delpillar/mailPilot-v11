/// <reference path="../constants.js" />
/// <reference path="../objects/button.js" />
/// <reference path="../objects/cloud.js" />
/// <reference path="../objects/island.js" />
/// <reference path="../objects/label.js" />
/// <reference path="../objects/ocean.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/scoreboard.js" />
var states;
(function (states) {
    function gameOverState() {
        ocean.update();
    }
    states.gameOverState = gameOverState;

    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        createjs.Sound.stop();
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;

    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        
        //play game over sound
        createjs.Sound.play('gameOver', createjs.Sound.INTERRUPT_NONE, 0, 1500, -1, 1, 0);
        stage.addChild(game);
        var interval = window.setInterval(function(){
            window.clearInterval(interval);
        

            // Show Cursor
            stage.cursor = "default";
        
             // Display Game Over
            gameOverLabel = new objects.Label(stage.canvas.width / 2 + 80, 40, "GAME OVER");
            gameOverLabel.font = "60px Wallpoet";
            gameOverLabel.textAlign = "center";
            game.addChild(gameOverLabel);

            // Display Final Score Label
            finalScoreLabel = new objects.Label(stage.canvas.width / 2 + 80, 120, "FINAL SCORE");
            finalScoreLabel.font = "50px Wallpoet";
            finalScoreLabel.textAlign = "center";
            game.addChild(finalScoreLabel);

            // Display Final Score
            finalScore = new objects.Label(stage.canvas.width / 2 + 40, 160, scoreboard.score.toString());
            finalScore.font = "50px Audiowide";
            finalScore.textAlign = "center";
            game.addChild(finalScore);

            // Display Try Again Button
            tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
            game.addChild(tryAgain);
            tryAgain.addEventListener("click", tryAgainClicked);

            
        },2500);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
