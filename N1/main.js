const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
const check = document.getElementById('check');



const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

document.getElementById("checkPassword").addEventListener('input', ()=>{
    document.getElementById('result').value = '';
    let pass = document.getElementById("checkPassword").value;
    let hasLower = false, hasNumber = false, hasSymbol = false, hasUpper = false;
    
    for(let a of pass){
        if(97 <= a.charCodeAt() && a.charCodeAt() <= 122){
  
            hasLower = true;
        }

        if(65 <= a.charCodeAt() && a.charCodeAt() <= 90){
            hasUpper = true;
            
        }

        if(48 <= a.charCodeAt() && a.charCodeAt() <= 57){
            hasNumber = true;
        }

        //const symbols = '!@#$%^&*(){}[]=<>/,.'
        if(a === '!' || a == '@' ||a == '#' || a == '$' ||
         a == '%' || a == '^' || a == '&' || a == '*' || a == '(' || a == ')' || a == '{' || a == '}' ||
         a == '[' || a == ']'  || a == '=' || a=="<" || a == '>' || a == '/' || a == ',' || a == '.'){
         hasSymbol = true;
           
          }
    
    }

 


  console.log(hasLower);
  console.log(hasUpper);
  console.log(hasSymbol);
  console.log(hasNumber);


  let gg = hasNumber + hasSymbol + hasUpper + hasLower;
  console.log(gg)
   

    driveLine(gg, pass.length);
    

});



clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    
  
    
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {

    if(document.getElementById("checkPassword").checked){
        alert("Привет");
    }
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function driveLine(typesCount, length) {
    console.log(typesCount);

    if(length == 0){
        document.getElementById("out").innerText = "enter password";
        document.getElementById("line").style.width = "0%";
    }

    if(length < 15) {
        document.getElementById("out").innerText = "weak password";
        document.getElementById("line").style.width = "25%";
        document.getElementById("line").style.background = "red";
        return false;
    }


    switch (typesCount){
        case 0: 
            document.getElementById("out").innerText = "enter password";
            document.getElementById("line").style.width = "0%";
            break;
        case 1: 
            document.getElementById("out").innerText = "weak password";
            document.getElementById("line").style.width = "25%";
            document.getElementById("line").style.background = "red";
            break;

        case 2: 
            document.getElementById("out").innerText = "norm password";
            document.getElementById("line").style.width = "50%";
            document.getElementById("line").style.background = "yellow";
            break;
        
        case 3: 
            document.getElementById("out").innerText = "pre-norm password";
            document.getElementById("line").style.width = "75%";
            document.getElementById("line").style.background = "greenyellow";
            break;

        case 4: 
            document.getElementById("out").innerText = "strong password";
            document.getElementById("line").style.width = "100%";
            document.getElementById("line").style.background = "green";
            break;
    }
}

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
    driveLine(typesCount, length);
    

	if(typesCount === 0) {
		return '';
    }
    
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

