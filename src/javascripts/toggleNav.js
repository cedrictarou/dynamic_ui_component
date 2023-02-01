export const toggleNav = () => {
  const humburger = document.querySelector(".humburger");
  humburger.addEventListener("click", () => {
    const html = document.querySelector("html");
    html.classList.toggle("open");
  });
};
