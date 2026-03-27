import { engine, scene } from "./scene";
import "./camera";
import "./light";
import "./mesh";
import "./animation";

engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
