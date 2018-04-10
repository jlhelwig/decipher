//function takes the first letter and exchanges the char code
//then the second and last letters are switched



function decipherThis(str) {
  //break into an array of strings
let words = [];
let deCypher = [];
  words=str.split(' ')
  console.log(words);
  let regex =/\d+/;
  for(let i=0; i<words.length; i++){
    let charSet =words[i].match(regex);
    let firstLetter =String.fromCharCode(charSet[0])
    if (charSet[0].length===words[i].length){

      console.log('this is one letter word: ' +String.fromCharCode(charSet[0]));

    }
    console.log(charSet[0]);
    console.log(firstLetter);
  }


};

// var str = 'aaaaa12111';

// var chars = str.slice(0, str.search(/\d/));
// var numbs = str.replace(chars, '');
//
// console.log(chars, numbs);



// decipherThis('72olle 103doo 100ya') // 'Hello good day'
// decipherThis('82yade 115te 103o')   // 'Ready set go'
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') // 'Have a go at this and see how you do'
