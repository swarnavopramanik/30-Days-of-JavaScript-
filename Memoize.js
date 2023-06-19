/**
 * @param {Function} fn
 * //  This means we will be getting a function in arguments
 */



 // Approach 2 Runtime: 89 ms 


/* function memoize(fn) {
    let cache = {}; // local variable to store data
    return function(...args) {       
        let cacheKey = args.join("#").toString(); // creating a uniquie key with the arguments
        let cacheValue = cache[cacheKey]; // trying to find the unique key in local cache, if it's not there, it will return `undefined`
        
        if( cacheValue != undefined ){ 
            // coming here means we have the key in our cache, we will just return it.
            return cacheValue;
        }
        // Coming here means the value is missing in cache, hence we will calculate the function, store it in our cache and return the value.
        return cache[cacheKey] = fn(...args);
    }
} */



 // Approach 2 Runtime: 87 ms
 /* function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = String(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
} */



// Approach 2 Runtime: 82 ms

function memoize(fn) {
    
   const cache = {};
  
   return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn.apply(this, args);
    cache[key] = result;
    
    return result;
  }
  
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
