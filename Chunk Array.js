/**
 * @param {Array} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @return {Array[]} - An array of arrays, where each inner array is a chunk of the original array.
 */

// Approach 1

/* 

function chunk(arr, size) {
  // Check if the size is positive.
  if (size <= 0) {
    throw new Error("Size must be a positive number");
  }

  // Create an empty array to store the chunks.
  var chunkedArray = [];

  // Iterate over the array, and for each element, add it to a new chunk.
  for (var i = 0; i < arr.length; i += size) {
    // Get the chunk of the array from the current index to the current index + size.
    var chunk = arr.slice(i, Math.min(arr.length, i + size));

    // Add the chunk to the array of chunks.
    chunkedArray.push(chunk);
  }

  // Return the array of chunks.
  return chunkedArray;
}
 
 */

// Approach 2 

var chunk = function(arr, size) {
  var chunkedArray = [];
  var index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}
