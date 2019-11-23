let a = [16, 9, 7, 25, 3, 15, 8, 12, 10, 5];
let abs = [];
let obj = [];
let avarage = a.reduce((a, b) => a + b) / a.length;

abs = a.map(a=>{
  return Math.abs(a - avarage);
});

for(let k = 0; k < a.length; k++){
    obj.push({a: a[k], abs: abs[k]});
}

objs = obj.sort((a,b)=>{
  return a.abs - b.abs;
})


console.log(obj);
console.log("--------------");
console.log(abs);

