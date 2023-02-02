export const scrollTop = () => {
  const goToTop = document.querySelector(".go-to-top");
  goToTop.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};
