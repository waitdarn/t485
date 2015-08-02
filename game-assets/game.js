// Define canvas
var canvas;
var stage;

// Background
var bgSrc = new Image();
var bg;

// Button
var btnSrc = new Image();
var btn;

// Variables
var CENTER_X = 240;
var CENTER_Y = 170;
var gfxLoaded = 0; // preloader flag

function main() {
    // Link canvas and enable mouse
    canvas = document.getElementById('game');
    stage = new Stage(canvas);
    stage.mouseEventsEnabled = true;

    // Load images
    bgSrc.src = 'game-assets/bg.png';
    bgSrc.name = 'bg';
    bgSrc.onload = loadGfx;

    btnSrc.src = 'game-assets/button.png';
    btnSrc.name = 'button';
    btnSrc.onload = loadGfx;

    // Ticker
    Ticker.setFPS(30);
    Ticker.addListener(stage);

    console.log('end of main');
}

function loadGfx(e) {
    switch (e.target.name) {
        case 'bg':
            bg = new Bitmap(bgSrc);
            break;
        case 'button':
            btn = new Bitmap(btnSrc);
            break;
    }

    gfxLoaded++;

    // Display graphics until all images are loaded
    if (gfxLoaded == 2) {
        buildInterface();
    }
    console.log('loaded all graphics');
}

function buildInterface() {
    btn.x = CENTER_X - 64;
    btn.y = CENTER_Y - 64;

    stage.addChild(bg, btn);
    stage.update();

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
    Tween.get(btn).todo({y: CENTER_Y + 50}, 300);
    Tween.get(btn).wait(400).to({alpha: 1}, 400);
}
