import { Emitter, Layer } from 'platfuse'
import { DefaultParticleSettings } from '../constants'

export default class CustomLayer extends Layer {
    id = 1
    name = 'Custom Layer'
    update() {
        const { input } = this.scene.game
        if (input.mouseWasPressed(0)) {
            console.info('Mouse pressed', this.scene.getPointerRelativeGridPos())
            const emitter = new Emitter(this.scene, {
                ...DefaultParticleSettings,
                pos: this.scene.getPointerRelativeGridPos()
            })
            this.scene.addObject(emitter)
        }
    }

    draw() {
        const { ctx, width, height, backgroundColor } = this.scene.game
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 164, width / 2, height / 2, height)

        gradient.addColorStop(0, backgroundColor.brightness(15).toString())
        gradient.addColorStop(0.8, backgroundColor.toString())
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 6
        ctx.shadowOffsetX = 6
        ctx.shadowOffsetY = 6

        super.draw()
    }
}
