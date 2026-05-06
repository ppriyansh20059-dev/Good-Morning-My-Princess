const messageBtn = document.getElementById("messageBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const loveBtn = document.getElementById("loveBtn");

messageBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

loveBtn.addEventListener("click", () => {
  alert("She is going to love this 💗");
});
