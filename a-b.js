
function a_or_b() {
  // Return 0 (even) or 1 (odd)
  var result = ['a','b'];
  return result[Math.round(Math.random() * 1000) % 2]
}

// Uncomment to test the randomness of a_or_b()
// var results = {a: 0, b: 0};
// for (var i = 0; i < 500000; i++) {
//   results[a_or_b()]++;
// }
// console.log(results);
