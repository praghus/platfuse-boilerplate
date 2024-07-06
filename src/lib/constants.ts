import { Color } from 'platfuse'

export const DefaultParticleSettings = {
    angle: Math.PI,
    emitSize: 1,
    emitTime: 1,
    emitRate: 25,
    emitCone: 0,
    colorStart: new Color(255, 128, 0, 1),
    colorEnd: new Color(255, 0, 0, 0),
    ttl: 2.2,
    sizeStart: 0.15,
    sizeEnd: 0.2,
    speed: 0.1,
    angleSpeed: 0.1,
    damping: 1,
    angleDamping: 1,
    gravityScale: 0.5,
    fadeRate: 0.1,
    randomness: 0.5,
    collideTiles: true,
    renderOrder: 1,
    elasticity: 0.3,
    stretchScale: 0.5
}
