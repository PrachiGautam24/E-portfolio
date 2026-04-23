// ── Mobile nav ──
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ── Active nav on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#fff' : '';
  });
});

// ── Scroll reveal ──
function addRevealClasses() {
  // Section labels and headings slide from left
  document.querySelectorAll('.section-label').forEach(el => el.classList.add('reveal', 'from-right'));
  document.querySelectorAll('.full-inner h2').forEach(el => el.classList.add('reveal', 'from-left'));

  // Stats slide up with stagger
  document.querySelectorAll('.stat').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.12}s`;
  });

  // Timeline items slide from right
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.classList.add('reveal', 'from-right');
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  // Skill cards slide up with stagger
  document.querySelectorAll('.skill-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  // Project cards slide up with stagger
  document.querySelectorAll('.project-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.15}s`;
    el.style.transitionDuration = '0.65s';
  });

  // Exp cards slide from left
  document.querySelectorAll('.exp-card').forEach((el, i) => {
    el.classList.add('reveal', 'from-left');
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  // Cert items slide up with stagger
  document.querySelectorAll('.cert-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.1}s`;
    el.style.transitionDuration = '0.6s';
  });

  // Achievement cards slide up with stagger
  document.querySelectorAll('.achieve-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.15}s`;
    el.style.transitionDuration = '0.65s';
  });

  // Hobby items slide from right
  document.querySelectorAll('.hobby-item').forEach((el, i) => {
    el.classList.add('reveal', 'from-right');
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  // Contact items slide up
  document.querySelectorAll('.contact-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.12}s`;
  });

  // Big text and paragraphs
  document.querySelectorAll('.big-text').forEach(el => el.classList.add('reveal', 'from-left'));
  document.querySelectorAll('.about-stats').forEach(el => el.classList.add('reveal'));
}

// IntersectionObserver to trigger .visible
function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

addRevealClasses();
initObserver();
