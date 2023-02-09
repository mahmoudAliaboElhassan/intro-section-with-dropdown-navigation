let mytitle = document.querySelector(".first");
let myarrow = document.querySelector(".arrow");
let themyarrow = document.querySelector(".arrow1");
let up = "images/icon-arrow-up.svg";
let down = "images/icon-arrow-down.svg";
console.log(mytitle);
var toggle = false;
var thetoggle = false;
mytitle.onclick = function () {
  document.querySelector(".one").classList.toggle("show-disapear");
  document.getElementById("features").classList.add("change");
  if (toggle === true) {
    myarrow.src = up;
  } else {
    myarrow.src = down;
  }
  toggle = !toggle;
};

document.querySelector(".second").onclick = function () {
  document.querySelector(".two").classList.toggle("show-disapear");
  if (thetoggle === true) {
    themyarrow.src = up;
  } else {
    themyarrow.src = down;
  }
  thetoggle = !thetoggle;
};
let menubar = document.querySelector(".open");
let close = true;
menubar.onclick = function () {
  document.querySelector(".aside").style.display = "block";
  this.style.opacity = "0";
};
document.querySelector(".menu").onclick = function () {
  document.querySelector(".aside").style.display = "none";
  menubar.style.opacity = "1";
};
