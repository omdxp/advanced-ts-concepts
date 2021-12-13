const a = [1, 2, 3] as const; // tuple

type IndexOf<T extends [], S extends number[]> = T["length"] extends S["length"]
  ? S[number]
  : IndexOf<T, [S["length"], ...S]>;

// a.map((_, i: IndexOf<typeof a, []>) => {
//   const c = a[i + 1];
// }); // [0, 1, 2]))

console.log(typeof a[0]);

type Row = "a" | "b";
type Col = "1" | 2;

const toPosition = (position: `${Row}${Col}`) => {
  const [row, col] = position.split("");
  return { row, col };
};

const tmp = toPosition("b2");
console.log(tmp);
