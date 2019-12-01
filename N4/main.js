let listOfWord = "WWW 44gg gg GG jj JJ LL gG l";
listOfWord = listOfWord.replace(/!/g, "").replace(/,/g, "").replace(/-/g, "").replace(/:/g, "").replace(/;/g, "");

let textArr = listOfWord.split(" ");
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


console.log("-----------------------------------------------------------");
console.log(listOfWord);
console.log("Більше прописних: " +  moreUpper);
console.log("Більше рядкових: " +  moreLower);
console.log("Абривіатури: " +  abbr);
console.log("Кількість цифр дорівнює кількості знаків:" + symbolsEqNum);
console.log("Зустрічаються однакові символи " + sameSymbols);
console.log("Зустрічаються однакові слова " + sameWords);
console.log("-----------------------------------------------------------");