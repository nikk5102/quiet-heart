const SITE_PASSWORD = "mohit";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === SITE_PASSWORD) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("diaryPage").style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Wrong password";
  }
}

document.getElementById("password").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});

const petalsContainer = document.getElementById("petals");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 10 + Math.random() * 10 + "s";
  petal.style.animationDelay = Math.random() * 5 + "s";
  petal.style.transform = `scale(${0.7 + Math.random() * 0.9}) rotate(${Math.random() * 360}deg)`;

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 22000);
}

setInterval(createPetal, 900);

for (let i = 0; i < 18; i++) {
  createPetal();
}