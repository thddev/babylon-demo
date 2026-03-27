import {
  MeshBuilder,
  Vector3,
  ImportMeshAsync,
  TransformNode,
  Color3,
  StandardMaterial,
} from "@babylonjs/core";
import { scene } from "./scene";

MeshBuilder.CreateGround("ground", {
  width: 10,
  height: 10,
  subdivisions: 4,
});

// === House 1: Xoay quanh origin cua chinh no (ben trai) ===
const result1 = await ImportMeshAsync(
  "https://assets.babylonjs.com/meshes/both_houses_scene.babylon",
  scene,
  { meshNames: "semi_house" },
);
export const house1 = result1.meshes[0];
house1.position = new Vector3(-3, 0, 0);
house1.rotation.y = -1;

// === House 2: Xoay quanh pivot ben ngoai (ben phai) ===
const result2 = await ImportMeshAsync(
  "https://assets.babylonjs.com/meshes/both_houses_scene.babylon",
  scene,
  { meshNames: "semi_house" },
);
const house2 = result2.meshes[0];

export const pivot = new TransformNode("pivot", scene);
pivot.position = new Vector3(3, 0, 0);
house2.parent = pivot;
house2.position = new Vector3(0, 0, -2);

const marker = MeshBuilder.CreateSphere(
  "pivotMarker",
  { diameter: 0.3 },
  scene,
);
const material = new StandardMaterial("myMaterial", scene);
material.diffuseColor = new Color3(1, 0, 0);
marker.parent = pivot;
marker.material = material;
