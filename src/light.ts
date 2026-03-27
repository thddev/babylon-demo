import { HemisphericLight, Vector3, Color3 } from "@babylonjs/core";
import { scene } from "./scene";

const light1 = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
light1.intensity = 0.9;
light1.groundColor = Color3.FromHexString("#F3F3F3");

const light2 = new HemisphericLight("light2", new Vector3(0, -1, 0), scene);
light2.intensity = 0.1;
light2.groundColor = Color3.FromHexString("#F0F0F0");

export { light1, light2 };
