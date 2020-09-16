const _ = {
  clamp(number, lowerBound, upperBound) {
    if (number < lowerBound) {
      return lowerBound;
    } else if (number > upperBound) {
      return upperBound;
    } else {
      return number;
    }
  }
};




// Do not write or modify code below this line.
module.exports = _;