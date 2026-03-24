import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  Vector3,
  ImportMeshAsync,
  TransformNode,
  Color3,
  StandardMaterial,
} from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

// Camera
const camera = new ArcRotateCamera(
  "cam",
  -Math.PI / 2,
  Math.PI / 3,
  8,
  Vector3.Zero(),
  scene,
);
camera.attachControl(canvas, true);

// Light
new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// Mesh
// const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
// box.position.y = 0.5;

MeshBuilder.CreateGround("ground", {
  width: 10,
  height: 10,
  subdivisions: 4, // chia ô để lighting mượt hơn
});

// === House 1: Xoay quanh origin của chính nó (bên trái) ===
const result1 = await ImportMeshAsync(
  "https://assets.babylonjs.com/meshes/both_houses_scene.babylon",
  scene,
  { meshNames: "semi_house" },
);
const house1 = result1.meshes[0];
house1.position = new Vector3(-3, 0, 0);

// === House 2: Xoay quanh pivot bên ngoài (bên phải) ===
const result2 = await ImportMeshAsync(
  "https://assets.babylonjs.com/meshes/both_houses_scene.babylon",
  scene,
  { meshNames: "semi_house" },
);
const house2 = result2.meshes[0];

// Tạo pivot node ở vị trí (3, 0, 0), house2 cách pivot 2 đơn vị theo Z
const pivot = new TransformNode("pivot", scene);
pivot.position = new Vector3(3, 0, 0);
house2.parent = pivot;
house2.position = new Vector3(0, 0, -2); // offset so với pivot

// Sphere đỏ đánh dấu vị trí pivot để dễ nhìn
const marker = MeshBuilder.CreateSphere(
  "pivotMarker",
  { diameter: 0.3 },
  scene,
);
const material = new StandardMaterial("myMaterial", scene);
material.diffuseColor = new Color3(1, 0, 0);
marker.parent = pivot;
marker.material = material;

// Animation: xoay liên tục để thấy rõ sự khác biệt
scene.onBeforeRenderObservable.add(() => {
  const speed = 0.01;
  // House 1: quay tại chỗ (quanh origin của mesh)
  house1.rotation.y += speed;
  // House 2: quay quanh pivot -> nhà di chuyển theo quỹ đạo tròn
  pivot.rotation.y += speed;
});

// Render loop
engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
