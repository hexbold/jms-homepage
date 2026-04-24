/**
 * JMS Orchestra - Main JavaScript
 */

// ========================================
// Mobile Menu Toggle
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
});

// ========================================
// Gallery Lightbox
// ========================================
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (lightbox && lightboxImg) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');

  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox on background click
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
});

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// ========================================
// Gallery Concert Switcher
// ========================================
function showConcertGallery(concertId) {
  document.querySelectorAll('.concert-gallery').forEach(function(g) {
    g.classList.remove('active');
  });
  document.querySelectorAll('.concert-cover').forEach(function(c) {
    c.classList.remove('active');
  });

  var gallery = document.getElementById('gallery-' + concertId);
  var cover = document.getElementById('cover-' + concertId);

  if (gallery) gallery.classList.add('active');
  if (cover) cover.classList.add('active');

  if (gallery) {
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
