namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const cursor_anchor = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (actual_variable && true) {
        MouseMe(img`
            f f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 f . . 
            f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
            f 1 1 1 1 1 1 1 1 1 1 f . . . . 
            f 1 1 1 1 1 1 1 1 1 f . . . . . 
            f 1 1 1 1 1 1 1 1 f . . . . . . 
            f 1 1 1 1 1 1 2 8 . . . . . . . 
            f 1 1 1 1 1 1 8 8 2 . . . . . . 
            f 1 1 1 1 1 f 7 8 8 8 7 . . . . 
            f 1 1 1 1 f . . . 2 8 8 . . . . 
            f 1 1 1 f . . . . . 8 8 8 . . . 
            f 1 1 f . . . . . . . 2 8 2 . . 
            f 1 f . . . . . . . . . 8 8 8 . 
            f f . . . . . . . . . . 7 8 8 8 
            f . . . . . . . . . . . . . 2 8 
            `, actual_variable)
    }
})
function MouseMe (cusor: Image, shop: boolean) {
    mouseme_1 = sprites.create(cusor, SpriteKind.cursor)
    controller.moveSprite(mouseme_1)
    mouseme_1anchor = sprites.create(img`
        3 3 
        3 3 
        `, SpriteKind.cursor_anchor)
    blocker = true
}
let blocker = false
let mouseme_1anchor: Sprite = null
let mouseme_1: Sprite = null
let actual_variable = false
actual_variable = true
forever(function () {
    if (blocker) {
        mouseme_1anchor.setPosition(mouseme_1.x - mouseme_1.width + 9, mouseme_1.y - mouseme_1.height + 9)
    }
})
