import { Game, vec2 } from 'platfuse'
import logo from './assets/images/logo.png'
import MainScene from './lib/scenes/main-scene'

import './style.css'

const config = {
    fixedSize: vec2(1280, 720),
    debug: false,
    global: true
}

const preloadAssets = {
    'logo.png': logo
}

const game = new Game(config, preloadAssets)

async function start() {
    await game.init(MainScene)
}

start()
