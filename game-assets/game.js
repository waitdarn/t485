// Constants
var CENTER_X = 550 / 2;
var CENTER_Y = 300 / 2;

function main() {
    // Link canvas and background and enable mouse
    var stage = new createjs.Stage('game');
    var image = new createjs.Bitmap('game-assets/bg.png');
    //stage.mouseEventsEnabled = true;

    var circle = new createjs.Shape();
    circle.graphics.beginFill('green').drawCircle(0, 0, 50);
    circle.x = CENTER_X - 25;
    circle.y = CENTER_Y - 25;
    circle.addEventListener('click', function (e) {
        createjs.Tween.get(circle).to({y: circle.y + 10}, 400);
        console.log('clicked circle');
    });

    stage.addChild(image);
    stage.addChild(circle);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', stage);
}
