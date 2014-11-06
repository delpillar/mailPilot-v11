/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/asset.js" />
var objects;
var laserSound;
(function (objects) {
    // Cloud class
    var Cloud = (function () {
        function Cloud(stage, game) {
            this.stage = stage;
            this.game = game;
            //this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("laser"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Cloud.prototype.update = function () {
            //this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
            
        };

        Cloud.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 10);
            //this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = -this.width;
        };

        Cloud.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));

