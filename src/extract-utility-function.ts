type Trip =
  | {
      origin: {
        uuid: string;
        city: string;
        state: string;
      };
    }
  | {
      originUuid: string;
    };

type TripWithOriginRef = Extract<Trip, { originUuid: string }>;

type TripWithOrigin = Extract<Trip, { origin: { uuid: string } }>;

const tripOriginRef: TripWithOriginRef = {
  originUuid: "123",
};

const tripOriginWhole: TripWithOrigin = {
  origin: {
    uuid: "123",
    city: "New York",
    state: "NY",
  },
};
