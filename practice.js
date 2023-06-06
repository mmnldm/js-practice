// * FOR LOOPS PRACTICE 
// * EXAMPLE 1 

let names = [];
let nameArrays = ["a", "b", "c", "d", "e",];

for(let i = 0; i < nameArrays.length; i++){
  console.log(nameArrays[i] )
}

// ! EVENT TARGET
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    console.log(e.target)
})


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