function init_window() {
	window.scrollTo(0, document.body.scrollHeight);
}

window.onload = function() {
	this.setTimeout(init_window, 1000);
};

// let flipped = false;
// const card = document.getElementById("card");
// function flipCard() {
// 	flipped = !flipped;
// 	card.innerHTML = flipped ? "Flipped successfully!" : "Testing, testing, 1, 2, 3...";
// }

// const themeSelect = document.getElementById("theme-select");
// function themeChange() {
// 	console.log("test");
// 	if (themeSelect.value === "dark")
// 		document.querySelector("meta[name='theme-color']").setAttribute("content", "#121212");
// 	if (themeSelect.value === "light")
// 		document.querySelector("meta[name='theme-color']").setAttribute("content", "#cfcfcf");
// }

// /* Initialization */
// themeSelect.addEventListener("change", () => { themeChange() });

// window.addEventListener('touchstart', evt => { }, { passive: true });

// var page = document.body;
// ua = navigator.userAgent,
// 	iphone = ~ua.indexOf('iPhone') || ~ua.indexOf('iPod');

// var setupScroll = window.onload = function () {
// 	var height = document.documentElement.clientHeight;
// 	if (iphone && !fullscreen) height += 60;
// 	page.style.height = height + 'px';
// 	setTimeout(scrollTo, 0, 0, 1);
// 	this.alert("done");
// };