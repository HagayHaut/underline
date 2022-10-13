/*    
underline prototype definition 
*/

class Underline {
    constructor() {}

    /*    
    ARRAY METHODS 
    */

    /*    
    NON-DESTRUCTIVE 
    */

    /*
    Input: array, integer -> index, can be negative
    Output: item at index. If index is negative, count from end of array
    */

    at(array, index) {
        if (index < 0) {
            return array[array.length + index];
        }
        return array[index];
    }

    /*
    Input: array, integer k
    Output: array of subarrays of length k (or remainder)
    */

    chop(array, k) {
        if (!Array.isArray(array)) {
            throw new TypeError("First argument must be an array");
        }
        if (~~k !== k || typeof k !== "number") {
            throw new TypeError("Second argument must be an integer");
        }
        const result = [];
        let chunk = [];
        array.forEach((el) => {
            if (chunk.length === k) {
                result.push(chunk);
                chunk = [];
            }
            chunk.push(el);
        });
        result.push(chunk);
        return result;
    }

    /*
    Input: array, boolean
    Output: filtered array -> only falsey/truthy values depending on boolean flag
    */

    compact(array, boolean) {
        if (!Array.isArray(array)) {
            throw new TypeError("First argument must be an array");
        }
        if (typeof boolean !== "boolean") {
            throw new TypeError("Second argument must be boolean");
        }
        const result = [];
        array.forEach((el) => {
            if (boolean ? el : !el) result.push(el);
        });
        return result;
    }

    /*
    Input: array, plus 1 or more values
    Output: array with values appended to the end of the array. 
            Array values are spread out one level
    */

    concat(array, ...vals) {
        const result = [...array];
        vals.forEach((v) => {
            if (Array.isArray(v)) {
                result.push(...v);
            } else {
                result.push(v);
            }
        });
        return result;
    }

    /*
    Input: array, value
    Output: index of first occurrence of value, or -1
    */

    findIndex(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                return i;
            }
        }
        return -1;
    }

    /*
    Input: 2 or more (n) arrays of equal length (k)
    Output: array of length n with subarrays of length k
    */

    zip(...arrays) {
        if (!arrays.every(Array.isArray)) {
            throw new TypeError("Inputs must be arrays");
        }
        if (arrays.length < 2) {
            throw new Error("Expected at least two arrays");
        }
        const length = arrays[0].length;
        if (!arrays.every((arr) => arr.length === length)) {
            throw new Error("Arrays must be of equal length");
        }
        const result = [];
        for (let i = 0; i < arrays[0].length; i++) {
            const section = [];
            arrays.forEach((arr) => section.push(arr[i]));
            result.push(section);
        }
        return result;
    }

    /*
    DESTRUCTIVE
    */

    fill(array, start, end) {}

    // STRING
}

const _ = new Underline();

const a = [1, 2, 3];

console.log(_.at(a, 0));
console.log(_.at(a, -1));
console.log(_.at(a, -6));
console.log(_.at(a, 3));
