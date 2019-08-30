var GravityFunctions = {
  accelerationDueToGravity: -9.8,
  initVelocity: 0,
  initAngle: 0,
  initVerticalVelocity: Math.sin(this.initAngle) * this.initVelocity,
  initHorizontalVelocity: Math.cos(this.initAngle) * this.initVelocity,
  initHeight: 0,
  assignInitialValues() {
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
    this.initVerticalVelocity = Math.sin(this.initAngle) * this.initVelocity;
    this.initHorizontalVelocity = Math.cos(this.initAngle) * this.initVelocity;
  },
  timeToHorizontalDistanceFunction(t) {
    return this.initHorizontalVelocity * t;
  },
  horizontalDistanceToTimeFunction(d) {
    return (1 / this.initHorizontalVelocity) * d;
  },
  timeToHeightFunction() {
    return (
      (this.accelerationDueToGravity / 2) * t * t +
      this.initUpwardVelocity * t +
      this.initHeight
    );
  },
  distanceToHeightFunction(d) {
    return this.timeToHeightFunction(this.horizontalDistanceToTimeFunction(d));
  },
  getCurrentVerticalVelocity(t) {
    return -9.8 * t + this.initVerticalVelocity;
  },
  getCurrentHorizontalVelocity() {
    return this.initHorizontalVelocity;
  },
  getCurrentVelocity(t) {
    return Math.pow(
      Math.pow(this.getCurrentUpwardVelocity(t), 2) +
        Math.pow(this.getCurrentHorizontalVelocity(), 2),
      0.5
    );
  },
  getInitialVelocityVector() {
    return [Math.cos(this.initAngle), Math.sin(this.initAngle)];
  },
  getCurrentVelocityVector(d){
    //Assume that the point of tangency is the origin
    var currentUpwardVector = this.getCurrentUpwardVelocity(d)
    var currentHorizontalVector = this.initHorizontalVelocity
    return [currentHorizontalVector, currentUpwardVector]
  },
  getCurrentAngle(d){
    var currentUpwardVector = this.getCurrentVelocityVector(d)[0]
    var currentHorizontalVector = this.getCurrentVelocityVector(d)[1]
    return Math.atan(currentUpwardVector/currentHorizontalVector)
  },
  getTangentForHeightToTime(t){
    var x = t
    var y = this.timeToHeightFunction(t)
    var m = this.getCurrentUpwardVelocity(t)
    var b = y-m*x
    return "${y} = ${m}${x} + ${b}"
  },
  getTangentForDistanceToHeight(d){
    var x = d
    var y = this.distanceToHeightFunction(d)
    var m = this.getCurrentVelocity(d)
    var b = y-m*x
    return "${y} = ${m}*${x} + ${b}"
  }
};



  

