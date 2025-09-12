import { updateInput } from '../input';
import {
  canvasWidth,
  canvasHeight,
  drawRect,
  graphicsContext,
  updateGraphics,
} from '../graphics';

function Scene() {
  document.getElementsByTagName('html')[0].setAttribute('class', 'pulse');
  // Used to turn on different background colors in the HTML by setting a 
  // different CSS class on the background element.
  if (this.backgroundClass()) {
    document.getElementsByTagName('html')[0].setAttribute('class', 'pulse ' + this.backgroundClass());
  }
}

Scene.prototype.backgroundClass = function() {
  return undefined;
}

Scene.prototype.update = function(dt) {
  updateInput();
  updateGraphics(dt);
}

Scene.prototype.draw = function() {
  graphicsContext.imageSmoothingEnabled = false;
  drawRect(0, 0, canvasWidth, canvasHeight, '#000');
}

export default Scene;

