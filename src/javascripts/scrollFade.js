export const scrollFade = () => {
  // スクロールをすると消える
  window.addEventListener("scroll", () => {
    const goToTop = document.querySelector(".go-to-top");
    if (window.pageYOffset > 100) {
      goToTop.classList.add("active");
    } else {
      goToTop.classList.remove("active");
    }
  });
};
