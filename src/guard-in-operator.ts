// Guards
interface DeliminatedDocument {
  id: string;
  name: string;
  description: string;
  deliminated: string;
}

interface PlainTextDocument {
  id: string;
  name: string;
  description: string;
  plainText: string;
}

const printDeliminated = (doc: DeliminatedDocument) => {
  console.log(doc);
};

const printPlainText = (doc: PlainTextDocument) => {
  console.log(doc);
};

const printDocument = (doc: DeliminatedDocument | PlainTextDocument) => {
  if ("deliminated" in doc) {
    printDeliminated(doc);
  } else {
    printPlainText(doc);
  }
};

printDocument({
  id: "1",
  name: "Document 1",
  description: "This is document 1",
  deliminated: "This is document 1",
});
