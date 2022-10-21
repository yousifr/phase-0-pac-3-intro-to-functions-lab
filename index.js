function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string)
}
logShout("HELLO")

function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}

function introductionWithLanguage (name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}

function introductionWithLanguage (name,language="javascript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}