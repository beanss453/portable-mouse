namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const cursor_anchor = SpriteKind.create()
}
let mouseme_1: Sprite = null
let mouseme_1anchor: Sprite = null
let blocker = false
function MouseMe (cusor: Image, shop: boolean) {
    mouseme_1 = sprites.create(cusor, SpriteKind.cursor)
    controller.moveSprite(mouseme_1)
    mouseme_1anchor = sprites.create(img`
        3 3 
        3 3 
        `, SpriteKind.cursor_anchor)
    blocker = true
}
forever(function () {
    if (blocker) {
        mouseme_1anchor.setPosition(mouseme_1.x - mouseme_1.width + 9, mouseme_1.y - mouseme_1.height + 9)
    }
})
