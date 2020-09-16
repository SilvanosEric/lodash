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
    },
    pad(string, length) {
        let spacesBefore = '';
        let spacesAfter = '';
        let words = '';
        toAdd = length - string.length;
        if (toAdd <= 0) {
            words = string;
            return words;
        }
        if (toAdd % 2 != 0) { // Amount of spacing to be added is odd
            words = words.concat(`${string} `);
            toAdd--;
        } else {
            words = string;
        }
        for(let i = 1; i <= toAdd/2; i++) {
            spacesBefore = spacesBefore.concat(' ');
            spacesAfter = spacesAfter.concat(' ');
        }
        return spacesBefore.concat(words, spacesAfter);
    }
};




// Do not write or modify code below this line.
module.exports = _;