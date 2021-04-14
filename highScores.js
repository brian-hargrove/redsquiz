const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores") || []);
const clearScore = document.getElementById("clearScore");

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

clearScore.addEventListener("click", function () {
  localStorage.clear();
  // window.location.assign("/");
});
