/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/* var argumentsLength = function(...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== undefined) {
      count++;
    }
  }
  return count;
};  */


/**
 * argumentsLength(1, 2, 3); // 3
 */
