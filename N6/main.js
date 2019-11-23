
let reverse = (a, b) =>{


  let temp = a.toString();
  let temp2 = b.toString();
 
  let ar = "";
  let br = "";
  if(temp[1] == "0") {
    let ar = temp[0];
  } else{
    ar = temp[1] + temp[0];
  }

   if(temp2[1] == "0") {
    br = temp2[0];
  } else{
    br = temp2[1] + temp[0];
  }


  return {multi: ar * br, ar, br};
}

for(let a = 10; a < 100; a++){
    for(let b = 10; b < 100; b++){
     if(a*b == reverse(a, b).multi){
          console.log(a + " * " + b + " = " + reverse(a, b).br + " * " + reverse(a, b).br);
     }
        
     
  }
}


console.log(reverse(46, 96));

