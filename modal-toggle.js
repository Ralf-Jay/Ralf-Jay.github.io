const contactBtn = document.querySelectorAll(".toggle");
const formEle = document.querySelector(".form-container");

contactBtn.forEach((element) =>
  element.addEventListener("click", () => {
    formEle.classList.toggle("d-none");
    if (!formEle.classList.contains("d-none")) {
      document.getElementById("contact_Form").reset();
    }
  })
);

function hideForm() {
  formEle.classList.toggle("d-none");
}
