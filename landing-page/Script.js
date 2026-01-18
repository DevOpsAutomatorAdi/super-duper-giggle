// COUNTDOWN TIMER
let time = 5 * 60 * 60; // 5 hours

setInterval(() => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");

  if (time > 0) time--;
}, 1000);

// FAQ ACCORDION
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
