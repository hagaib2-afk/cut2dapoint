// ========================================
// NAV SCROLL DETECTION
// ========================================

const nav = document.querySelector('.nav');
let isScrolled = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const shouldShowShadow = scrollTop > 8;

  if (shouldShowShadow && !isScrolled) {
    nav.classList.add('scrolled');
    isScrolled = true;
  } else if (!shouldShowShadow && isScrolled) {
    nav.classList.remove('scrolled');
    isScrolled = false;
  }
});

// ========================================
// NAV ACTIVE LINK
// ========================================

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link:not(.cta)');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Handle anchor links
    if (href.startsWith('#')) {
      link.classList.remove('active');
    } else if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveNavLink();

// ========================================
// PRODUCT CARD VIDEO HOVER
// ========================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  const video = card.querySelector('.product-video');
  const link = card.parentElement; // Product grid parent

  if (video) {
    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    // Navigate to product page on click
    card.addEventListener('click', () => {
      const h5 = card.querySelector('h5');
      const text = h5.textContent.toLowerCase();

      let href = 'manual.html';
      if (text.includes('electric')) href = 'electric.html';
      else if (text.includes('cornermate')) href = 'cornermate.html';

      window.location.href = href;
    });
  }
});

// ========================================
// NEWSLETTER FORM
// ========================================

const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = newsletterForm.querySelector('input[type="email"]');
    const button = newsletterForm.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Thanks!';
    button.disabled = true;

    setTimeout(() => {
      input.value = '';
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if it's a modal or special link
    if (href === '#' || href === '#products') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========================================
// FOOTER LINK HANDLING
// ========================================

document.querySelectorAll('a[href*="mailto:"]').forEach(link => {
  link.addEventListener('click', (e) => {
    // Allow default mailto behavior
    // Some users may not have email configured, but we let the browser handle it
  });
});
