let len = document.querySelectorAll("button").length;

for (let i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {

    let buttonPress = this.innerHTML;
    makeSound(buttonPress);
    buttonAnimation(buttonPress);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(currentKey) {
  let audio;
  switch (currentKey) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      break;

    case "a":
      audio = new Audio("./sounds/tom-2.mp3");

      break;

    case "s":
      audio = new Audio("./sounds/tom-3.mp3");

      break;

    case "d":
      audio = new Audio("./sounds/tom-4.mp3");

      break;

    case "j":
      audio = new Audio("./sounds/crash.mp3");

      break;

    case "k":
      audio = new Audio("./sounds/kick-bass.mp3");

      break;

    case "l":
      audio = new Audio("./sounds/snare.mp3");
      break;

    default:
      alert("other key");
  }
  audio.play();
}

function buttonAnimation(activeKey) {
  let animate = document.querySelector("." + activeKey);
  animate.classList.add("pressed");
  setTimeout(function () {
    animate.classList.remove("pressed");
  }, 100);
}
