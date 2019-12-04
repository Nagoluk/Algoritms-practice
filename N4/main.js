let listOfWord = "WWW 44gg gg GG jj JJ LL gG l Soroka orokaS";
listOfWord = listOfWord.replace(/!/g, "").replace(/,/g, "").replace(/-/g, "").replace(/:/g, "").replace(/;/g, "");

let textArr = textArr2 = listOfWord.split(" ");
let abbr = " "; //абривіатури
let moreUpper = " "; //більше прописних
let moreLower = " "; //більше рядкових
let symbolsEqNum = " "; //кількість цифр дорівнює кількості знаків:
let sameSymbols = " "; //зустрічаються однакові символи 
let sameWords = " ";



for(let a = 0; a < textArr.length ; ++a){
  let upper = 0, lower = 0, number = 0;
  let set = new Set();
   for(let b of textArr[a]){
        set.add(b);
        if(97 <= b.charCodeAt() && b.charCodeAt() <= 122){
           ++lower;
        }

        if(65 <= b.charCodeAt() && b.charCodeAt() <= 90){
            ++upper;
        }

        if(48 <= b.charCodeAt() && b.charCodeAt() <= 57){
            ++number;
        }

        
    }

    if(set.size < textArr[a].length) {
        sameSymbols  +=  " " + textArr[a];
    }

    if(lower ==0 && number == 0){
        abbr += " " + textArr[a];    
    }

    if(upper > lower){
      moreUpper += " " + textArr[a];
    }

  

    if (upper < lower){
      moreLower += " " + textArr[a];
    }

 

    if(lower + upper == number){
      symbolsEqNum  +=  " " + textArr[a];
    }
 
}

let shiftWord;
while(true){

  shiftWord = textArr.shift();

  tempArray  = textArr.filter((item, index) => {
      if(shiftWord.toUpperCase() == item.toUpperCase()) textArr = textArr.slice(index)
      return shiftWord.toUpperCase() == item.toUpperCase();
  });

  if(tempArray.length!=0){
      sameWords += " | " + shiftWord + ","+ tempArray + " |";
  } 

 if(textArr.length <= 1) break
}

console.log(textArr2)
let tempArray2;
let shift;
let sameWords2 = " ";
while(true){
  shift = textArr2.shift();
  let temp1 = shift.split("").sort().join("");
  let temp2;


  tempArray2  = textArr2.filter((item, index) => {

      temp2  = item.split("").sort().join("");
      if(temp1 == temp2) {
        textArr2 = textArr2.slice(index); 
      }
      return temp1 == temp2;
  });

  if(tempArray2.length!=0){
      sameWords2 += " | " + shift + " , "+ tempArray2 + " |";
  } 

 if(textArr2.length <= 1) break
}

console.log("-----------------------------------------------------------");
console.log(listOfWord);
console.log("Більше прописних: " +  moreUpper);
console.log("Більше рядкових: " +  moreLower);
console.log("Абривіатури: " +  abbr);
console.log("Кількість цифр дорівнює кількості знаків:" + symbolsEqNum);
console.log("Зустрічаються однакові символи " + sameSymbols);
console.log("Зустрічаються однакові слова " + sameWords);
console.log("Зустрічаються однакові слова " + sameWords2);
console.log("-----------------------------------------------------------");