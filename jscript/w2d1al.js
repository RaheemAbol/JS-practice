
//Print odd numbers
var num = 1;

while(num < 11) {
    console.log(num);
    num+= 2;
}
//Print even numbers
var num = 2;

while(num < 11) {
    console.log(num);
    num+= 2;
}
//Prints even for numbers divisable by 2. Odd for the rest.
var x = [];
for ( i= 0; i <= 20;i++){ 
    x.push(i);
    if (i%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}


