function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== "number") {
    throw new Error("Not a number");
  }
}

function double(input: any) {
  assertIsNumber(input);
  return input * 2;
}

double("2");
