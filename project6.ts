const personNameWithWhitespace: string = "\t  \n  John Doe   \t\n  ";

console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

const strippedName: string = personNameWithWhitespace.trim();

console.log("\nName after stripping whitespace:");
console.log(strippedName);
