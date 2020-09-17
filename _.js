// The object below stored in the _ variable will represent our library containing all the functionality we add to it
const _ = {
    // Number methods
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
        if (endValue === undefined) {
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
    // String methods
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
        for (let i = 1; i <= toAdd / 2; i++) {
            spacesBefore = spacesBefore.concat(' ');
            spacesAfter = spacesAfter.concat(' ');
        }
        return spacesBefore.concat(words, spacesAfter);
    },
    // Object methods
    has(object, key) {
        if (object[key] === undefined) {
            return false;
        } else {
            return true;
        }
    },
    invert(object) {
        let invertedObject = {};
        for (const key in object) {
            let keyValue = object[key];
            invertedObject[keyValue] = key;
        }
        return invertedObject;
    },
    findKey(object, predicate) {
        let result;
        for (const key in object) {
            result = predicate(object[key]);
            if (result === true) {
                return key;
            }
        }
        return undefined;
    },
    // Array methods
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        copyOfArray = array;
        copyOfArray.splice(0, n);
        return copyOfArray;
    },
    dropWhile(array, predicate) {
        copyOfArray = array;
        for (let i = 0; i < copyOfArray.length; i++) {
            if (predicate(copyOfArray[i], i, copyOfArray)) {
                copyOfArray.shift();
            }
        }
        return copyOfArray;
    },
    chunk(array, n) {
        copyOfArray = array;
        arrayChunks = [];
        if (n === undefined) {
            n = 1;
        }
        while(copyOfArray.length != 0) {
            block = copyOfArray.splice(0,n);
            arrayChunks.push(block);
        }
        return arrayChunks;
    }
};




// Do not write or modify code below this line.
module.exports = _;