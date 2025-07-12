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

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const faqAnswer = faqItem.querySelector('.faq-answer');

      faqItem.classList.toggle('active');

      if (faqItem.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      } else {
        faqAnswer.style.maxHeight = '0';
      }

      faqQuestions.forEach((otherQuestion) => {
        const otherItem = otherQuestion.closest('.faq-item');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherItem !== faqItem && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherAnswer.style.maxHeight = '0';
        }
      });
    });
  });
});
