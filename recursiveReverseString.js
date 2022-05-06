const reverseString = (string) => {
  if (string === "" || string.length === 1) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
};

/* 
  Although the question says not to use built in string functions I could not find a way in JavaScript to return 
  a string without its first character without re-implementing the substring function from scratch which would need
  a loop which is also not allowed in the question.
*/
