import { Color, Layer, vec2 } from 'platfuse'

const textColor = new Color(255, 255, 255, 1).setAlpha(0.5)

export default class CustomLayer extends Layer {
    id = 1
    name = 'Custom Layer'

    draw() {
        const { ctx, draw, width, height, backgroundColor, avgFPS } = this.scene.game
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, height)

        gradient.addColorStop(0, backgroundColor.brightness(15).toString())
        gradient.addColorStop(0.7, backgroundColor.toString())

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        draw.text('Wellcome to Platfuse!', vec2(width / 2, 50), textColor, '3em', 'center')
        draw.text('click to create some particles', vec2(width / 2, 100), textColor, '1.5em', 'center')
        draw.text(avgFPS.toFixed(1), vec2(width / 2, height - 50), textColor, '2em', 'center')

        super.draw()
    }
}
