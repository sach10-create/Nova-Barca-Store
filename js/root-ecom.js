const themeIcon = document.querySelector(".theme-icon");
const novaLogo = document.querySelectorAll(".logo");

console.log(themeIcon);
const getCurrentTheme = () => {
  let theme = window.matchMedia("(prefers-color-scheme): light").matches
    ? "dark"
    : "light";
  localStorage.getItem("nova.theme")
    ? (theme = localStorage.getItem("nova.theme"))
    : null;
  console.log(theme);
  return theme;
};

const loadTheme = (theme) => {
  const root = document.querySelector(":root");
  if (theme === "light") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    novaLogo.forEach((item) => {
      item.src = "../../../components/assets/nova-logo-light.png";
    });
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    novaLogo.forEach((item) => {
      item.src = "../../../components/assets/nova-logo-dark.png";
    });
  }
  root.setAttribute("color-scheme", `${theme}`);
};

themeIcon.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  localStorage.setItem("nova.theme", `${theme}`);
  loadTheme(theme);
});
window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
