//function takes the first letter and exchanges the char code
//then the second and last letters are switched



function decipherThis(str) {
  //break into an array of strings
let words = [];
let deCypher = [];
  words=str.split(' ')
  // console.log(words);
  let regex =/\d+/;
  let regexl = /\D+/;
  for(let i=0; i<words.length; i++){
    let charSet =words[i].match(regex);
    let letters =words[i].match(regexl);
    let firstLetter =String.fromCharCode(charSet[0])
  if (letters===null){
  deCypher.push(firstLetter)
  }
 else{
   let x=letters[0].length
   // console.log('the length of this string '+letters+' is:  '+ x +' the last letter of which is: '+letters[0][x-1])
   let lastLetter =letters[0][x-1]
   if (x==1){
     deCypher.push(firstLetter+lastLetter)
   }
   else{

   let middleLetters = letters[0].substring(1,x-1)
   let secondLetter = letters[0][0]
   deCypher.push(firstLetter+lastLetter+middleLetters+secondLetter)
 }
 }
  }
console.log(deCypher);

};




decipherThis('72olle 103doo 100ya') // 'Hello good day'
decipherThis('82yade 115te 103o')   // 'Ready set go'
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') // 'Have a go at this and see how you do'
