function indexOfIgnoreCase(str, subStr) {
  if (typeof str !== "string" || typeof subStr !== "string") return -1;

  return str.toLowerCase().indexOf(subStr.toLowerCase());
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
