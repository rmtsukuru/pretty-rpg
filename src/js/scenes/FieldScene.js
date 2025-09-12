import Scene from './Scene';
import gameState from '../gameState';
import { drawRect } from '../graphics';

function FieldScene() {
  Scene.call(this);
}

FieldScene.prototype = Object.create(Scene.prototype);

FieldScene.prototype.draw = function() {
  Scene.prototype.draw.call(this);
  // TODO add code to draw hero here
  const position = gameState.field.position;
  drawRect(position.x, position.y, 16, 16, 'red');
}

export default FieldScene;
