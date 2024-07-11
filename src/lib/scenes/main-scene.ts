import { GUI } from 'dat.gui'

import { Scene, vec2 } from 'platfuse'
import CustomLayer from '../layers/custom-layer'
import Box from '../models/box'

export default class MainScene extends Scene {
    gui?: GUI
    size = vec2(10, 10) // set grid size (cols, rows)
    tileSize = vec2(16, 16) // and tile size (in pixels)
    gravity = 0.02 // set global gravity value

    init() {
        this.setScale(4)
        this.addLayer(CustomLayer)
        const platfuseBox = this.addObject(new Box(this), 1)
        this.camera.toggleBounds(false)
        this.camera.follow(platfuseBox)

        console.log('Main Scene initialized', this)

        // Dat GUI
        this.gui = new GUI()
        const f1 = this.gui.addFolder('Scene')
        const f2 = f1.addFolder('Layers')

        this.gui.add(this.game, 'debug').listen()
        f1.add(this, 'gravity').step(0.01).min(0.01).max(1)
        f1.add(this.camera, 'scale').step(0.1).min(0.1).max(10).listen()

        this.layers
            .sort((a, b) => b.renderOrder - a.renderOrder)
            .map(layer => f2.add(layer, 'visible').name(layer.name || `Layer#${layer.id}`))
    }
}
