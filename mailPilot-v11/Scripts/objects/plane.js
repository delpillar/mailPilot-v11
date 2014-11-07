/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/asset.js" />
var objects;
var mx, my;
(function (objects) {
    // Plane Class
    var Plane = (function () {
        function Plane(stage, game) {
            this.stage = stage;
            this.game = game;
            this.idle = new createjs.Sprite(managers.Assets.ship,"idle");
            this.up = new createjs.Sprite(managers.Assets.ship,"up");
            this.down = new createjs.Sprite(managers.Assets.ship,"down");
            this.image = this.idle;
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('gameMusic', createjs.Sound.INTERRUPT_NONE, 0, 1500, -1, 1, 0);
        }
        Plane.prototype.update = function () {
<<<<<<< .merge_file_a05980
            this.image.y = this.stage.mouseY;
            this.image.x = this.stage.mouseX;
            
=======
            window.setInterval(function(){
                mx = this.stage.mouseX;    
                my = this.stage.mouseY;
            },30);
                
             if(this.image.y > my ){
                //this.image.gotoAndStop(this.idle);
                game.removeChild(this.image);
                this.image = this.up;
                this.image.regX = this.width / 2;
                this.image.regY = this.height / 2;
                this.image.y = this.stage.mouseY;
                this.image.x = this.stage.mouseX;
                this.image.gotoAndPlay(this.up);
                game.addChild(this.image);
            }
            else if(this.image.y < my){
                //this.image.gotoAndStop(this.idle);
                //this.image.gotoAndStop(this.up);
                game.removeChild(this.image);
                this.image = this.down;
                this.image.regX = this.width / 2;
                this.image.regY = this.height / 2;
                this.image.y = this.stage.mouseY;
                this.image.x = this.stage.mouseX;
                this.image.gotoAndPlay(this.down);
                game.addChild(this.image);
            }
            else{
                this.image.gotoAndStop(this.up);
                this.image.gotoAndStop(this.down)
                game.removeChild(this.image);
                this.image = this.idle;
                this.image.regX = this.width / 2;
                this.image.regY = this.height / 2;
                this.image.y = this.stage.mouseY;
                this.image.x = this.stage.mouseX;
                this.image.gotoAndPlay(this.idle);
                game.addChild(this.image);
            }
>>>>>>> .merge_file_a02540
        };
        Plane.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane;
    })();
    objects.Plane = Plane;
})(objects || (objects = {}));

