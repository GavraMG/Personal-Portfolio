// Listen for scroll events on the window
window.addEventListener('scroll', function() {
    // Select the header element
    var header = document.querySelector("header");
    
    // Toggle the "sticky" class based on scroll position
    header.classList.toggle("sticky", window.scrollY > 0);
  });


// Skill Toggle
function elemToggleFunc(element) {
  element.classList.toggle("active");
}

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}
