let listOfWord = "WWW 44gg 55HH GGg www";
listOfWord = listOfWord.replace(/!/g, "").replace(/,/g, "").replace(/-/g, "").replace(/:/g, "").replace(/;/g, "");

let textArr = listOfWord.split(" ");


for(let a = 0; a < textArr.length; ++a){
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
    if(upper > lower){
      if(lower ==0 && number == 0){
        console.log("Абривіатури: " +  textArr[a]); ;    
        continue;  
      }

     console.log("Більше прописних: " +  textArr[a]);
        
    }

    if(lower + upper == number){
       console.log("Кількість цифр дорівнює кількості знаків: " + textArr[a]);
    }

    if(set.size < textArr[a].length) {
      console.log("Зустрічаються однакові символи " + textArr[a]);
    }
    
}

for(let a = 0; a < textArr.length; ++a){
  for(let b = 1; b <  textArr.length; ++b){
      if(textArr[a].toLowerCase() == textArr[b].toLowerCase()){
        console.log(textArr[a] + " == " +  textArr[b])
      }
  }
}

