let userName = prompt("Hi, who are");
userName ? document.getElementById('greeting').innerText= `Hello, ${userName}!`:
document.getElementById('greeting').innerText= `Hello, stranger!`;



function shakeMagic8Ball(){

    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    let userQuestion = prompt('What is your question for the mighty 8 ball?')

    switch (randomNumber) {
        case 0:
          eightBall ="It is certain"
          imageElement.src = 'path/to/your/image.jpg';
          imageElement.style.display = 'block';
          break;
        case 1:
          eightBall ="It is decidedly so";
          break;
        case 2:
          eightBall ="Reply hazy try again";
          break;
        case 3:
         eightBall ="Cannot predict now";
          break;
        case 4:
         eightBall ="Do not count on it";
          break;
        case 5:
          eightBall ="My sources say no";
          break;
        case 6:
          eightBall ="Outlook not so good";
          break;
        case 7:
         eightBall ="Signs point to yes";
          break;
      }      

      

      document.getElementById('response1').innerText = `${userName} has asked the Magic 8 Ball: ${userQuestion}. The wise and wondrous 8 ball hs replied ${eightBall}.`

}








