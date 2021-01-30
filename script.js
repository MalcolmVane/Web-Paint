const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight - 100;
var color = 'hotpink';
var rad = 5;

class Stroke {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  paint() {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

mousedown = false;

canvas.addEventListener("mousedown", () => {
  mousedown = true;
});
canvas.addEventListener("mouseup", () => {
  mousedown = false;
});
canvas.addEventListener("mousemove", (event) => {
  if(mousedown == true) {
    const newStroke = new Stroke(event.clientX, event.clientY);
    newStroke.paint();
  }
});
