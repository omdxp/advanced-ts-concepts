type FinalInvoice = {
  __typename: "FinalInvoice";
  id: string;
  amount: number;
  date: Date;
};

type DraftInvoice = {
  __typename: "DraftInvoice";
  id: string;
  amount: number;
  date: Date;
  client: string;
};

type Invoice = FinalInvoice | DraftInvoice;

const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === "FinalInvoice";
};

const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === "DraftInvoice";
};

console.log(
  isFinalInvoice({
    __typename: "FinalInvoice",
    id: "",
    amount: 0,
    date: new Date(),
  })
);
