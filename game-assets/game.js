// Define stage
var stage;

// Variables
var CENTER_X = 240;
var CENTER_Y = 170;

function main() {
    // Link canvas and enable mouse
    stage = new createjs.Stage('game');
    //stage.mouseEventsEnabled = true;

    var circle = new createjs.Shape();
    circle.graphics.beginFill('green').drawCircle(0, 0, 50);
    circle.x = CENTER_X - 25;
    circle.y = CENTER_Y - 25;
    circle.addEventListener('click', function (e) {
        createjs.Tween.get(circle).to({y: circle.y + 10}, 400);
        console.log('clicked');
    });

    stage.addChild(circle);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', stage);
/*
    // Load images
    bgSrc.src = 'game-assets/bg.png';
    bgSrc.name = 'bg';
    bgSrc.onload = loadGfx;

    // Ticker
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', stage);

    console.log('end of main');*/
}

function loadImage() {
    var preload = new createjs.LoadQueue();
    preload.addEventListener('fileload', function(e) {
        document.body.appendChild(e.result);
    });
    preload.loadFile('game-assets/bg.png');
}

function buildInterface() {
    btn.x = CENTER_X - 64;
    btn.y = CENTER_Y - 64;

    stage.addChild(bg, btn);

    // Add buttoon listener
    btn.onPress = showText;
    console.log('built interface');
}

function showText() {
    console.log('this works');

    // Remove listener
    btn.onPress = null;

    // Create text
    var msg = new Text('Hello World!', 'Bold 25px; Arial', '#000');

    msg.x = CENTER_X - 70;
    msg.y = CENTER_Y;

    stage.addChild(msg);
    msg.alpha = 0;

    // Animation
    createjs.Tween.get(btn).todo({y: CENTER_Y + 50}, 300);
    createjs.Tween.get(msg).wait(400).to({alpha: 1}, 400);
    console.log('finished showing text');
}
