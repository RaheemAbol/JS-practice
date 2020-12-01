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

console.log(maxOfTwoNumbers(12,14));

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

    var vowels ='aeiouAEIOU'; 
    if(character == vowels)
        return true;
      else
        return false;   
};
console.log(isCharacterAVowel('p'));

// returns length of string

function charCount(string) {
  return string.length;
};

console.log(charCount('Raheem'));

// sum array
function sumArray(x,y,z) {
    return x + y + z;
};
console.log(sumArray(10,15,20));

// multiplyArray
function multiplyArray(w,x,y,z) {
    return w * x * y * z;
};
console.log(multiplyArray(10,15,20,25));
