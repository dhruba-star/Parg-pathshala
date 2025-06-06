
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.querySelector('.menu-icon');
  const closeBtn = document.getElementById('closeSidebar');

  openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  // Optional: Highlight active link based on current page
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
