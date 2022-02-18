import * as THREE from 'three'
import Experience from "../three.js-gist/Common/Experience"
import RendererTemplate from "./RendererTemplate"
import CameraTemplate from "./CameraTemplate";
import WorldTemplate from "./WorldTemplate";

export default class ExperienceTemplate extends Experience {
    constructor(canvas, sources) {
        super(canvas, sources)

        this.world = new WorldTemplate(this)
        this.camera = new CameraTemplate(this)
        this.renderer = new RendererTemplate(this)
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