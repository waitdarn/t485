var types = {
    STATIC: Box2D.Dynamics.b2Body.b2_staticBody,
    DYNAMIC: Box2D.Dynamics.b2Body.b2_dynamicBody,
    KINEMATIC: Box2D.Dynamics.b2Body.b2_kinematicBody,
};
var WIDTH = 900,
    HEIGHT = 540,
    SCALE = 30;


var level_json = [
    // Max x: 30; max y: 18
    {
        x: 10,
        y: 10,
        height: 1,
        width: 20,
        color: 'skyblue',
        type: types.STATIC,
        angle: 0,
        id: 'platform_01'
    },
    /*{
        x: 20,
        y: 5,
        height: 1,
        width: 20,
        color: 'darkblue',
        type: types.STATIC,
        id: 'platform_02'
    },*/
    {
        x: 26.5,
        y: 12,
        height: 1,
        width: 7,
        color: 'pink',
        type: types.STATIC,
        angle: -0.7,
        id: 'platform_03'
    },
    {
        x: 2.5,
        y: 5.5,
        height: 1,
        width: 5,
        color: 'gold',
        type: types.STATIC,
        angle: 0.6,
        id: 'platform_04'
    },
    {
        x: 15,
        y: 15,
        height: 1,
        width: 17,
        color: 'darkblue',
        type: types.STATIC,
        angle: 0,
        id: 'platform_05'
    },
    // Right wall
    {
        x: WIDTH / SCALE + 1.1,
        y: HEIGHT / SCALE / 2,
        height: HEIGHT / SCALE,
        width: 2,
        color: 'purple',
        type: types.STATIC,
        angle: 0,
        id: 'wall_1'
    },
    // Floor
    {
        x: WIDTH / SCALE / 2,
        y: HEIGHT / SCALE + 1.1,
        height: 2,
        width: WIDTH / SCALE,
        color: 'purple',
        type: types.STATIC,
        id: 'wall_2'
    },
    // Left wall
    {
        x: -1,
        y: HEIGHT / SCALE / 2,
        height: HEIGHT / SCALE,
        width: 2,
        color: 'purple',
        type: types.STATIC,
        angle: 0,
        id: 'wall_3'
    },
    // Ceiling
    {
        x: WIDTH / SCALE / 2,
        y: -1,
        height: 2,
        width: WIDTH / SCALE,
        color: 'purple',
        type: types.STATIC,
        angle: 0,
        id: 'wall_4'
    }
];
