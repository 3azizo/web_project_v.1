"use strict";
// global variabal
let main_txt = document.querySelector(".main_txt");
let M_3azizo = document.getElementById("3azizo");
let M_samy = document.getElementById("M_samy");
let main_h = document.getElementById("main_h");
let main_p = document.getElementById("main_p");
let click_My = document.querySelector(".clickMy");
let portfolio_cont = document.querySelector(".portfolio-cont");
//
// finction
M_3azizo.onclick = function () {
  main_h.textContent = `I'm Mohamed Reda abdelaziz`;
  main_p.textContent =
    "I am a student at the Faculty of Computers and Information in Mansoura";
};
//
M_samy.onclick = function () {
  main_h.textContent = `I'm Mohamed samy`;
  main_p.textContent =
    "I am a student at the Faculty of Computers and Information in Mansoura";
};
//
click_My.addEventListener("click", function () {
  let imgarr = [];
  let img_modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const openModal = function () {
    overlay.classList.remove("hidden");
    img_modal.classList.remove("hidden");
  };

  for (let i = 0; i < 18; i++) {
    var img = `img/random/random${i + 1}.jpg`;
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.classList.add(`cr${i + 1}`);
    newCard.innerHTML = `<img src="${img}">`;
    imgarr.push(newCard.innerHTML);
    portfolio_cont.appendChild(newCard);
  }
  let img_cr = document.querySelectorAll(".card");
  for (let j = 0; j < img_cr.length; j++) {
    img_cr[j].addEventListener("click", function () {
      openModal();
      console.log(imgarr);
      img_modal.innerHTML = imgarr[j];
    });
  }
  //
  //test
  //test

  //
  // CLOSE
  const closeModal = function () {
    overlay.classList.add("hidden");
    img_modal.classList.add("hidden");
  };
  overlay.addEventListener("click", closeModal);
  bclose.addEventListener("click", closeModal);
  //
  //open

  //test
  //test
  //test
  //test
  //
});
//flag
const panels = document.querySelectorAll(".panel");
panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    removactive();
    panels.classList.add("active");
  });
});
function removactive() {
  panels.forEach((panels) => {
    panels.classList.remove("active");
  });
}
//flag
