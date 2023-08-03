// Program to print a famous quote.
// Define the person name and quote.
var famous_person = "Albert Einstein";
var famousQuote = "A person who never made a mistake never tried anything new.";
// Compose the message.
var message = "".concat(famous_person, " once said, \"").concat(famousQuote, "\"");
// Print the message.
console.log(message);
// Program to strip Characters.
// Define the person's name.
var personNameWithWhitespace = "\t  \n  John Doe   \t\n  ";
// Print the name.
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);
// Strip leading.
var strippedName = personNameWithWhitespace.trim();
// Print the name.
console.log("\nName after stripping whitespace:");
console.log(strippedName);
