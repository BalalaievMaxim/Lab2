'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
    let result = []
    if (end - start < 0) return result

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) result.push(i)
    }
    return result
}

rangeOdd(15, 30)

module.exports = { rangeOdd };
