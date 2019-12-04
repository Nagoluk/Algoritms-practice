let k = 4;
let m = 9;
let n = 20;
let list = [];

for(let i = m; i < n + 1; ++i){
 if(i%k == 0){
    list.push(i);
 } 
}

console.log(list);