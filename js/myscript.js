let randomNumber1 = (Math.floor(Math.random()*6 +1))

let randomNumber2 = (Math.floor(Math.random()*6 +1))

console.log(randomNumber1)
console.log(randomNumber2)


if(randomNumber1 < randomNumber2){
    console.log("computer is the winner")
} else if (randomNumber1 > randomNumber2){
    console.log("I am the winner")
} else if (randomNumber2 = randomNumber1) {
   console.log("no one is the winner")
}