let text = "lorem!, ipsu, dolor- imet d ll, d";
text = text.replace(/!/g, "").replace(/,/g, "").replace(/-/g, "").replace(/:/g, "").replace(/;/g, "");

let textArr = text.split(" ");

console.log(text);
console.log("--------------------------------");

textArr.sort(function(firstElement, secondElement) {
  return secondElement.length - firstElement.length; 
})


let theMostLongWords = textArr.filter(function(word){
  return word.length == textArr[0].length;
})

console.log(theMostLongWords);

let Keys = {};

textArr.forEach(item => {
   Keys[item.length] = '';
});

textArr.forEach(item => {
   Keys[item.length] += item + " ";
});

console.log(Keys)