import { ArcRotateCamera, Vector3 } from "@babylonjs/core";
import { scene, canvas } from "./scene";

const camera = new ArcRotateCamera(
  "cam",
  -Math.PI / 2,
  Math.PI / 3,
  8,
  Vector3.Zero(),
  scene,
);
camera.attachControl(canvas, false);
camera.checkCollisions = true;
camera.inertia = 0.5;
camera.mode = 0;
camera.minZ = 0.1;
camera.maxZ = 99999;
camera.speed = 5;
camera.upperBetaLimit = Math.PI / 2;
camera.upperRadiusLimit = 200;
camera.lowerBetaLimit = 0.1;
camera.allowUpsideDown = false;

export { camera };
