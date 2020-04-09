namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.x += -16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.y += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.x += 16
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.y += -16
})
let Car: Sprite = null
let Cat: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0e00180010101010101011111010101010100404060604040606040404060406030303030303030303030303030303030303030303030303030303030303030303030303030303030303040404040406060404060404040407080808080808080808080808090d0e0e0e0e0e0e0e0e0e0e0e0e0c010101010101010101010101010107080808080808080808080808090d0e0e0e0e0e0e0e0e0e0e0e0e0c0101010101010101010101010101010101010101010101010101010104040404040604040404040406040505040404040404040405050405040404050405040404040404050505050404040404040404040404040404050404040404050405050405010101010101010101010101010101010101010101010101010101010504040404040404050505050405050404050404050404050404040404040504040404050504040504050504040405050404040405050405`,
            img`
2 2 2 2 2 2 . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.vehicle.roadHorizontal,sprites.dungeon.stairLadder,myTiles.tile1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
Cat = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . e . . . . e . . . . . 
. . . . e 4 e . . e 4 e . . . . 
. . . . e 4 e . . e 4 e . . . . 
. . . e 4 3 e . . e 3 4 e . . . 
. . . e 4 3 4 e e 4 3 4 e . . . 
. . e 4 4 4 4 4 4 4 4 4 4 e . . 
. . e 4 4 4 f 4 4 4 f 4 4 e . . 
. . e 4 4 4 4 4 4 4 4 4 4 e . . 
. . e 4 4 4 4 4 4 4 4 4 4 e . . 
. . e 4 4 4 f 4 f 4 f 4 4 e . . 
. . . e 4 4 4 f f f 4 4 e . . . 
. . . . e 4 4 4 4 4 4 e . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Cat.setPosition(120, 328)
scene.setBackgroundColor(7)
scene.cameraFollowSprite(Cat)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(90)) {
        Car = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        Car.setVelocity(-50, 0)
        tiles.placeOnRandomTile(Car, sprites.vehicle.roadHorizontal)
        Car.x = 200
        Car.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        Car = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 7 7 . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . 7 1 1 7 . . . . . 
. . . . . . . . . 7 . . 7 . 7 7 1 f 7 7 7 7 7 . 
. . 7 . 7 . 7 . 7 7 7 7 7 7 7 7 7 7 7 . 1 . 1 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 1 . 1 . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . . . . 7 7 7 . . . 7 7 . . . . . . . . . 
. . . . . . . 7 7 7 7 . . 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        Car.setVelocity(50, 0)
        tiles.placeOnRandomTile(Car, myTiles.tile1)
        Car.x = 16
        Car.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
