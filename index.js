const flashcard = document.querySelector(".flashcard");
const sideA = "Card - Term";
const sideB = "Card - Definition";
let flipped = false;

flashcard.addEventListener("click", () => {flashcard_flip()});

function flashcard_flip() {
    flipped = !flipped;
    flashcard.innerHTML = flipped ? sideB : sideA;
}