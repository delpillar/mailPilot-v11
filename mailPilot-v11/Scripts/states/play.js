/// <reference path="../objects/button.js" />
/// <reference path="../objects/laser.js" />
/// <reference path="../objects/coin.js" />
/// <reference path="../objects/label.js" />
/// <reference path="../objects/space.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/scoreboard.js" />
/// <reference path="../managers/collision.js" />

var states;
(function (states) {
    function playState() {
        space.update();
        plane.update();
        var interval = window.setInterval(function(){
            window.clearInterval(interval);
            coin.update();
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                lasers[count].update();
            }
            collision.update();
            scoreboard.update();
        },1000);
        
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
    
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        coin = new objects.Coin(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            lasers[count] = new objects.Laser(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(plane, coin, lasers, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
