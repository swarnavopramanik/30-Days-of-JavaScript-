/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
 var debounce = function(fn, t) {
    let timeoutId; // To keep track of the timeout ID

    return function(...args) {
        clearTimeout(timeoutId); // Clear any pending timeouts

        timeoutId = setTimeout(() => {
            fn.apply(this, args); // Execute the function after the specified delay
        }, t);
    };
}; 



/* 

var debounce = function (fn, t) {
  let timer; // A local variable to store previous setTimeout key
  return function (...args) {
    clearTimeout(timer) // clear any previously existing timer
    timer = setTimeout(()=> { // start a new timer to call after `t` ms
      fn(...args) // call the function with all the original arguments
    }, t)

  };
}; 

*/
