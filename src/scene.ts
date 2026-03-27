import { Engine, Scene } from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
export const engine = new Engine(canvas, true);
export const scene = new Scene(engine);
export { canvas };
