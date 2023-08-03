// Program to print a famous quote.

// Define the person name and quote.
const famous_person: string = "Albert Einstein";
const famousQuote: string = "A person who never made a mistake never tried anything new.";

// Compose the message.
const message: string = `${famous_person} once said, "${famousQuote}"`;

// Print the message.
console.log(message);



// Program to strip Characters.

// Define the person's name.
const personNameWithWhitespace: string = "\t  \n  John Doe   \t\n  ";

// Print the name.
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

// Strip leading.
const strippedName: string = personNameWithWhitespace.trim();

// Print the name.
console.log("\nName after stripping whitespace:");
console.log(strippedName);

