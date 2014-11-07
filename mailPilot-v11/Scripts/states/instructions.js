/// <reference path="../constants.js" />
/// <reference path="../objects/scoreboard.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/ocean.js" />
/// <reference path="../objects/island.js" />
/// <reference path="../objects/cloud.js" />
/// <reference path="../objects/button.js" />
/// <reference path="../objects/label.js" />
var states;
var interval;
(function (states) {
    function playButtonClicked(event) {
        createjs.Sound.play("startBtnSound");
        
        interval = window.setInterval(function(){
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
    
    function mainMenuButtonClicked(event){
        createjs.Sound.play("startBtnSound");
        
        interval = window.setInterval(function(){
            stage.removeChild(game);
            window.clearInterval(interval);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        }, 750);
        
    }
    states.mainMenuButtonClicked = mainMenuButtonClicked;
    
    function instructionState() {
        ocean.update();
        plane.image.y = stage.canvas.height/2;
        plane.image.x = 450;
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
        playButton = new objects.Button(stage.canvas.width - 60, stage.canvas.height - 30, "playButton");
        playButton.scaleX = 0.5;
        playButton.scaleY = 0.5;
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        
        // Display Main Menu Button
        mainMenuButton = new objects.Button(stage.canvas.width - 180, stage.canvas.height - 30, "mainMenuButton");
        mainMenuButton.scaleX = 0.5;
        mainMenuButton.scaleY = 0.5;
        game.addChild(mainMenuButton);
        mainMenuButton.addEventListener("click", mainMenuButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));

