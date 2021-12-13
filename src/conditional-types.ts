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

// const invalid: Engine<Car> = {
//   type: "petroleum",
// };

type Bicycle = {
  power: "limbs";
};

type NoEngine = Engine<Bicycle>;

// const noEngine: NoEngine = { type: "limbs" };

const backlog = {
  releases: [
    {
      name: "Sprint 1",
      epics: [
        {
          name: "Account Management",
          tasks: [
            {
              name: "Create account",
              priority: "high",
            },
            {
              name: "Delete account",
              priority: "low",
            },
          ],
        },
      ],
    },
  ],
};

type Unarray<T> = T extends Array<infer U> ? U : T;
type Release = Unarray<typeof backlog["releases"]>;
