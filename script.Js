document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HERO BUTTON
  ========================== */
  const heroBtn = document.getElementById("heroButton");
  const heroHeading = document.querySelector(".hero-text h2");
  const heroSection = document.querySelector(".hero");

  if (heroBtn && heroHeading) {
    heroBtn.addEventListener("click", () => {
      alert("It's an honor to be of service! 😌");
      heroHeading.textContent =
        "Web design built on clarity, performance, and clean code.";

      heroSection.style.backgroundColor = "#081f4a";
      setTimeout(() => {
        heroSection.style.backgroundColor = "transparent";
      }, 1000);
    });
  }

  /* =========================
     NAV SCROLL + FOCUS MODE
  ========================== */
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // prevent default anchor jump

// Get the target section ID from href, e.g., "#home" -> "home"
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (!targetSection) return;

      targetSection.scrollIntoView({ behavior: "smooth" });

      document.body.classList.add("focus-mode");

     // assuming you already have sections NodeList and targetSection defined
sections.forEach(section => { 
    if (section !== targetSection) {
        // blur all sections except the clicked one
        section.classList.add("blur");
        section.classList.remove("focus");
    } else {
        // remove blur and pop out the clicked section
        section.classList.remove("blur");
        section.classList.add("focus"); // pop-out style
    }
});

      targetSection.classList.remove("blur");
      targetSection.classList.add("focus");
    });
  });

  // Click anywhere outside sections → reset
  document.addEventListener("click", e => {
    if (!e.target.closest("section") && !e.target.closest("nav")) {
      sections.forEach(section => {
        section.classList.remove("blur", "focus");
      });
      document.body.classList.remove("focus-mode");
    }
  });

  /* =========================
     SIDEBAR
  ========================== */
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");

  if (openBtn && sidebar) {
    openBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  }

});

