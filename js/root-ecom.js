const themeIcon = document.querySelector(".theme-icon");
const novaLogo = document.querySelectorAll(".logo");

console.log(themeIcon);
const getCurrentTheme = () => {
  let theme = window.matchMedia("(prefers-color-scheme): dark").matches
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
  root.setAttribute("color-scheme", `${theme}`);
};

loadTheme("light");