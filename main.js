// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const clickedHearts=document.querySelectorAll(".like-glyph");

function likeCallback(e){
  const heart = e.target;
  mimicServerCall()
   .then(function(serverMessage){
     alert("You notified the server!");
     alert(serverMessage);
    heart.innerText= EMPTY_HEART[heart.innerText];
    heart.style.color= FULL_HEART[heart.style.color];

   })
   .catch(function(error) {
     alert("something went wrong")
   });
}

for (const glyph of clickedHearts ){
  glyph.addEventListener("click", likeCallback);}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
