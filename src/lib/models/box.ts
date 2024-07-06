import { Color, Entity, vec2 } from 'platfuse'

const textColor = new Color(255, 255, 255, 1).setAlpha(0.2)

export default class Box extends Entity {
    type = 'Platfuse.Box'
    image = 'logo.png'
    size = vec2(4, 4)
    solid = true
    mass = 0

    update(): void {
        if (this.isOverlapping(this.scene.getPointerRelativeGridPos(), vec2(1))) {
            this.scene.camera.shake(100, vec2(0.015))
        }
    }

    draw() {
        super.draw()
        const { draw, width, height, avgFPS } = this.scene.game
        draw.text('Wellcome to Platfuse!', width / 2, 50, textColor, '3em', 'center')
        draw.text('click to create some particles', width / 2, 100, textColor, '1.5em', 'center')
        draw.text(avgFPS.toFixed(1), width / 2, height - 50, textColor, '2em', 'center')
    }
}
