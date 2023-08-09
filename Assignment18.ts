// Define the array of locations
const placesToVisit: string[] = [
    "UAE",
    "Canada",
    "New York",
    "Egypt",
    "Yamen",
    "Germany"
  ];
  
  // Print the original array
  console.log("Original Order:", placesToVisit);
  
  // Print the array in alphabetical order without modifying the original array
  const sortedAlphabetical = [...placesToVisit].sort();
  console.log("Alphabetical Order:", sortedAlphabetical);
  
  // Print the original array to show it's still in its original order
  console.log("Original Order:", placesToVisit);
  
  // Print the array in reverse alphabetical order without modifying the original array
  const sortedReverseAlphabetical = [...placesToVisit].sort().reverse();
  console.log("Reverse Alphabetical Order:", sortedReverseAlphabetical);
  
  // Print the original array to show it's still in its original order
  console.log("Original Order:", placesToVisit);
  
  // Reverse the order of the original list
  placesToVisit.reverse();
  console.log("Reversed Order:", placesToVisit);
  
  // Reverse the order of the original list again to restore its original order
  placesToVisit.reverse();
  console.log("Original Order:", placesToVisit);
  
  // Sort the array in alphabetical order and print it
  const sortedArray = [...placesToVisit].sort();
  console.log("Sorted Alphabetical Order:", sortedArray);
  
  // Change the array to reverse alphabetical order by using the reverse() function
  sortedArray.reverse();
  console.log("Reverse Sorted Order:", sortedArray);
  