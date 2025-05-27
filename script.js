document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // plus petit = plus rapide

    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });


  const targets = document.querySelectorAll('.counter, .quote-box-magazine, .timeline-item, .card');

  targets.forEach(el => {
    el.classList.add('scroll-animate');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
  }

 
  const mobileMenu = document.getElementById("mobileMenu");
  const burger = document.querySelector(".burger");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
  }

  // Fermer le menu mobile quand on redimensionne vers desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
    }
  });

