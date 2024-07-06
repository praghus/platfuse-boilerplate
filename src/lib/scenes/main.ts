import { GUI } from 'dat.gui'

import { Scene } from 'platfuse'
import CustomLayer from '../layers/custom-layer'
import Box from '../models/box'

export default class MainScene extends Scene {
    gravity = 0.05
    gui?: GUI

    async init() {
        await super.init()

        this.setScale(2)
        this.addLayer(CustomLayer)

        const logoBox = this.addObject(new Box(this, {}), 1)
        this.camera.toggleBounds(false)
        this.camera.follow(logoBox)

        console.log('Main Scene initialized', this)

        // Dat GUI
        this.gui = new GUI()
        const f1 = this.gui.addFolder('Scene')
        this.gui.add(this.game, 'debug').listen()
        f1.add(this, 'gravity').step(0.01).min(0.01).max(1)
        f1.add(this.camera, 'scale').step(0.1).min(1).max(10).listen()
        const f2 = f1.addFolder('Layers')
        this.layers
            .sort((a, b) => a.renderOrder - b.renderOrder)
            .map(layer => f2.add(layer, 'visible').name(layer.name || `Layer#${layer.id}`))
    }
}
