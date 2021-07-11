const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;

const INITIAL_COLOR = "#2c2c2c";

const context = canvas.getContext("2d");

// Initialize the canvas background to white
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

context.strokeStyle = "INITIAL_COLOR";
context.lineWidth = 2.5;
context.fillStyle = "INITIAL_COLOR";

let painting = false;
let filling = false;

function stopPainting() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;

	if (!painting) {
		console.log("creating path in ", x, ",", y);
		context.beginPath();
		context.moveTo(x, y);
	} else {
		console.log("creating line in ", x, ",", y);
		context.lineTo(x, y);
		context.stroke();
	}
}

function fillCanvas() {
	if (filling) {
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
}

function changeColor(event) {
	console.log(event.target.style);
	const color = event.target.style.backgroundColor;
	console.log(color);
	context.strokeStyle = color;
	context.fillStyle = color;
}

function changeRange(event) {
	console.log(event.target.value);
	const stroke = event.target.value;
	context.lineWidth = stroke;
}

function changeMode() {
	if (filling === true) {
		filling = false;
		mode.innerText = "Fill";
	} else {
		filling = true;
		mode.innerText = "Brush";
	}

}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
	canvas.addEventListener("click", fillCanvas);
}

if (colors) {
	Array.from(colors).forEach(color => color.addEventListener("click", changeColor));
}

if (range) {
	range.addEventListener("input", changeRange);
}

if (mode) {
	mode.addEventListener("click", changeMode);
}
