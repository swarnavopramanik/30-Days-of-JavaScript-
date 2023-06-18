 function createHelloWorld() {
  const greeting = "Hello World";
  
  return function() {
    return greeting;
  };
} 



/* var createHelloWorld = function() {
        return () => "Hello World";
}; */
