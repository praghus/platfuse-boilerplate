import { GUI } from 'dat.gui'

import { Scene, vec2 } from 'platfuse'
import CustomLayer from '../layers/custom-layer'
import Box from '../models/box'

export default class MainScene extends Scene {
    gravity = 0.02
    gui = new GUI()

    async init() {
        await super.init()

        // set grid size (cols, rows) and tile size (in pixels)
        this.setDimensions(vec2(10, 10), vec2(16, 16))
        this.setScale(3)
        this.addLayer(CustomLayer)

        const platfuseBox = this.addObject(new Box(this), 1)
        this.camera.toggleBounds(false)
        this.camera.follow(platfuseBox)

        console.log('Main Scene initialized', this)

        // Dat GUI
        const f1 = this.gui.addFolder('Scene')
        const f2 = f1.addFolder('Layers')

        this.gui.add(this.game, 'debug').listen()
        f1.add(this, 'gravity').step(0.01).min(0.01).max(1)
        f1.add(this.camera, 'scale').step(0.1).min(1).max(10).listen()

        this.layers
            .sort((a, b) => b.renderOrder - a.renderOrder)
            .map(layer => f2.add(layer, 'visible').name(layer.name || `Layer#${layer.id}`))
    }
}
