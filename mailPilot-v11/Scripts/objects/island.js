/// <reference path="../managers/asset.js" />
var objects;
(function (objects) {
    // Island Class
    var Island = (function () {
        function Island(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.coin, "spin");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;
            this.dy = 2;

            game.addChild(this.image);
        }
        Island.prototype.update = function () {
            //this.image.x += this.dx*Math.sin(0.4);
            this.image.x += this.dx;
            this.image.y += this.dy;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
            if (this.image.y <= 0) {
                this.dy *= -1;
            }
            if (this.image.y >= this.stage.canvas.height) {
                this.dy *= -1;
            }
            
        };

        Island.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = -this.width;
        };

        Island.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Island;
    })();
    objects.Island = Island;
})(objects || (objects = {}));

