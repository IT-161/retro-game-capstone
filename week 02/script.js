const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);

themeToggle.textContent =
    savedTheme === "dark"
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";

themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    themeToggle.textContent =
        newTheme === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
});