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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.y += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.x += 16
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Cat.y += -16
})
let projectile: Sprite = null
let Cat: Sprite = null
Cat = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . e . . . . e . . . . . 
. . . . e 4 e . . e 4 e . . . . 
. . . . e 4 e . . e 4 e . . . . 
. . . e 4 4 e . . e 4 4 e . . . 
. . . e 4 4 4 e e 4 4 4 e . . . 
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
scene.setBackgroundColor(13)
scene.cameraFollowSprite(Cat)
tiles.setTilemap(tiles.createTilemap(
            hex`0e00180003030303030303030303030303030303030303030303030303030303030303030303030303030303030307080808080808080808080808090d0e0e0e0e0e0e0e0e0e0e0e0e0c04060604040404060404040406040404040404040404040406040406010101010101010101010101010107080808080808080808080808090d0e0e0e0e0e0e0e0e0e0e0e0e0c01010101010101010101010101010101010101010101010101010101060404040404040404040404040404040404040604040404040406040505040404040404040405050405040404050405040404040404050505050404040404040404040404040404050404040404050405050405040404040504050404040404040405050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505`,
            img`
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
. . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.vehicle.roadHorizontal,sprites.dungeon.stairLadder,myTiles.tile1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8],
            TileScale.Sixteen
        ))
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSide(img`
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
`, 50, 0)
        projectile.setPosition(0, 40)
    }
})
