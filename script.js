let who = ['The dog','My grandma','His turtle','My bird', 'My Pikachu', 'Arceus'];
let action = ['ate','peed','crushed','broke', 'distortioned', 'teleported'];
let what = ['my homework', 'the keys', 'the car', "space and time", "my house", "my girlfriend"];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying', 'in the end of the world'];
let boton = document.getElementById("boton")
let excusa = document.getElementById("excuse")


function random(anArray){
    let number = Math.random()
    number = Math.floor(number * 10)
    while (number >= anArray.length) {
        number = Math.random()
        number = Math.floor(number * 10)
    }
    return number;
}

function phrase(who, action, what, when){
    let a = who[random(who)]
    let b = action[random(action)]
    let c = what[random(what)]
    let d = when[random(when)]
    let phrase = a+' '+b+' '+c+' '+d

    return phrase;
}

boton.onclick = function(){
    excusa.innerHTML = phrase(who, action, what, when)
}


