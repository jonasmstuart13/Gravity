var GravityFunctions = {
  accelerationDueToGravity: -9.8,
  initVelocity: 0,
  initAngle: 0,
  initUpwardVelocity: Math.sin(this.initAngle) * this.initVelocity,
  initHorizontalVelocity: Math.cos(this.initAngle) * this.initVelocity,
  initHeight: 0,
  askInitializeInfo() {
    this.initAngle = parseFloat(prompt("Intial Angle: "));
    this.initvelocity = parseFloat(prompt("Initial Velocity: "));
    this.initHeight = parseFloat(prompt("Initial Height: "));
    this.setHorizontalAndVerticalVelocity();
  },
  setInitVelocity(v) {
    this.initVelocity = v;
  },
  setInitAngle(a) {
    this.initAngle = a;
  },
  setInitHeight(h) {
    this.initHeight = h;
  },
  setHorizontalAndVerticalVelocity(a) {
    this.initUpwardVelocity = Math.sin(this.initAngle) * this.initVelocity;
    this.initHorizontalVelocity = Math.cos(this.initAngle) * this.initVelocity;
  },
  horizontalFunction(t) {
    return this.initHorizontalVelocity * t;
  },
  timeByDistanceFunction(d) {
    return (1 / this.initHorizontalVelocity) * d;
  },
  verticalFunction(t) {
    return (
      (this.accelerationDueToGravity / 2) * t * t +
      this.initUpwardVelocity * t +
      this.initHeight
    );
  },
  heightToDistance(d) {
    return verticalFunction(timeByDistanceFunction(d));
  },
  giveCurrentUpwardVelocity(t) {
    return -9.8 * t + this.initUpwardVelocity;
  },
  giveCurrentHorizontalVelocity() {
    return this.initHorizontalVelocity;
  },
  giveCurrentVelocity(t) {
    return Math.pow(
      Math.pow(giveCurrentUpwardVelocity(t), 2) +
        Math.pow(giveCurrentHorizontalVelocity(), 2),
      0.5
    );
  },
  giveInitialVelocityVector() {
    return [Math.cos(this.initAngle), Math.sin(this.initAngle)];
  }
};

  

