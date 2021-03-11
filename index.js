let isFlipped = false;
let firstCard;
let secondCard;

const flip = (card) => {
  card.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = card;
  } else {
    secondCard = card;
    checkIt();
  }
};

const checkIt = () => {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
};

const success = () => {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  alert(`Congrats`);
  reset();
};

const fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
};

const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};
const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", () => flip(card)));

const shuffle = () =>
  cards.forEach((card) => (card.style.order = Math.floor(Math.random() * 16)));

shuffle();
