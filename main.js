let popUp = document.querySelector(".pop-up");
let popImg = document.querySelector(".pop-up-img");
let closePopUp = document.querySelector(".close-pop-up");

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});

function showPopup(imgsrc) {
  popUp.style.display = "flex";
  popImg.src = imgsrc;
}



let menuBtn = document.querySelector(".menu-toggle");
let navMenu = document.querySelector(".nav-items");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (menuBtn.classList.contains("fa-bars")) {
      menuBtn.classList.remove("fa-bars");
      menuBtn.classList.add("fa-x");
    } else {
        menuBtn.classList.add("fa-bars");
        menuBtn.classList.remove("fa-x");
    }
   
})