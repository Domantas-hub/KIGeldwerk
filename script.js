document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Nur UI-Feedback (kein Versand ohne Backend)
      formMsg.textContent = "Danke! Deine Nachricht wurde (simuliert) versendet.";
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const isActive = question.classList.contains("active");

      // Schließe alle
      faqQuestions.forEach(q => {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
      });

      // Wenn es nicht aktiv war, öffne es
      if (!isActive) {
        question.classList.add("active");
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
