const hamburger = document.querySelector(".hamburger");
const hamburgerModal = document.querySelector(".hamburgerModal");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerModal.classList.toggle("hamModalOpen");
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
});
