document.querySelector(".js-btn").addEventListener("click", (evt) => {
  evt.preventDefault();

  document
    .querySelector(".js-btn")
    .closest(".site-header")
    .classList.toggle("open");
});
