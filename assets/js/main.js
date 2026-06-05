(function () {
  "use strict";

  const navbar = document.querySelector("#navbar");
  const backToTop = document.querySelector(".back-to-top");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector("#navbarNav");

  const updateScrollState = () => {
    const scrolled = window.scrollY > 80;

    if (navbar) {
      navbar.classList.toggle("navbar-scrolled", scrolled);
    }

    if (backToTop) {
      backToTop.classList.toggle("active", scrolled);
    }
  };

  const setActiveNavLink = () => {
    const sections = document.querySelectorAll("section[id]");
    let currentSectionId = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active", href === `#${currentSectionId}`);
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        collapse.hide();
      }
    });
  });

  window.addEventListener("load", () => {
    updateScrollState();
    setActiveNavLink();
  });

  window.addEventListener("scroll", () => {
    updateScrollState();
    setActiveNavLink();
  });
})();
