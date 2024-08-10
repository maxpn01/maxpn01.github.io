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

function setActiveSection(activeBtn, activeSection) {
    [workBtn, postsBtn, infoBtn].forEach(btn => 
        btn.classList.toggle("link-active", btn === activeBtn));
    
    [workSection, postsSection, infoSection].forEach(section => 
        section.style.display = section === activeSection ? 
            (section === workSection ? "block" : "flex") : 
            "none"
    );
}

workBtn.addEventListener("click", () => setActiveSection(workBtn, workSection));
postsBtn.addEventListener("click", () => setActiveSection(postsBtn, postsSection));
infoBtn.addEventListener("click", () => setActiveSection(infoBtn, infoSection));

// postImages.forEach(image => {
//     image.onclick = () => {
//         popupSection.style.display = "block";
//         popupImage.src = image.getAttribute("src");
//     }
// });

// popupCloseBtn.onclick = () => {
//     popupSection.style.display = "none";
// };

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