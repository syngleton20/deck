class Flashcard {
	constructor(term, definition) {
		this.term = term;
		this.definition = definition;
	}
}

let flipped = false, everFlipped = false;
let flashcardIdx = 0;
const flashcards = [];

const flashcard = document.querySelector(".flashcard");
const openButton = document.querySelector(".open");
const rememberButton = document.querySelector(".remember");
const forgotButton = document.querySelector(".forgot");

/* Initialization */
flashcard.addEventListener("click", () => {flashcard_flip()});
rememberButton.addEventListener("click", () => {flashcard_remember()});
forgotButton.addEventListener("click", () => {flashcard_forgot()});

openButton.onchange = e => {
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.readAsText(file, 'UTF-8');

	reader.onload = readerEvent => {
		var content = readerEvent.target.result;
		flashcard_open(content);
	};
};

refreshView();

/* Functions */
function refreshView() {
	if (flashcards.length > 0 && flashcardIdx >= 0 && flashcardIdx < flashcards.length) {
		flashcard.style.visibility = 'visible';
		flashcard.innerHTML = flipped ? flashcards[flashcardIdx].definition : flashcards[flashcardIdx].term;

		rememberButton.style.visibility = everFlipped ? 'visible' : 'hidden';
		forgotButton.style.visibility = everFlipped ? 'visible' : 'hidden';
	} else {
		flashcard.style.visibility = 'hidden';
		rememberButton.style.visibility = 'hidden';
		forgotButton.style.visibility = 'hidden';
	}
}

function flashcard_open(content) {
	const lines = content.split("\n");
	for (let i = 0; i < lines.length; i++) {
		const parts = lines[i].split(":");

		if (parts.length != 2) continue;
		for (let j = 0; j < parts.length; j++) parts[j] = parts[j].trimStart();

		const newFlashcard = new Flashcard(parts[0], parts[1]);
		flashcards.push(newFlashcard);
	}

	refreshView();
}

function flashcard_flip() {
  flipped = !flipped;
	everFlipped = true;
	refreshView();
}

function flashcard_remember() {
	console.log("REMEMBERED! GOOD JOB");
	flashcard_next();
}

function flashcard_forgot() {
	console.log("fcking idiot");
	flashcard_next();
}

function flashcard_next() {
	flipped = false;
	everFlipped = false;
	flashcardIdx++;
	if (flashcardIdx >= flashcards.length) flashcardIdx = 0;
	refreshView();
}
