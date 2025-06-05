<script>

document.addEventListener("DOMContentLoaded", () => {

  const faqData = [

    {

      question: "What is the monthly payment of class 8?",

      answer: "We charge only 1200/- per month. You have to pay us on the first of the month."

    },

    {

      question: "Do you offer online classes?",

      answer: "Currently, we offer in-person classes only. Online classes are under consideration."

    },

    {

      question: "Can I schedule a session online?",

      answer: "You can contact us through our contact page to schedule sessions or ask questions."

    }

  ];

  const faqContainer = document.getElementById("faq-list");

  faqData.forEach((item, index) => {

    const faqItem = document.createElement("div");

    faqItem.className = "accordion-item";

    faqItem.innerHTML = `

      <button class="accordion-header" aria-expanded="false" aria-controls="faq-body-${index}" id="faq-${index}">

        ${item.question}

        <span class="icon">⌄</span>

      </button>

      <div class="accordion-body" id="faq-body-${index}" role="region" aria-labelledby="faq-${index}">

        ${item.answer}

      </div>

    `;

    faqContainer.appendChild(faqItem);

  });

  // Add interaction

  document.querySelectorAll(".accordion-header").forEach(button => {

    button.addEventListener("click", () => {

      const item = button.parentElement;

      const expanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion-item").forEach(i => {

        i.classList.remove("active");

        i.querySelector(".accordion-header").setAttribute("aria-expanded", "false");

      });

      if (!expanded) {

        item.classList.add("active");

        button.setAttribute("aria-expanded", "true");

        setTimeout(() => item.scrollIntoView({ behavior: "smooth", block: "center" }), 200);

      }

    });

  });

});

</script>