import { Entity, vec2 } from 'platfuse'

export default class Box extends Entity {
    type = 'Platfuse.Box'
    image = 'logo.png' // image from preloadAssets
    size = vec2(4, 4) // size of 4 tiles
    solid = true // solid object (collides with other objects)
    mass = 0 // no gravity for this object

    update(): void {
        // shake on mouse hover
        if (this.isOverlapping(this.scene.getPointerRelativeGridPos())) {
            this.scene.camera.shake(0.1, vec2(0.001))
        }
    }

    draw() {
        const { ctx } = this.scene.game
        ctx.save()
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 6
        ctx.shadowOffsetX = 6
        ctx.shadowOffsetY = 6
        super.draw()
        ctx.restore()
    }
}
