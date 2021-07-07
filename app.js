const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

const context = canvas.getContext("2d");
context.strokeStyle = "#2c2c2c";
context.lineWidth = 2.5;

let painting = false;

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

function changeColor(event) {
	console.log(event.target.style);
	const color = event.target.style.backgroundColor;
	console.log(color);
	context.strokeStyle = color;
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

