const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 5;
let robot = { x: 0, y: 0 };

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cellSize = canvas.width / gridSize;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }

  // draw robot
  ctx.fillStyle = "blue";
  ctx.fillRect(robot.x * cellSize + 5, robot.y * cellSize + 5, cellSize - 10, cellSize - 10);

  // draw star (goal)
  ctx.fillStyle = "gold";
  ctx.fillText("⭐", 4 * cellSize + 10, 4 * cellSize + 25);
}

function resetRobot() {
  robot = { x: 0, y: 0 };
  drawGrid();
}

function moveRight() {
  if (robot.x < gridSize - 1) robot.x++;
  drawGrid();
}

function moveDown() {
  if (robot.y < gridSize - 1) robot.y++;
  drawGrid();
}

function moveLeft() {
  if (robot.x > 0) robot.x--;
  drawGrid();
}

function moveUp() {
  if (robot.y > 0) robot.y--;
  drawGrid();
}

function print(msg) {
  const output = document.getElementById("output");
  output.innerText += msg + "\n";
}

function runUserCode() {
  document.getElementById("output").innerText = "";
  resetRobot();
  const code = document.getElementById("codeInput").value;
  try {
    eval(code);
    if (robot.x === 4 && robot.y === 4) {
      print("🎉 Robot berhasil sampai ke tujuan!");
    } else {
      print("❌ Belum sampai tujuan.");
    }
  } catch (e) {
    print("⚠️ Error: " + e.message);
  }
}

window.onload = drawGrid;
