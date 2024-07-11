import { Game, vec2 } from 'platfuse'
import logo from './assets/images/logo.png'
import MainScene from './lib/scenes/main-scene'

import './style.css'

const config = {
    debug: false,
    global: true,
    scenes: {
        MainScene
    }
}

const preloadAssets = {
    'logo.png': logo
}

const game = new Game(config, preloadAssets)

async function start() {
    await game.start('MainScene')
}

start()
