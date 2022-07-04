const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let maxDrive = mpg * fuelLeft
  return distanceToPump <= maxDrive ? true : false
};
