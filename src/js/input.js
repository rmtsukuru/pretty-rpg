import _ from 'underscore';

const keys = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    enter: 13,
    shift: 16,
    control: 17,
    z: 90,
    x: 88,
    c: 67,
    esc: 27,
    y: 89,
    m: 77,
    f: 70,
    w: 87,
};

let keyState, triggerKeyState;

function configureInput() {
  keyState = {};
  triggerKeyState = {};
  _.keys(keys).forEach(function(key) {
    keyState[key] = false; 
    triggerKeyState[key] = false; 
  });
}

const keyPressed = function(e) {
  var key = _.findKey(keys, function(x) {
    return x == e.keyCode;
  });
  if (key) {
    if (!keyState[key]) {
      triggerKeyState[key] = true;
    }
    keyState[key] = true;
    e.preventDefault();
  }
  else {
    console.log('Pressed ' + e.keyCode);
  }
};

const keyReleased = function(e) {
  var key = _.findKey(keys, function(x) {
    return x == e.keyCode;
  });
  if (key) {
    keyState[key] = false;
  }
  else {
    console.log('Released ' + e.keyCode);
  }
};

function updateInput(dt) {
  _.keys(keys).forEach(function(key) {
    triggerKeyState[key] = false; 
  });
}

export {
  configureInput,
  keyPressed,
  keyReleased,
  keyState,
  triggerKeyState,
  updateInput,
};

