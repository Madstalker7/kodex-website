document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     NAV LINKS - PLAIN JUMP
  ========================== */
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      // instant jump to section, no blur/focus
      targetSection.scrollIntoView({ behavior: "auto" });
    });
  });

  /* =========================
     SIDEBAR TOGGLE
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
