
let listM = [];

for(let n = -1000; n < 1000; n++){
  for(let m = -1000; m < 1000; m++){
    if( m== 0 || n==0){
      continue;
    }

    if((1/m) + (1/n) == (1/25)){
      if(m > n){
        listM.push({m, n});
        break;
      }
    }
  }
}

console.log(listM);
console.log(listM.sort((a,b) => {return a.m - b.m}));
console.log(listM[0]);
