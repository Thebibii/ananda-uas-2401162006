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
