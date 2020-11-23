// Dress Up
$(".draggable").draggable();
      $(".droppable").droppable({
        drop: function () {
          $("#3-2").removeClass("slideBeforeLock");
          $("#clothQuiz").fadeOut(1000);
          $("#clothAns").delay(1000).fadeIn(1000);
          $(".fp-controlArrow").css({"border-style": "solid"});
        },
      });

// Cards
const cards = document.querySelectorAll(".gamecard");

let matchedCard = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle("flip");
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;

      checkForMatch();
    }
}
function checkForMatch(){
  if ((firstCard.dataset.framework == "man" && secondCard.dataset.framework == "job") ||
      (firstCard.dataset.framework == "job" && secondCard.dataset.framework == "man")){
          disableCard()
      } else {
          unflipCard()
      }
}
function disableCard(){
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  matchedCard++;
  if (matchedCard == 2) {
    $("#cardQuiz").fadeOut(2000);
    $("#cardAns").delay(2000).fadeIn(2000);
  }

}

function unflipCard(){
  lockBoard = true;
  setTimeout(() => {
              firstCard.classList.remove("flip");
              secondCard.classList.remove("flip");
              lockBoard = false;
          }, 500);
}

cards.forEach(card => card.addEventListener("click", flipCard));