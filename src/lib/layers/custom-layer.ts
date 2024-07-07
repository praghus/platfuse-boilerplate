import { Emitter, Layer } from 'platfuse'
import { DefaultParticleSettings } from '../constants'

export default class CustomLayer extends Layer {
    id = 1
    name = 'Custom Layer'

    update() {
        const { input } = this.scene.game
        if (input.mouseWasPressed(0)) {
            const emitter = new Emitter(this.scene, {
                ...DefaultParticleSettings,
                pos: this.scene.getPointerRelativeGridPos()
            })
            this.scene.addObject(emitter)
        }
    }

    draw() {
        const { ctx, width, height, backgroundColor } = this.scene.game
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, height)

        gradient.addColorStop(0, backgroundColor.brightness(15).toString())
        gradient.addColorStop(0.7, backgroundColor.toString())
        ctx.fillStyle = gradient
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 6
        ctx.shadowOffsetX = 6
        ctx.shadowOffsetY = 6
        ctx.fillRect(0, 0, width, height)

        super.draw()
    }
}
