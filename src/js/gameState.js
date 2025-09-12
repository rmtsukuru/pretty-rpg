import ExplorationScene from './scenes/explorationScene';

let currentScene;

let gameState = {
  field: {},
  party: [],
};

function configureScenario() {
  currentScene = new ExplorationScene();
  gameState.field.position = {
    x: 160,
    y: 152,
  };
  // TODO finish adding other game state here
}

export default gameState;

export {
  currentScene,
  configureScenario,
};

