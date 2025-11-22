let cursor = document.getElementById("cursor");
let body = document.body;

body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.clientX + "px";
  cursor.style.top = dets.clientY + "px";
});

function playSound(note) {
  let sound = new Audio(`sounds/${note}.mp3`);
  sound.play();
}

let keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
  // When mouse is pressed down
  key.addEventListener("mousedown", function () {
    let note = key.getAttribute("data-note");
    playSound(note);
    key.classList.add("active");
  });

  // When mouse is released
  key.addEventListener("mouseup", function () {
    key.classList.remove("active");
  });

  // When mouse leaves the key
  key.addEventListener("mouseleave", function () {
    key.classList.remove("active");
  });

  key.addEventListener("mouseenter", function () {
    if (event.buttons === 1) {
      let note = key.getAttribute("data-note");
      playSound(note);
      key.classList.add("active");
    }
  });
});

// Keyboard support
document.addEventListener("keydown", function (e) {
  let key = document.querySelector(`[data-key="${e.key.toLowerCase()}"]`);

  if (key && !key.classList.contains("active")) {
    let note = key.getAttribute("data-note");
    playSound(note);
    key.classList.add("active");
  }
});

document.addEventListener("keyup", function (e) {
  let key = document.querySelector(`[data-key="${e.key.toLowerCase()}"]`);
  if (key) {
    key.classList.remove("active");
  }
});
