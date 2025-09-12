import FieldScene from './FieldScene';
import { FIELD_SPEED } from '../config';

import gameState from '../gameState';
import { keyState } from '../input';

function ExplorationScene() {
  FieldScene.call(this);
}

ExplorationScene.prototype = Object.create(FieldScene.prototype);

ExplorationScene.prototype.update = function(dt) {
  let position = gameState.field.position;
  position.xVelocity = position.yVelocity = 0;
  const baseSpeed = FIELD_SPEED * dt;
  const speed = keyState.w ? baseSpeed / 2 : baseSpeed;

  if (keyState.up) {
    position.yVelocity -= speed;
  }
  if (keyState.down) {
    position.yVelocity += speed;
  }
  if (keyState.left) {
    position.xVelocity -= speed;
  }
  if (keyState.right) {
    position.xVelocity += speed;
  }

  position.x += position.xVelocity;
  position.y += position.yVelocity;

  FieldScene.prototype.update.call(this, dt);
};

ExplorationScene.prototype.draw = function() {
  FieldScene.prototype.draw.call(this);
};

export default ExplorationScene;

