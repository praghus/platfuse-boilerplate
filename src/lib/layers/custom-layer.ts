import { Box, Color, Layer, vec2 } from 'platfuse'

class Star {
    pos = vec2()
    force = vec2(-5 + Math.random() * 10, -5 + Math.random() * 10)
    color = new Color(200, 200, 200, 1).brightness(-100 + Math.random() * 200)
}

export default class CustomLayer extends Layer {
    id = 0
    name = 'Custom Layer'
    stars: Star[] = []

    update() {
        const { width, height } = this.scene.game
        if (this.stars.length < 500 && Math.random() < 0.8) {
            this.stars.push(new Star())
        }
        for (const star of this.stars) {
            star.pos = star.pos.add(star.force)
            if (Math.abs(star.pos.x) > width / 2 || Math.abs(star.pos.y) > height / 2) {
                this.stars.splice(this.stars.indexOf(star), 1)
            }
        }
    }

    draw() {
        const { ctx, draw, width, height, backgroundColor, primaryColor, avgFPS } = this.scene.game
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, height)

        gradient.addColorStop(0, backgroundColor.brightness(10).toString())
        gradient.addColorStop(0.6, backgroundColor.toString())

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        draw.text('Wellcome to Platfuse!', vec2(width / 2, 50), primaryColor, '3em', 'center')
        draw.text('click to create some particles', vec2(width / 2, 100), primaryColor, '1.5em', 'center')
        draw.text(avgFPS.toFixed(1), vec2(width / 2, height - 50), primaryColor, '2em', 'center')

        this.stars.forEach((star, n) =>
            draw.fillEllipse(
                new Box(star.pos.add(vec2(width, height).divide(2)), vec2(Math.abs(star.pos.y / 100 + n / 200))),
                star.color
            )
        )
        super.draw()
    }
}
