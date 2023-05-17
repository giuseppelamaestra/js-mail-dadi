
//DICE EXERCIZE

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



// MAIL EXERCIZE 

//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.
//Tenete presente che non è permesso utilizzare
 //funzioni built-in degli array come Array.includes() e Array.indexOf(), pena l'annullamento dell'esercizio.

 const Email = prompt("add your e-mail") 

 const EmailList = ["gina@gmail.com", "JudithButler@gmail.com", "PaulPreciado@tiscali.it", "KarlMarx@alice.it", "DrusillaFoer@virgilio.it"]



 for (let i = 0; i < Email.length; i++){
    
    if(Email === EmailList[i]){
        console.log("si")
    } else  {
        console.log("no")
    }
    

 }



