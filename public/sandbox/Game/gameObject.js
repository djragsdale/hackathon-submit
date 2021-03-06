/**
 * Created by Hamilton on 12/6/14.
 */



function GameObject (x, y, type, move, _hasGravity) {

    this.type = type;
    this.speed = 2;
    // spritesheet coords
    this.x = 26 * (type - 1);
    this.y = 62;
    this.width = 25;
    this.height = 25;
    // location to be drawn
    this.drawX = x;
    this.drawY = y;
    this.isMovable = move;
    this.held = false;
    this.hasGravity = _hasGravity;

    this.draw = function() {
        //console.log(spritesheet);
        //context.clearRect(this.drawX, this.drawY, this.width, this.height);
        context.fillStyle = '#000000';
        context.fillRect(this.drawX,this.drawY,this.width,this.height);
        context.drawImage(spritesheet, this.x, this.y, this.width, this.height, this.drawX, this.drawY ,this.width, this.height);
        //context.drawImage(spritesheet, 30, 62, 120, 120, this.drawX, this.drawY ,this.width, this.height);

    };

    this.setPosition = function (x, y) { // primarily used for player holding object
        this.drawX = x;
        this.drawY = y;
    };


}

