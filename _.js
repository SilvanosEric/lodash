const _ = {
    clamp(number, lowerBound, upperBound) {
        if (number < lowerBound) {
            return lowerBound;
        } else if (number > upperBound) {
            return upperBound;
        } else {
            return number;
        }
    },
    inRange(number, startValue, endValue) {
        if (typeof endValue === 'undefined') {
            endValue = startValue;
            startValue = 0;
        }
        if (startValue > endValue) {
            holder = startValue;
            startValue = endValue;
            endValue = holder;
        }
        if (number >= startValue && number < endValue) {
            return true;
        } else if (number < startValue || number >= endValue) {
            return false;
        }
    },
    words(string) {
        return string.split(' ');
    }
};




// Do not write or modify code below this line.
module.exports = _;