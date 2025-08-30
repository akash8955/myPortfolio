const nav = document.querySelector(".navbar");
const navBar = document.querySelectorAll(".nav-link");
const hireBtn = document.querySelector(".hire-me-btn");
const readBtn = document.querySelector(".read-btn");
const closeBtn = document.querySelector(".close-btn"); // Close button for hire section
const closeBtn1 = document.querySelector(".close-btn1"); // Close button for read section
const hireDetail = document.querySelector(".hire-details");
const readDetail = document.querySelector(".read-details");
const navCollapse = document.querySelector(".navbar-collapse"); // Define navCollapse

// Function for scrollbar effect
window.onscroll = () => {
  if (document.documentElement.scrollTop > 40) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// Function to hide navbar in mobile view
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show"); // Use correct variable name
  });
});

// Typing text animation
var typed = new Typed(".typing", {
  strings: ["Frontend Web Developer", "Data Analyst", "UI/UX Designer", "Freelancer"], // Fixed typo
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed2 = new Typed(".typing-2", {
  strings: ["Full Stack Developer", "Data Analyst", "UI/UX Designer", "Freelancer"], // Fixed typo
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Close button functionality for hire section
closeBtn.addEventListener("click", () => {
  hireDetail.classList.add("detail");
  hireDetail.classList.remove("showDetail");
});

// Close button functionality for read section
closeBtn1.addEventListener("click", () => {
  readDetail.classList.add("detail");
  readDetail.classList.remove("showDetail");
});

// "Hire Me" button functionality
hireBtn.addEventListener("click", () => {
  hireDetail.classList.add("showDetail");
});

// "Read More" button functionality
readBtn.addEventListener("click", () => {
  readDetail.classList.add("showDetail");
});

