const a = [1, 2, 3] as const; // tuple
const b = a[2]!; // error

console.log(typeof b);
