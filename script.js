/* ===============================
   BASIC INTERACTIONS
================================ */

// Scroll to Services when "View Services" button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    if (btn.innerText.includes("View Services")) {
      btn.addEventListener("click", function () {
        document
          .getElementById("services")
          .scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});

/* ===============================
   BOOK APPOINTMENT ACTION
================================ */
document.addEventListener("click", function (e) {
  if (e.target.innerText === "Book Appointment") {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }
});

/* ===============================
   WHATSAPP BUTTON
================================ */
document.addEventListener("click", function (e) {
  if (e.target.innerText === "Chat on WhatsApp") {
    const phoneNumber = "919XXXXXXXXX"; // replace with real number
    const message =
      "Hello Radiance Beauty Studio, I would like to book an appointment.";
    const url =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  }
});

/* ===============================
   CALL BUTTON
================================ */
document.addEventListener("click", function (e) {
  if (e.target.innerText === "Call Now") {
    window.location.href = "tel:+919XXXXXXXXX"; // replace with real number
  }
});

/* ===============================
   NAVBAR ACTIVE LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "#333";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#d63384";
    }
  });
});

/* ===============================
   SIMPLE FADE-IN ANIMATION
================================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});
