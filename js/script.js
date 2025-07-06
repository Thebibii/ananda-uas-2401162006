const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const sections = document.querySelectorAll(".section-header");

// Search functionality
searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  let hasVisibleCards = false;

  // Hide all sections first
  sections.forEach((section) => {
    section.style.display = "none";
  });

  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    const cardSection = card.closest(".gallery").previousElementSibling;

    if (searchTerm === "" || cardText.includes(searchTerm)) {
      card.style.display = "block";
      if (cardSection) {
        cardSection.style.display = "block";
      }
      hasVisibleCards = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show all sections if search is empty
  if (searchTerm === "") {
    sections.forEach((section) => {
      section.style.display = "block";
    });
  }

  // Show no results message (you can add this feature)
  if (!hasVisibleCards && searchTerm !== "") {
    console.log("No results found for: " + searchTerm);
  }
});

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".card img");

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    // Set initial opacity
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
  });
});

// Add intersection observer for card animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = Math.random() * 0.3 + "s";
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe all cards
cards.forEach((card) => {
  observer.observe(card);
});

// Add click tracking for analytics (optional)
cards.forEach((card) => {
  const link = card.querySelector(".card-link");
  if (link) {
    link.addEventListener("click", () => {
      const destinationName = card.querySelector("h3").textContent;
      console.log("Clicked destination:", destinationName);
      // You can add analytics tracking here
    });
  }
});
