import { scene } from "./scene";
import { house1, pivot } from "./mesh";

scene.onBeforeRenderObservable.add(() => {
  const speed = 0.01;
  house1.rotation.y += speed;
  pivot.rotation.y += speed;
});
