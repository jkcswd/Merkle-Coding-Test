const longestSequence = (sequence) => {
  /*
  The function uses counters to keep track of longest sequence allowing the use of only one for 
  loop making a function with a runtime of O(n) as toLowerCase() also has a runtime of O(n). 
  */
  const lowerSequence = sequence.toLowerCase();
  let currentChar = "";
  let maxChar = "";
  let currentCount = 0;
  let maxCount = 1;

  for (const char of lowerSequence) {
    if (char === currentChar) {
      currentCount++;
    } else {
      currentChar = char;
      currentCount = 1;
    }

    if (currentCount === maxCount) {
      // Logic to handle equal counts on two characters as logical operators compare strings alphabetically.
      if (currentChar < maxChar) {
        maxChar = currentChar;
      }
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = char;
    }
  }

  return { [`${maxChar}`]: maxCount };
};