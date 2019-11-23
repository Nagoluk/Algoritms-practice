let text1 = "lorem ipsum lorem dolor ddd dsdf dsg";
let text2 = "lorem ipsum ddd dsg ddd lorem";

text1 = text1.replace(/!/g, "").replace(/,/g, "").replace(/-/g, "").replace(/:/g, "").replace(/;/g, "");
text2= text2.replace(/!/g, "").replace(/,/g, "").replace(/-/g, "").replace(/:/g, "").replace(/;/g, "");

text1 = text1.split(" ");
text2 = text2.split(" ");



let hasSimpleWords = (text1, text2) =>{
  let key = {};

    for(let j = 0; j < text1.length; ++j){
      for(let a = 0; a < text2.length; ++a){
        if(text1[j].includes(text2[a])){
          key[text2[a]] = 0;
        }
      }
    }

    for(let j = 0; j < text1.length; ++j){
      for(let a = 0; a < text2.length; ++a){
        if(text1[j].includes(text2[a])){
          ++key[text2[a]];
        }
      }
    }

    return key
    
}


console.log(hasSimpleWords (text1, text2)); 
console.log(text1, text2);
