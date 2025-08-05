// Navigation functionality
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const header = document.getElementById("header");

// Toggle navigation menu on mobile
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");

  // Change icon when menu is open
  if (navMenu.classList.contains("active")) {
    navToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Handle navigation clicks
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links and sections
    navLinks.forEach((l) => l.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Show corresponding section
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add("active");

    // Close mobile menu if open
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

    // Scroll to top
    window.scrollTo(0, 0);
  });
});

// Scroll effect for navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Theme switcher functionality
const themeOptions = document.querySelectorAll(".theme-option");
const body = document.body;
// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", currentTheme);
// Update active theme option
themeOptions.forEach((option) => {
  if (option.getAttribute("data-theme") === currentTheme) {
    option.classList.add("active");
  } else {
    option.classList.remove("active");
  }
});
// Handle theme option clicks
themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const theme = option.getAttribute("data-theme");

    // Update active theme option
    themeOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    // Apply theme
    body.setAttribute("data-theme", theme);

    // Save theme preference
    localStorage.setItem("theme", theme);
  });
});

// Experience tabs functionality
const experienceTabs = document.querySelectorAll(".experience-tab");
const experienceContents = document.querySelectorAll(".experience-content");
experienceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    experienceTabs.forEach((t) => t.classList.remove("active"));
    experienceContents.forEach((c) => c.classList.remove("active"));

    // Add active class to clicked tab
    tab.classList.add("active");

    // Show corresponding content
    const targetId = tab.getAttribute("data-tab");
    const targetContent = document.getElementById(targetId);
    targetContent.classList.add("active");
  });
});

// Year filter functionality
const yearFilterBtns = document.querySelectorAll(".year-filter-btn");
const publicationItems = document.querySelectorAll(".publication-item");
// Show all publications by default
publicationItems.forEach((item) => {
  item.classList.add("show");
});
yearFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    yearFilterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Get selected year
    const selectedYear = btn.getAttribute("data-year");

    // Show/hide publications based on selected year
    publicationItems.forEach((item) => {
      if (
        selectedYear === "all" ||
        item.getAttribute("data-year") === selectedYear
      ) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });
});

// Abstract and BibTeX functionality
document.addEventListener("DOMContentLoaded", () => {
  // Abstract buttons
  const abstractBtns = document.querySelectorAll(".abstract-btn");
  abstractBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const abstract = btn
        .closest(".publication-item")
        .querySelector(".abstract");
      const icon = btn.querySelector("i");

      abstract.classList.toggle("show");

      if (abstract.classList.contains("show")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        btn.innerHTML = '<i class="fas fa-minus"></i>Abstract';
      } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        btn.innerHTML = '<i class="fas fa-plus"></i>Abstract';
      }
    });
  });

  // BibTeX buttons
  const bibtexBtns = document.querySelectorAll(".bibtex-btn");
  bibtexBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const bibtex = btn.closest(".publication-item").querySelector(".bibtex");
      const icon = btn.querySelector("i");

      bibtex.classList.toggle("show");

      if (bibtex.classList.contains("show")) {
        icon.classList.remove("fa-quote-right");
        icon.classList.add("fa-times");
        btn.innerHTML = '<i class="fas fa-times"></i>BibTeX';
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-quote-right");
        btn.innerHTML = '<i class="fas fa-quote-right"></i>BibTeX';
      }
    });
  });
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Here you would normally send the form data to a server
  // For this example, we'll just show an alert
  alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

  // Reset form
  contactForm.reset();
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
