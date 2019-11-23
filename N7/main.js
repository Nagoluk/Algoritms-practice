
let m = 1;
let n = 1;
let continum = true;

while(m < 25){
  
  while(n < m){
    if(Math.floor(1/n) + Math.floor(1/m) == Math.floor(1/25)){
      continum = false;
      console.log(m, n);
      break;
    }
    else {
      n++;
    }
    
  }

  m++;

}

