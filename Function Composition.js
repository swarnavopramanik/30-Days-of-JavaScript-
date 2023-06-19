/**
 * @param {Function[]} functions
 * @return {Function}
 */ 
 // Approach 1 Runtime: 76 ms
 /* var compose = function(functions) {
    return x => functions.reduceRight((acc,f)=>f(acc),x)
};  */

// Approach 2 // Runtime: 79 ms
  var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(previous, next) {
    return function(x) {
      return next(previous(x));
    };
  });

}; 

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
