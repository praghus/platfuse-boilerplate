import { Color, Entity, vec2 } from 'platfuse'

const textColor = new Color(255, 255, 255, 1).setAlpha(0.2)

export default class Box extends Entity {
    type = 'Platfuse.Box'
    image = 'logo.png'
    size = vec2(4, 4)
    solid = true
    mass = 0

    draw() {
        super.draw()

        const { camera } = this.scene

        this.scene.game.draw.text(
            '[click to generate particles]',
            camera.pos.x,
            camera.pos.y + 50 * camera.scale,
            textColor,
            '1.5em',
            'center',
            'middle',
            false
        )
    }
}
