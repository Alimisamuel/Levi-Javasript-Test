

/*Question 1*/
// Given a string reverse each word in the sentence
// Input : S = "Welcome to this Javascript Guide!"


function reverseWordsArr() {
    let str1 = "Welcome to this javascript guide!";
    let reverseWord = str1.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWord.join(" ");
}

console.log(reverseWordsArr())



/*Question 2*/
// Merge the two given sorted arrays, your answer should be sorted and your algorithm should run with at least O(n) time complexity.
// Input : List 1 = [1, 2, 4], List 2 = [1, 3, 4]

// Answers should be like this = [1, 2, 3, 4]

let Arr1 = [1, 2, 4]
let Arr2 = [1, 3, 4]
let Arr3 = Arr1 + Arr2
function mergeSorted(Arr3){
    return Arr3.sort()


}


/*function mergeSorted(a, b){
    let answer = new Array(a.length + b.length), i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length){
        if ( a[i] < b[i]) {
            answer[K] = a[i]; i++;
        }else {
            answer[k] = b[j]; j++
        }
    }
    
}*/

(mergeSorted(Arr1, Arr2))


/* OR */


let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];
let arr3 = [].concat(arr1, arr2);

console.log(arr3);




/*Question 3*/
// Create a for loop that interates up to 100 while outputting "FIZZ" at multiples of 3, "Buzz" at multiple of 5 and "fizzbuzz" at multiples of 3 and 5.

function fizBuz(){
    
    for(let i = 0; i< 100; i++){
        if(i % 3 == 0){
            console.log("fizz");
        } else if(i % 5 == 0){
            console.log("buzz");
        }else if((i % 3) && (i % 5 == 0)){
            console.log("fizzbuzz");    
        } else console.log(i)
    }

    
}

console.log(fizBuz())





/*Question 4*/
// Write function that would allow you to do this?
// var addSix = createBase (6);
// addSix(10); returns 16
// addSix(21); returns 27


function createBase () {
    let num1 = 6;
    let num2 = 10;
    let num3 = 21;
    let newNum1 = num1 + num2;
    console.log(newNum1);

    let newNum2 = num3 + num1
    console.log(newNum2);
}

createBase()

