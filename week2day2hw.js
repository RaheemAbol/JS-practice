
//max of two function
function maxOfTwoNumbers(x,y){
    if (x > y)
        return x;
    else if 
        (y > x)
        return y;
    else
        return  ('Theyre equal');
};
console.log(maxOfTwoNumbers(14,15));


//max of three function
function maxOfThreeNumbers(x,y,z){
    if (x > y && x > z)
        return x;
    else if 
        (y > x && y > z)
        return y;
    else if 
        (z > x && z > y )
        return z;   
    else
        return  ('Theyre equal');
};
console.log(maxOfThreeNumbers(12656565,14929292,172000000));

 //vowel  function

function isCharacterAVowel(character){

    var vowels =['aeiouAEIOU']; 
    if(character == vowels) {
        return true;
     } else {
        return false;
     }   
};
console.log(isCharacterAVowel('o'));

// returns length of string

function charCount(string) {
  return string.length;
};

console.log(charCount('Raheem'));


//sum 2 array
function sumArray2(numbers) {
    var total = 0;
    for (var i =0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};
console.log(sumArray2([10,20,30,40]));

//mult array
function multArray2(numbers) {
    var total = 1;
    for (var i =0; i < numbers.length; i++) {
        total = (total * numbers[i]);
    }
    return total;
};
console.log(multArray2([10,20,30,40]))


//number of arguments

function numOfArguments(one,two,three){
    return arguments.length;

};
console.log(numOfArguments("Hi","Bye"));

// reverse a string

function reverseString(str) {
    if (str === "")
    return "";
        else
    return reverseString(str.substr(1)) + str.charAt(0);     
        
};  
console.log(reverseString("Turn me around"));

 //Find longest word

function findLongestWord(arr) {
   let longestWord = '';
   for (let i = 0; i < arr.length; i++){
       if(longestWord.length < arr[i].length){
           longestWord = arr[i];

       }  
     }
     return longestWord;
};
console.log(findLongestWord(['one','two','three']));

//Filter words longer than i
function filterLongWords(complete,i) {
    var words = [];
    
    for (let z=0; z<complete.length; z++){
        if (complete[z].length > i){
            words.push(complete[z]);

        }
    }
    return words;
};
console.log(filterLongWords(["purple","blue","red"],4));

// Return Area Function
const calculateArea = function(width,height) {
    const area = width * height;
    return area;
  };

  console.log(calculateArea(260,110));

  //check back

  let isCharacterAVowel2 = letter =>{
      let vowels = 'aeiouAEIOU';

      for(var i of vowels) {
          if(letter === i) {
              return true;
          }
      }
      return false;
  };

  console.log(isCharacterAVowel2("e"));

  // 2nd bounus

  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
console.log(getFrequency("eeeeppppoooooffff"));
