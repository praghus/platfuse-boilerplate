import { GUI } from 'dat.gui'
import { Emitter, Scene } from 'platfuse'
import { DefaultParticleSettings } from '../constants'
import CustomLayer from '../layers/custom-layer'

export default class MainScene extends Scene {
    gui?: GUI
    gravity = 0.02
    tmxMap = 'map.tmx'

    init() {
        this.initGUI()
        this.setScale(4)
        this.addLayer(CustomLayer, -1)
        this.setTileCollisionLayer(1)
        this.camera.toggleBounds(false) // disable camera bounds
    }

    // create GUI for debugging
    initGUI() {
        if (this.gui instanceof GUI) return

        this.gui = new GUI()
        this.gui.add(this.game, 'debug').listen()

        const f1 = this.gui.addFolder('Scene')
        const f2 = f1.addFolder('Layers')

        f1.add(this, 'gravity').step(0.01).min(0.01).max(1)
        f1.add(this.camera, 'scale').step(0.1).min(0.1).max(50).listen()
        this.layers
            .sort((a, b) => b.renderOrder - a.renderOrder)
            .map(layer => f2.add(layer, 'visible').name(layer.name || `Layer#${layer.id}`))
    }

    update() {
        const { input } = this.game
        if (input.mouseWasPressed(0)) {
            const emitter = new Emitter(this, {
                ...DefaultParticleSettings,
                pos: this.getPointerRelativeGridPos()
            })
            this.addObject(emitter, 2)
        }
        super.update()
    }
}
