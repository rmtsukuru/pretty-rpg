import { 
  configureInput,
  keyPressed,
  keyReleased,
} from './input';
import { configureGraphics } from './graphics';
import { configureScenario, currentScene } from './gameState';
import '../css/style.css';

window.onload = function() {
  configureGraphics();
  configureInput();
  configureScenario();
  // TODO add other config function calls here

  let dt = 0, last = 0;

  const mainLoop = (timestamp) => {
    requestAnimationFrame(mainLoop);
    dt = timestamp - last;
    last = timestamp;

    currentScene.update(dt);
    currentScene.draw();
  };

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);
  window.addEventListener('resize', configureGraphics);
  requestAnimationFrame(mainLoop);
}
