// * FOR LOOPS PRACTICE 
// * EXAMPLE 1 

let names = [];
let nameArrays = ["a", "b", "c", "d", "e",];

for(let i = 0; i < nameArrays.length; i++){
  console.log(nameArrays[i] )
}

// ! EVENT TARGET


//* FIND THE SHORTEST WORD IN THE STRING
//* E.G 1

function shortestWord(string){
    let words = string.split(' ');
    let numCom = Infinity;

    for(let i = 0; i < words.length; i++){
        let word = words[i].length;
        if(word < numCom){
            numCom = word;
        }
    }
    return numCom;
}

console.log(shortestWord("What atta hbro hav"));


 //* FIND THE LONGEST WORD IN THE STRING

 function longestWord(str) {
    let longWord = str.split(' ');
    let wordCount = 0;

    for(let i = 0; i < longWord.length; i++){
        let word = longWord[i].length;
        if(word > wordCount){
            wordCount = word;
        }
    }
    return wordCount;
 }

 console.log(longestWord('What the fuck are we waiting for'));

 //* JADEN CASE 

let bigg = 'lorem Ips but tristique';
let bb = bigg.split(' ');

bb.forEach(function(word, i, arr) {
    console.log(arr[i]);
   arr[i] = word[0].toUpperCase() + word.slice(1);
})

console.log(bb.join(' '));

let arr = ['brown', 'white', 'black', 'green', 'orange',];

arr.forEach(function(element, i, arr1) {
    arr1[i] = element[0].toUpperCase() + element.slice(1); 
});

console.log(arr);

String.prototype.toJadenCase = function() {
    const words = this.split(' ');

    words.forEach(function(word, index, array) {
        array[index] = word[0].toUpperCase() + word.slice(1);
    })

    const jadenString = words.join(' ');

    return jadenString;

}

let bounce = 'whatever you do let it bounce nigga';
console.log(bounce.toJadenCase());


// * FOR EACH LOOP

let bog = [
{title: 'Call mama', description: 'Call mama and tell her you miss her', tags: 'family'},{title: 'New music', description: 'Listen to frank ocean new leak', tags: 'entertainment'}];

bog.forEach(element => {
    console.log(element.title);
    console.log(element.description);
})

// * SPREAD OPERATOR


//* ODD NUMBER
function findOdd(A) {

}

// * ANAGRAM COMPATIBLE
function anagram(original, dup){
    let o = original.toLowerCase().split('').sort().join('');
    let d = dup.toLowerCase().split('').sort().join('');

    return o === d ? true : false
}

console.log(anagram('fried','defri'));