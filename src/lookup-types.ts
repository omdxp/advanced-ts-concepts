type Route = {
  origin: {
    city: string;
    state: string;
    departureFee: number;
  };
  destination: {
    city: string;
    state: string;
    arrivalFee: number;
  };
};

type Origin = Route["origin"];
type Destination = Route["destination"];

const tripOrigin: Origin = {
  city: "New York",
  state: "NY",
  departureFee: 100,
};

const tripDestination: Destination = {
  city: "Miami",
  state: "FL",
  arrivalFee: 200,
};
