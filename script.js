 let currentSlide = 0;
    const slides = document.querySelectorAll(".slides img");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 3000);

    // Reveal section on scroll
    window.addEventListener("scroll", () => {
      const observerSection = document.getElementById("about-overseer");
      const rect = observerSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        observerSection.classList.add("visible");
      }
    });

     const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('showing');
    });