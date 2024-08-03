import { Entity, vec2 } from 'platfuse'

export default class Box extends Entity {
    mass = 0 // no gravity applied
    solid = false // no collision detection
    collideObjects = false

    update() {
        const { camera } = this.scene
        if (this.isOverlapping(this.scene.getPointerRelativeGridPos())) {
            camera.shake(0.1, vec2(1)) // camera shake on mouse hover
        }
        camera.follow(this)
    }
}
