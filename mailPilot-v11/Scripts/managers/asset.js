var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        //credits to: http://www.tannerhelland.com
//        { id: "gameOver", src: "assets/sounds/Nevermore.mp3" },
//        { id: "gameMusic", src: "assets/sounds/WildWaters.mp3" },
        { id: "gameOver", src: "" },
        { id: "gameMusic", src: "" },
        { id: "stars", src: "assets/images/space5.jpg" },
        { id: "laser", src: "assets/images/beam.png" },
        //made in http://www.bfxr.net/
        { id: "shipHit", src: "assets/sounds/shipHit.wav" },
        { id: "startBtnSound", src: "assets/sounds/startGame.wav" },
        { id: "coinSound", src: "assets/sounds/Pickup_Coin24.wav" }
    ];
    
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [207, 72, 200, 70],
            [0, 73, 200, 70],
            [0, 0, 200, 70],
            [204, 0, 200, 68]
        ],
        "animations": {
            "instructionsButton": [0],
            "tryAgainButton": [1],
            "playButton": [2],
            "mainMenuButton": [3]
        }
    };
    
    var spriteSheetData2 = {
        "images": ["assets/images/ship2.png"],
        "frames": [
            [128,0,42,50],
            [177,0,42,50],
            [10,0,48,50],
            [67,0,48,50],
            [231,0,48,50],
            [289,0,48,50]
        ],
    
        "animations": {
            up:[2,3,,0.2], 
            idle:[0,1,,0.2], 
            down:[4,5,,0.2]
        }
    };
    
    var spriteSheetData3 = {
        "images": ["assets/images/coin.png"],
        "frames": {width:50, height:50},
        "animations": {
            spin:[0,9,,0.5]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.ship = new createjs.SpriteSheet(spriteSheetData2);
            this.coin = new createjs.SpriteSheet(spriteSheetData3);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
