// Скрипт для фильтрации персонажей по тир-листу и анимации меню

document.addEventListener('DOMContentLoaded', () => {
  // ====== Фильтрация по тир-листу ======
  const tierButtons = document.querySelectorAll('.tier-filter');
  const heroCards = document.querySelectorAll('.hero-card');

  tierButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tier = button.dataset.tier;
      heroCards.forEach(card => {
        if (tier === 'all' || card.dataset.tier === tier) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ====== Анимация меню при прокрутке ======
  const nav = document.querySelector('nav');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      nav.style.top = '-60px'; // скрыть вверх
    } else {
      nav.style.top = '0'; // показать меню
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // ====== Плавное появление элементов при прокрутке ======
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
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

  animatedElements.forEach(el => observer.observe(el));
});
