// Simple JS for fade-in and scroll animations

document.addEventListener('DOMContentLoaded', () => {
  // Fade in sections on scroll
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.2
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  sections.forEach(section => {
    section.classList.add('fade-section');
    observer.observe(section);
  });

  // Animate nav links on hover
  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('nav-animate');
    });
    link.addEventListener('mouseleave', () => {
      link.classList.remove('nav-animate');
    });
  });
});

// CSS for fade-section and nav-animate should be in style.css:
// .fade-section { opacity: 0; transform: translateY(40px); transition: opacity 1s, transform 1s; }
// .fade-section.visible { opacity: 1; transform: translateY(0); }
// .nav-animate { box-shadow: 0 0 24px #c084fc, 0 0 8px #fff; }
