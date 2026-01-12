function playGame(playerChoice) {

  // pilihan komputer
  const choices = ["batu", "gunting", "kertas"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "Seri 🤝";
  } 
  else if (
    (playerChoice === "batu" && computerChoice === "gunting") ||
    (playerChoice === "gunting" && computerChoice === "kertas") ||
    (playerChoice === "kertas" && computerChoice === "batu")
  ) {
    result = "Kamu Menang 🎉";
  } 
  else {
    result = "Kamu Kalah 😢";
  }

  document.getElementById("result").innerText =
    `Kamu pilih ${playerChoice}, komputer pilih ${computerChoice}. ${result}`;
}
