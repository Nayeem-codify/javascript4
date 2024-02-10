let input = document.querySelector (".input")
let btn = document.querySelector(".btn")

btn.addEventListener("click" , function(){
    if(input.type == "password"){
        input.type = "text"
        btn.innerHTML = "hide"
    }else{
        input.type = "password"
        btn.innerHTML = "Show"
    }
})

let text = "Hi My Name Nayeem"

console.log(text.slice(0,2));
console.log(text.slice(0,5));
console.log(text.slice(0,20));

let upercase = "Hi My Name Nayeem";

console.log(upercase.toUpperCase());

let lowercase = "Hi My Name Nayeem";

console.log(lowercase.toLowerCase());

let trim = "                 Hi My Name Nayeem";

console.log(trim.trim());

let repet = " JavaScript "

console.log(repet.repeat(100));

let textr = " Creative It Institute "

console.log(textr.replace("It" , "CIT"));

let textra = " Creative It Institute Institute Institute "

console.log(textra.replaceAll("Institute" , "CIT"));

let texts = " Creative It Institute "

console.log(texts.split("i"));

let texti = " Creative It Institute "

console.log(texti.indexOf("Institute"));