const d = document;
const workBtn = d.getElementById("work-btn");
const postsBtn = d.getElementById("posts-btn");
const infoBtn = d.getElementById("info-btn");
const workSection = d.querySelector(".work");
const postsSection = d.querySelector(".posts");
const infoSection = d.querySelector(".info");
const postImages = d.querySelectorAll(".post__image");
const popupSection = d.querySelector(".popup-section");
const popupCloseBtn = d.querySelector(".popup-section__close");
const popupImage = d.querySelector(".popup-section__image");

workBtn.addEventListener("click", () => {
    if (workBtn.className.match !== "link-active")
        workBtn.classList.add("link-active");
    postsBtn.classList.remove("link-active");
    infoBtn.classList.remove("link-active");

    workSection.style.display = "flex";
    postsSection.style.display = "none";
    infoSection.style.display = "none";
});

postsBtn.addEventListener("click", () => {
    workBtn.classList.remove("link-active");
    postsBtn.classList.toggle("link-active");
    infoBtn.classList.remove("link-active");

    workSection.style.display = "none";
    postsSection.style.display = "flex";
    infoSection.style.display = "none";
});

infoBtn.addEventListener("click", () => {
    workBtn.classList.remove("link-active");
    postsBtn.classList.remove("link-active");
    infoBtn.classList.toggle("link-active");

    workSection.style.display = "none";
    postsSection.style.display = "none";
    infoSection.style.display = "flex";
});

postImages.forEach(image => {
    image.onclick = () => {
        popupSection.style.display = "block";
        popupImage.src = image.getAttribute("src");
    }
});

popupCloseBtn.onclick = () => {
    popupSection.style.display = "none";
};

/*** CHANGING DARK/LIGHT THEME ***/

const themeBtn = d.querySelector(".theme-btn");
const themeIcon = d.getElementById("theme-icon");
const darkTheme = "dark-theme";
const darkIcon = "ri-moon-line";
const lightIcon = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => d.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeIcon.classList.contains(lightIcon) ? darkIcon : lightIcon;

if (selectedTheme) {
    d.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeIcon.classList[selectedIcon === darkIcon ? "add" : "remove"](lightIcon);
}

themeBtn.addEventListener('click', () => {
    d.body.classList.toggle(darkTheme);
    themeIcon.classList.toggle(lightIcon);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});