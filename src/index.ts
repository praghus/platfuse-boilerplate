import { Game } from 'platfuse'
import map from './assets/map/map.tmx'
import tiles from './assets/images/tiles.png'
import MainScene from './lib/scenes/main-scene'
import Box from './lib/models/box'
import './style.css'

const config = {
    entities: {
        box: Box
    },
    scenes: {
        MainScene
    }
}

const preloadAssets = {
    'tiles.png': tiles,
    'map.tmx': map
}

const game = new Game(config, preloadAssets)
await game.start('MainScene')
