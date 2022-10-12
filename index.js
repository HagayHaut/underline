/*    
underline prototype definition 
*/

class _ {
    constructor() {}

    /*    
    ARRAY METHODS 
    */

    /*    
    NON-DESTRUCTIVE 
    */

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

    // Destructive

    // STRING
}

const __ = new _();

const a = [1, 0, true, false, null, "a", NaN, __];
