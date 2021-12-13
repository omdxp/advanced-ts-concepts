type Diesel = {
  type: "petroleum" | "bio" | "synthetic";
};

type Gasoline = {
  type: "hybrid" | "conventional";
};

type Bus = {
  engine: Diesel;
};

type Car = {
  engine: Gasoline;
};

type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;

type BusEngine = Engine<Bus>;

const busEngine: BusEngine = {
  type: "petroleum",
};

const carEngine: Engine<Car> = {
  type: "hybrid",
};

const invalid: Engine<Car> = {
  type: "petroleum",
};

type Bicycle = {
  power: "limbs";
};

type NoEngine = Engine<Bicycle>;

const noEngine: NoEngine = { type: "limbs" };
