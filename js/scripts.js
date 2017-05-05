(function () {
  // Function calls

  // Globals

  // Functions

  // Factor value into prime factors. Recursive.
  function factorRecursive(n, f=2) {
    if (n === 1) { return [] }
    else if (f>Math.ceil(Math.sqrt(n))) { return [n] }
    else if (n%f === 0) { return [f, ...factorRecursive(n/f)] }
    else { return [...factorRecursive(n, f+1)] }
  }

  // Factor value into prime factors. Recursive.
  function factorStack(n, f=2) {
    stack = (n===1) ? [1] : [];
    while (n>1) {
      if (f>Math.ceil(Math.sqrt(n))) {
        stack.push(n);
        n=1;
      }
      else if (n%f === 0) {
        stack.push(f);
        n /= f;
      }
      else { f += 1 }
    }
    return stack;
  }

  // Post entity to window
  function post(entity) {
  }

  // Animate sending and return of asynchronous function
  function animate() {
  }
});
