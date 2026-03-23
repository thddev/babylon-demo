import { Engine, Scene, ArcRotateCamera, HemisphericLight, MeshBuilder, Vector3 } from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

// Camera
const camera = new ArcRotateCamera("cam", -Math.PI / 2, Math.PI / 3, 8, Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// Light
new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// Mesh
MeshBuilder.CreateBox("box", { size: 1 }, scene);

// Render loop
engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());