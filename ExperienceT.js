import * as THREE from 'three'
import Experience from "../three.js-gist/Common/Experience"
import RendererT from "./RendererT"
import CameraT from "./CameraT";
import WorldT from "./WorldT";

export default class ExperienceT extends Experience {
    constructor(canvas, sources) {
        super(canvas, sources)

        this.world = new WorldT(this)
        this.camera = new CameraT(this)
        this.renderer = new RendererT(this)
    }
    resize() {
        super.resize()
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        super.update()
        this.world.update()
        this.camera.update()
        this.renderer.update()
    }

    destroy() {
        super.destroy()
        this.camera.controls.dispose()
        this.renderer.instance.dispose()
    }
}