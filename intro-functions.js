var myObject = {
  superPower: "som text",
  anotherProperty: "something",
  whatIsThis: "I don't know",
};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

 // if-else
function max(a, b){
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}
// Ternary operator
function max2(a, b) {
  return (a > b) ? a : b;
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));
console.assert(max2(1,3) === 3);
console.assert(max2(0,3) === 3);
console.assert(max2(10,3) === 10);
console.assert(max2(-1,-3) === -1);
console.assert(max2("aaa",0) === 0);
console.assert(isNaN(max2("aaa","bbb")));
/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

// if-else if-else
function maxOfThree(a, b, c){
    if (a > b && a > c) {
      return a;
    }
    else if (b > c) {
      return b;
    }
    else {
      return c;
    }
}
// Ternary operators
function maxOfThree2(a, b, c) {
  return (a > b) ? ((a > c) ? a : c ) : ((b > c) ? b : c);
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));
console.assert(maxOfThree2(1,3,2) === 3);
console.assert(maxOfThree2(0,3,-1) === 3);
console.assert(maxOfThree2(10,3,50) === 50);
console.assert(maxOfThree2(-1,-3,-10) === -1);
console.assert(maxOfThree2("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree2("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
  char = char.toString().toUpperCase();
  switch (char) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    // and sometimes case "Y":
      return true;
    default:
      return false;
  }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){
  text = text.toString();                   // convert numbers to strings
  var newText = "";                         // empty string to fill
  var length = text.length;
  for (var i = 0; i < length; i++) {
    var currChar = text.charAt(i);           // for each char in input
    if (currChar === "a" || currChar === "e" || currChar === "i" ||
        currChar === "o" || currChar === "u" || currChar.match(/[0-9]/)) {
          newText = newText.concat(currChar);   // if vowel or number, add as is
        }
    else {
        newText = newText.concat(currChar + "o" + currChar); // else, rovarspraketize
    }
  }
  return newText;
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  var length = str.length;
  var reverse = "";                             // empty string to fill
  for (var i = length - 1; i >= 0; i--) {       // starting at end of str, iterating backwards
    reverse = reverse.concat(str.charAt(i));    // add char to reverse string
  }
  return reverse;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  sentence = sentence.replace(/[^a-zA-Z\s]/,""); // Get rid of non-letters
  var words = sentence.split(" ");               // Put words in an array
  var numWords = words.length;                   // Get number of words
  var longestWord = words[0];                    // Set first word longestWord

  for (var i = 0; i < numWords - 1; i++) {
    var testLength = words[i].length;            // Get length to test
    for (var j = 1; j < numWords; j++) {
      if (testLength < words[j].length) {        // If shorter than other word
        longestWord = words[j];                  // Set new longestWord
        break;
      }
    }
  }
  return longestWord;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
