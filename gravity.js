const accelerationDueToGravity = -9.8;
var initVelocity = 0;
var initAngle = 0;
const initUpwardVelocity = Math.sin(initAngle);
const initHorizontalVelocity = Math.cos(initAngle);
var initHeight = 0;

function updateVelocity(num) {
  initVelocity = num;
  initHorizontalVelocity = Math.cos(initAngle);
  initUpwardVelocity = Math.sin(initAngle);
}

function updateHeight(h) {
  initHeight = h;
}

function horizontalFunction(t) {
  return initHorizontalVelocity * t;
}

function timeByDistanceFunction(d) {
  return (1 / initHorizontalVelocity) * d;
}

function verticalFunction(t) {
  return (
    (accelerationDueToGravity / 2) * t * t + initUpwardVelocity * t + initHeight
  );
}

function heightToDistance(d) {
  return verticalFunction(timeByDistanceFunction(d));
}

function giveCurrentUpwardVelocity(t) {
  return -9.8 * t + initUpwardVelocity;
}

function giveCurrentHorizontalVelocity() {
  return initHorizontalVelocity;
}

function giveCurrentVelocity(t) {
  return Math.pow(
    Math.pow(giveCurrentUpwardVelocity(t), 2) +
      Math.pow(giveCurrentHorizontalVelocity(), 2),
    0.5
  );
}

function giveInitialVelocityVector() {
  return [Math.cos(initAngle), Math.sin(initAngle)];
}
