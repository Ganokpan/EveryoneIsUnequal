// Dress Up
$(".draggable").draggable();
$(".droppable").droppable({
  drop: function () {
    $("#3-2").removeClass("slideBeforeLock");
    $("#clothQuiz").fadeOut(1000);
    $("#clothAns").delay(1000).fadeIn(1000);
    $(".fp-controlArrow").css({ "border-style": "solid" });
  },
});

// Card game
const cards = document.querySelectorAll(".gamecard");

let matchedCard = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    this.style.transform = "scale(1.1)";
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

  firstCard.style.transition = "transform 1s";
  firstCard.style.transform = "scale(0)";
  
  secondCard.style.transition = "transform 1s";
  secondCard.style.transform = "scale(0)";
  
  matchedCard++;
  if (matchedCard == 2) {
      $("#cardQuiz").fadeOut(3000);
      $("#cardAns").fadeIn(3000);
  }
}

function unflipCard(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.style.transform = "scale(1)";
    secondCard.style.transform = "scale(1)";
    lockBoard = false;
  }, 500);
}

cards.forEach(card => card.addEventListener("click", flipCard));

//Game 1-4
$(".b3").click(function () {
  $("#quiz3").fadeOut();
  $("#ans5").fadeIn(1000);
});
$(".b4").click(function () {
  $("#quiz3").fadeOut();
  $("#ans6").fadeIn(1000);
});

//Game 4-4
$(".b1").click(function () {
  $("#quiz").fadeOut();
  $("#ans1").fadeIn(1000);
});
$(".b2").click(function () {
  $("#quiz").fadeOut();
  $("#ans2").fadeIn(1000);
});

//Game5-4
$(".bnt1").click(function () {
  $("#quiz2").fadeOut();
  $("#ans4").fadeIn(1000);
});
$(".bnt2").click(function () {
  $("#quiz2").fadeOut();
  $("#ans3").fadeIn(1000);
});