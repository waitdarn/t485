/*(function () {/()*/

    // Init some useful stuff for easier access (don't need them all)
    var b2Vec2 = Box2D.Common.Math.b2Vec2                               ,
        b2AABB = Box2D.Collision.b2AABB                                 ,
        b2BodyDef = Box2D.Dynamics.b2BodyDef                            ,
        b2Body = Box2D.Dynamics.b2Body                                  ,
        b2FixtureDef = Box2D.Dynamics.b2FixtureDef                      ,
        b2Fixture = Box2D.Dynamics.b2Fixture                            ,
        b2World = Box2D.Dynamics.b2World                                ,
        b2MassData = Box2D.Collision.Shapes.b2MassData                  ,
        b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape          ,
        b2CircleShape = Box2D.Collision.Shapes.b2CircleShape            ,
        b2DebugDraw = Box2D.Dynamics.b2DebugDraw                        ,
        b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef   ,
        b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;

    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame   ||
        window.mozRequestAnimationFrame      ||
        window.oRequestAnimationFrame        ||
        window.msRequestAnimationFrame       ||
        function(/* function */ callback, /* DOM Element */ element){
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    var SCALE,
        canvas,
        ctx,
        world,
        fixDef,
        shapes = {},
        images = [];

    var debug = false;
/*
  _|_|_|            _|    _|      _|            _|  _|            _|
    _|    _|_|_|        _|_|_|_|        _|_|_|  _|      _|_|_|_|      _|_|_|      _|_|_|
    _|    _|    _|  _|    _|      _|  _|    _|  _|  _|      _|    _|  _|    _|  _|    _|
    _|    _|    _|  _|    _|      _|  _|    _|  _|  _|    _|      _|  _|    _|  _|    _|
  _|_|_|  _|    _|  _|      _|_|  _|    _|_|_|  _|  _|  _|_|_|_|  _|  _|    _|    _|_|_|
                                                                                      _|
                                                                                  _|_|
*/
    var init = {
        start: function(id) {
            this.defaultProperties();
            this.canvas(id);
            this.loadImages();
            canvas.addEventListener('mousemove', function(e) {
                console.log(mouseEvents.mouseCoords(e));
            });

            box2d.create.world();
            box2d.create.defaultFixture();

            this.loadStaticElements();
            this.callbacks();

            var i = 0;
            window.setInterval(function() {
                if (i % 2 === 0) {
                    helpers.setLinearVelocity('platform_05', 180, 2);
                    helpers.setLinearVelocity('platform_06', 0, 2);
                } else {
                    helpers.setLinearVelocity('platform_05', 0, 2);
                    helpers.setLinearVelocity('platform_06', 180, 2);
                }
                i++;
            }, 2000);

            // Game loop
            (function gameLoop() {
                loop.step();
                loop.update();
                if (debug) {
                    world.DrawDebugData();
                }
                loop.draw();
                requestAnimFrame(gameLoop);
            })();
        },
        defaultProperties: function() {
            SCALE = 30;
        },
        canvas: function(id) {
            canvas = document.getElementById(id);
            ctx = canvas.getContext('2d');
        },
        loadImages: function() {
            var imageObj = new Image();
            imageObj.src = 'game-assets/grid.gif';
            images[0] = imageObj;
        },
/*
    _|_|_|    _|                  _|      _|                  _|_|_|  _|
  _|        _|_|_|_|    _|_|_|  _|_|_|_|        _|_|_|      _|        _|_|_|      _|_|_|  _|_|_|      _|_|      _|_|_|
    _|_|      _|      _|    _|    _|      _|  _|              _|_|    _|    _|  _|    _|  _|    _|  _|_|_|_|  _|_|
        _|    _|      _|    _|    _|      _|  _|                  _|  _|    _|  _|    _|  _|    _|  _|            _|_|
  _|_|_|        _|_|    _|_|_|      _|_|  _|    _|_|_|      _|_|_|    _|    _|    _|_|_|  _|_|_|      _|_|_|  _|_|_|
                                                                                          _|
                                                                                          _|
*/
        loadStaticElements: function() {
            // Max x: 30; max y: 18
            add.box({
                x: 10,
                y: 10,
                height: 1,
                width: 20,
                color: 'skyblue',
                isStatic: true,
                id: 'platform_01'
            });
            /*add.box({
                x: 20,
                y: 5,
                height: 1,
                width: 20,
                color: 'darkblue',
                isStatic: true,
                id: 'platform_02'
            });*/
            add.box({
                x: 26.5,
                y: 13,
                height: 1,
                width: 8,
                color: 'pink',
                isStatic: true,
                angle: -0.7,
                id: 'platform_03'
            });
            add.box({
                x: 2.5,
                y: 5.5,
                height: 1,
                width: 5,
                color: 'gold',
                isStatic: true,
                angle: 0.6,
                id: 'platform_04'
            });
            add.box({
                x: 25,
                y: 17,
                height: 2,
                width: 4,
                color: 'forestgreen',
                isStatic: false,
                isKinematic: true,
                id: 'platform_05'
            });
            add.box({
                x: 3,
                y: 8.5,
                height: 2,
                width: 4,
                color: 'turquoise',
                isStatic: false,
                isKinematic: true,
                id: 'platform_06'
            });
            // Right wall
            add.box({
                x: canvas.width / SCALE + 1.1,
                y: canvas.height / SCALE / 2,
                height: canvas.height / SCALE,
                width: 2,
                isStatic: true,
                id: 'wall_1'
            });
            // Floor
            add.box({
                x: canvas.width / SCALE / 2,
                y: canvas.height / SCALE + 1.1,
                height: 2,
                width: canvas.width / SCALE,
                isStatic: true,
                color: 'purple',
                id: 'wall_2'
            });
            // Left wall
            add.box({
                x: -1,
                y: canvas.height / SCALE / 2,
                height: canvas.height / SCALE,
                width: 2,
                isStatic: true,
                id: 'wall_3'
            });
        },
/*
    _|_|                        _|  _|            _|
  _|    _|  _|_|_|      _|_|_|  _|        _|_|_|  _|  _|
  _|    _|  _|    _|  _|        _|  _|  _|        _|_|
  _|    _|  _|    _|  _|        _|  _|  _|        _|  _|
    _|_|    _|    _|    _|_|_|  _|  _|    _|_|_|  _|    _|
*/
        callbacks: function() {
            canvas.addEventListener('click', function(e) {
                // Adds circle on click
                var shapeOptions = {
                    x: (canvas.width / SCALE) * (e.offsetX / canvas.width),
                    y: 1,
                    radius: Math.random() / 4 + 0.5,
                };
                add.random(shapeOptions);
                //add.circle(shapeOptions);
                //add.box(shapeOptions);

            }, false);
        }
    };
/*

    _|_|          _|        _|        _|_|_|  _|                                                    _|_|_|_|
  _|    _|    _|_|_|    _|_|_|      _|        _|_|_|      _|_|_|  _|_|_|      _|_|      _|_|_|      _|        _|    _|  _|_|_|      _|_|_|
  _|_|_|_|  _|    _|  _|    _|        _|_|    _|    _|  _|    _|  _|    _|  _|_|_|_|  _|_|          _|_|_|    _|    _|  _|    _|  _|
  _|    _|  _|    _|  _|    _|            _|  _|    _|  _|    _|  _|    _|  _|            _|_|      _|        _|    _|  _|    _|  _|
  _|    _|    _|_|_|    _|_|_|      _|_|_|    _|    _|    _|_|_|  _|_|_|      _|_|_|  _|_|_|        _|          _|_|_|  _|    _|    _|_|_|
                                                                  _|
                                                                  _|
*/
    var add = {
        random: function(options) {
            if (Math.random() < 0.5){
                this.circle(options);
            } else {
                this.box(options);
            }
        },
        circle: function(options) {
            options.radius = options.radius || 0.5 + Math.random()*1;
            var shape = new Circle(options);
            shapes[shape.id] = shape;
            box2d.addToWorld(shape);
        },
        box: function(options) {
            options.width = options.width || Math.random() + 0.5;
            options.height = options.height || Math.random() + 0.5;
            var shape = new Box(options);
            shapes[shape.id] = shape;
            box2d.addToWorld(shape);
        }
    };

    var mouseEvents = {
        mouseCoords: function(e) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top + 0.875
            };
        },
        mouseDown: function(e) {

        },
        mouseUp: function(e) {

        }
    };

    var box2d = {
        addToWorld: function(shape) {
            var bodyDef = this.create.bodyDef(shape);
            var body = world.CreateBody(bodyDef);
            if (shape.radius) {
                fixDef.shape = new b2CircleShape(shape.radius);
            } else {
                fixDef.shape = new b2PolygonShape();
                fixDef.shape.SetAsBox(shape.width / 2, shape.height / 2);
            }
            body.CreateFixture(fixDef);
        },
        create: {
            world: function() {
                world = new b2World(
                    new b2Vec2(0, 10),    //gravity
                    false                 //allow sleep
                );

                if (debug) {
                    var debugDraw = new b2DebugDraw();
                    debugDraw.SetSprite(ctx);
                    debugDraw.SetDrawScale(30.0);
                    debugDraw.SetFillAlpha(0.3);
                    debugDraw.SetLineThickness(1.0);
                    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
                    world.SetDebugDraw(debugDraw);
                }
            },
            defaultFixture: function() {
                fixDef = new b2FixtureDef();
                fixDef.density = 1.0;
                fixDef.friction = 0.5;
                fixDef.restitution = 0.2;
            },
            bodyDef: function(shape) {
                var bodyDef = new b2BodyDef();

                if (shape.isStatic) {
                    bodyDef.type = b2Body.b2_staticBody;
                } else if (shape.isKinematic) {
                    bodyDef.type = b2Body.b2_kinematicBody;
                } else {
                    bodyDef.type = b2Body.b2_dynamicBody;
                }
                bodyDef.position.x = shape.x;
                bodyDef.position.y = shape.y;
                bodyDef.userData = shape.id;
                bodyDef.angle = shape.angle;

                return bodyDef;
            }
        },
        get: {
            bodySpec: function(b) {
                return {
                    x: b.GetPosition().x,
                    y: b.GetPosition().y,
                    angle: b.GetAngle(),
                    center: {
                        x: b.GetWorldCenter().x,
                        y: b.GetWorldCenter().y
                    }
                };
            }
        }
    };
/*
  _|
  _|          _|_|      _|_|    _|_|_|
  _|        _|    _|  _|    _|  _|    _|
  _|        _|    _|  _|    _|  _|    _|
  _|_|_|_|    _|_|      _|_|    _|_|_|
                                _|
                                _|
*/
    var i = 0;
    var loop = {
        step: function() {
            var stepRate = 1 / 60;
            world.Step(stepRate, 10, 10);
            world.ClearForces();
        },
        update: function () {
            if (!debug) ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var b = world.GetBodyList(); b; b = b.m_next) {
                if (b.IsActive() && typeof b.GetUserData() !== 'undefined' && b.GetUserData() !== null) {
                    for (var i = 0; i < images.length; i++) {
                        ctx.drawImage(images[i], 0, 0);
                    }
                    shapes[b.GetUserData()].update(box2d.get.bodySpec(b));
                    //mouseEvents.mouseMove();
                }
            }
        },
        draw: function() {
            for (var i in shapes) {
                shapes[i].draw();
            }
        }
    };
/*
    _|    _|            _|
    _|    _|    _|_|    _|  _|_|_|      _|_|    _|  _|_|    _|_|_|
    _|_|_|_|  _|_|_|_|  _|  _|    _|  _|_|_|_|  _|_|      _|_|
    _|    _|  _|        _|  _|    _|  _|        _|            _|_|
    _|    _|    _|_|_|  _|  _|_|_|      _|_|_|  _|        _|_|_|
                            _|
                            _|
*/
    var helpers = {
        randomColor: function() {
            var letters = '0123456789ABCDEF'.split(''),
                color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        },
        applyImpulse: function(id, degrees, power) {
            var body = null;
            // Search body list for body with given id (GetUserData returns id)
            for (var b = world.GetBodyList(); b; b = b.m_next) {
                if (b.GetUserData() == id) {
                    body = b;
                }
            }
            body.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                                  Math.sin(degrees * (Math.PI / 180)) * power),
                                  body.GetWorldCenter());
        },
        applyForce: function(id, degrees, power) {
            var body = null;
            // Search body list for body with given id (GetUserData returns id)
            for (var b = world.GetBodyList(); b; b = b.m_next) {
                if (b.GetUserData() == id) {
                    body = b;
                }
            }
            body.ApplyForce(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                                Math.sin(degrees * (Math.PI / 180)) * power),
                                body.GetWorldCenter());
        },
        setLinearVelocity: function(id, degrees, power) {
            var body = null;
            // Search body list for body with given id (GetUserData returns id)
            for (var b = world.GetBodyList(); b; b = b.m_next) {
                if (b.GetUserData() == id) {
                    body = b;
                }
            }
            body.SetLinearVelocity(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                                       Math.sin(degrees * (Math.PI / 180)) * power),
                                       body.GetWorldCenter());
        },
        setMass: function(id, mass) {
            var body = null;
            // Search body list for body with given id (GetUserData returns id)
            for (var b = world.GetBodyList(); b; b = b.m_next) {
                if (b.GetUserData() == id) {
                    body = b;
                }
            }
            // TODO: Center should be set to body center, not 1, 1
            body.SetMassData({center: {x: 1, y: 1}, I: 0, mass: mass});
        }
    };

/*
  _|_|_|  _|
_|        _|_|_|      _|_|_|  _|_|_|      _|_|      _|_|_|
  _|_|    _|    _|  _|    _|  _|    _|  _|_|_|_|  _|_|
      _|  _|    _|  _|    _|  _|    _|  _|            _|_|
_|_|_|    _|    _|    _|_|_|  _|_|_|      _|_|_|  _|_|_|
                              _|
                              _|
*/

    var Shape = function(v) {
        this.id = v.id || Math.round(Math.random() * 1000000);
        this.x = v.x || v.x1;
        this.y = v.y || v.y1;
        this.angle = v.angle || 0;
        this.color =  v.color || helpers.randomColor();
        this.center = { x: null, y: null };
        this.isStatic = v.isStatic || false;
        this.isKinematic = v.isKinematic || false;

        this.update = function(options) {
            this.angle = options.angle;
            this.center = options.center;
            this.x = options.x;
            this.y = options.y;
        };
    };

    var Circle = function(options) {
        Shape.call(this, options);
        this.radius = options.radius || 1;

        this.draw = function() {
            ctx.save();
            ctx.translate(this.x * SCALE, this.y * SCALE);
            ctx.rotate(this.angle);
            ctx.translate(-(this.x) * SCALE, -(this.y) * SCALE);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x * SCALE, this.y * SCALE, this.radius * SCALE, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
    };
    Circle.prototype = Shape;

    var Box = function(options) {
        Shape.call(this, options);
        this.width = options.width || Math.random();
        this.height = options.height || Math.random();

        this.draw = function() {
            ctx.save();
            ctx.translate(this.x * SCALE, this.y * SCALE);
            ctx.rotate(this.angle);
            ctx.translate(-(this.x) * SCALE, -(this.y) * SCALE);
            ctx.fillStyle = this.color;
            ctx.fillRect(
                (this.x-(this.width / 2)) * SCALE,
                (this.y-(this.height / 2)) * SCALE,
                this.width * SCALE,
                this.height * SCALE
            );
            ctx.restore();
        };
    };
    Box.prototype = Shape;

    init.start('game');
/*})();*/
