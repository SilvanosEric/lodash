/*
Note that for this alternative solutions to work,
you have to rename _.js to another name,
and rename this file to _.js
*/
const _ = {
  clamp(number, lower, upper) {
    lowerClampedValue = Math.max(number, lower);
    clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    if (start > end) {
      temp = end;
      end = start;
      start = temp;
    }
    if (number >= start && number < end) {
            return true;
        } else {
            return false;
        }
  },
  words(string) {
    words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength).concat(string).concat(' '.repeat(endPaddingLength));
    return paddedString;
  },
  has(object, key) {
      if (object[key] === undefined) {
        return false;
      } else {
        return true;
      }
  },
  invert(object) {
    const invertedObject = {};
    for (const key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (const key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    copyOfArray = array;
    copyOfArray.splice(0,n);
    return copyOfArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
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