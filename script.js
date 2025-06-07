
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menutoggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeSidebar");

    // Open sidebar on menu icon click
    menuToggle.addEventListener("click", function () {
      sidebar.style.transform = "translateX(0)";
    });

    // Close sidebar on close icon click
    closeBtn.addEventListener("click", function () {
      sidebar.style.transform = "translateX(-100%)";
    });
  });
