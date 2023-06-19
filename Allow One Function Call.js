/**
 * @param {Function} fn
 * @return {Function}
 */

 
 // Approach 1
// give fn as an input


var once = function(fn) {
    // for tracking like function is called or not
    let isCalled = false;
    // we have to return a function
    return function(...args){
        // if function is called , we have to return undefined
        if(isCalled) return undefined;
        // change is called to true
        isCalled = !isCalled;
        // it will also return a function (otherwise)
        return fn(...args);
    }
};


 // Approach 2 

/* var once = function(fn) {
    let ans = true;
    return function(...args){
        if (ans) {
            ans = false;
            return fn(...args);
        }
    }
};




 */


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
