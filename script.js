// sidebar.js

const menuToggle = document.getElementById("menutoggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Open sidebar
menuToggle.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

// Close sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// Optional: Close sidebar when a link is clicked
document.querySelectorAll(".sidebar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
});
