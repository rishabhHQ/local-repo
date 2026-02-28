function showCake() {
  document.getElementById("cakeBox").style.display = "block";
}

function blowCandle() {
  document.getElementById("flame").style.display = "none";
}

function cutCake() {
  const knife = document.getElementById("knife");
  const slice = document.getElementById("slice");

  knife.classList.add("cut");

  setTimeout(() => {
    slice.classList.add("show-slice");
    launchConfetti();
  }, 1500);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.background = 
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    conf.style.animationDuration = 
      2 + Math.random() * 3 + "s";
    document.body.appendChild(conf);

    setTimeout(() => {
      conf.remove();
    }, 5000);
  }
}