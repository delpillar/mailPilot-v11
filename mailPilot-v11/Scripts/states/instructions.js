/// <reference path="../constants.js" />
/// <reference path="../objects/scoreboard.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/ocean.js" />
/// <reference path="../objects/island.js" />
/// <reference path="../objects/cloud.js" />
/// <reference path="../objects/button.js" />
/// <reference path="../objects/label.js" />
var states;
(function (states) {
    function playButtonClicked(event) {
        createjs.Sound.play("startBtnSound");
        
        var interval = window.setInterval(function(){
            stage.removeChild(game);
        window.clearInterval(interval);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
        
        },1000);
        
    }
    states.playButtonClicked = playButtonClicked;
    
    function instructionState() {
        ocean.update();
        plane.image.y = stage.canvas.height/2;
        plane.image.x = 450;
       // plane.update();
    }
    states.instructionState = instructionState;

    function instructions() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2 + 80, 100, "COMBATRON");
        gameNameLabel.font = "bold 60px Wallpoet";
        gameNameLabel.textAlign = "center";
        gameNameLabel.shadow = new createjs.Shadow("#ffffff", 5, 5, 5)
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, stage.canvas.height/2, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));

