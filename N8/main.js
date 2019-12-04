let f = (k, f1, f2, f3)=>{
  if(k===1) return f1;

  if(k===2) return f2;

  if(k===3) return f3;


  return f(k-1, f2, f3, 2*f3-3*f1);

}

let n = 100;

console.log(f(n, -1, 0, -1))