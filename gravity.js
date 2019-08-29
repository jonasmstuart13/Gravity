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

