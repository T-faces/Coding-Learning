const questions = [
  { sequence: [2, 4, 6, 8], answer: 10 },
  { sequence: [1, 1, 2, 3, 5], answer: 8 }, // Fibonacci
  { sequence: [9, 7, 5, 3], answer: 1 },
  { sequence: [3, 9, 27], answer: 81 },
  { sequence: [2, 3, 5, 7, 11], answer: 13 }, // bilangan prima
];

let current = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = `Pola: ${q.sequence.join(", ")}, ...`;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const user = parseInt(document.getElementById("answer").value);
  const correct = questions[current].answer;

  if (user === correct) {
    document.getElementById("result").innerText = "✅ Benar! Kamu berpikir seperti AI!";
  } else {
    document.getElementById("result").innerText = `❌ Salah. Jawaban benar: ${correct}`;
  }

  current = (current + 1) % questions.length;
  setTimeout(showQuestion, 2500);
}

window.onload = showQuestion;
