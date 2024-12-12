let ctx;
let rect;
let canvas;
let CanDraw;
let CanErase;
let marks = [];
// This is the main call for all render and create seccions;

window.onload = () => {
  DrawCanvas();
};

function DrawCanvas() {
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 800;
  canvas.classList.add("canvas");

  const canvasParent = document.getElementById("canvas-parent");
  canvasParent.appendChild(canvas);
  rect = canvas.getBoundingClientRect();

  canvas.onmousedown = (e) => {
    StartDrawing(e);
  };
  canvas.onmouseup = (e) => {
    StopDrawing(e);
  };
  canvas.onmousemove = (e) => {
    DrawPencils(e);
    erase(e);
  };
}
