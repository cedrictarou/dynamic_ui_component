export const test = () => {
  console.log("test");
};

export const openModal = () => {
  const openBtn = document.querySelector("#openBtn");
  const modal = document.querySelector("#modal");
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    if (modal.classList.contains("fade-out")) {
      modal.classList.remove("fade-out");
    }
    modal.classList.add("fade-in");
  });
};

export const closeModal = () => {
  const closeBtn = document.querySelector("#closeBtn");
  const modal = document.querySelector("#modal");
  closeBtn.addEventListener("click", () => {
    if (modal.classList.contains("fade-in")) {
      modal.classList.remove("fade-in");
    }
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  });
  window.addEventListener("click", (e) => {
    if (
      !e.target.closest(".modal__content-inner") &&
      e.target.id !== "openBtn"
    ) {
      if (modal.classList.contains("fade-in")) {
        modal.classList.remove("fade-in");
      }
      modal.classList.add("fade-out");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  });
};
