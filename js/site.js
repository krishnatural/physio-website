document.addEventListener("DOMContentLoaded", () => {
    
  // Load Navbar
  fetch("/partials/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
      const btn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      if (btn && mobileMenu) {
        btn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
          mobileMenu.classList.toggle("flex");
        });
      }
      const currentPage = window.location.pathname.split("/").pop();
      document.querySelectorAll(".nav-link, .mobile-link").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    });

  // Load Footer
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    });
});