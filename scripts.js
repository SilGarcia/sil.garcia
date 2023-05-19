const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // obter a posição atual do dino
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // obter a posição atual do cacto X
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detectar colisão
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // colisão
    alert("Game Over!");
  }
});

document.addEventListener("keydown", function (event) {
  jump();
});

