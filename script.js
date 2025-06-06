<script>
document.addEventListener("DOMContentLoaded", function () {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const faqCategories = document.querySelectorAll('.faq-category');
  const faqQuestions = document.querySelectorAll('.faq-question');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-category');

      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      faqCategories.forEach(cat => {
        const catName = cat.getAttribute('data-category');
        cat.classList.remove('active');
        if (selected === 'all' || catName === selected) {
          cat.classList.add('active');
        }
      });
    });
  });

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('open');
    });
  });

  // Initialize with 'all' visible
  document.querySelector('.category-btn[data-category="all"]').click();
});
</script>
