
function d6() {
    var roll = Math.floor(Math.random()*6); 
    roll += 1;
      // your code here
    return roll;
}
    for ( let i = 1; i <= 100; i++ ){
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
};
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function magic8ball(arr){
    var roll = Math.floor(Math.random()*arr.length); 
    return arr[roll];
}
for ( let i = 1; i <= 100; i++ ){

    console.log(magic8ball(lifesAnswers));
}