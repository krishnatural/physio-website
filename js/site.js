
document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Highlight active page
      const currentPage = window.location.pathname.split("/").pop();
      document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });

      // Hamburger toggle
      const hamburger = document.querySelector(".hamburger");
      const links = document.querySelector("nav .links");
      if (hamburger && links) {
        hamburger.addEventListener("click", () => {
          links.classList.toggle("open");
        });
      }
    });

  fetch("/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});