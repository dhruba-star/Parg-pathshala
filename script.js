// sidebar.js

const menuToggle = document.getElementById("menutoggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Open sidebar
menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Close sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Optional: Close sidebar when a nav link is clicked
document.querySelectorAll(".sidebar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
