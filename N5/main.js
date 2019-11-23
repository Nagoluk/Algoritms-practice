let n = 128;


function isInteger(num) {
  return (num ^ 0) === num;
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}


 //if round(math.log(n, i)) == math.log(n, i) and round(math.log(n, i)) != 1:


for(let i = 2; i < 100000; i++){
  if (Math.round(getBaseLog(n, i) == getBaseLog(n, i) && Math.round(getBaseLog(n, i))) != 1)
  {
    if(isInteger(getBaseLog(i, n))){
    console.log(n + " = " + i + "^" + getBaseLog(i, n))
    }
      
  }
}



