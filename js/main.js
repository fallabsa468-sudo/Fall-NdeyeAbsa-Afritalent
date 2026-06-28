/* 1. Compteurs animés */
const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const current = +counter.innerText;
          const increment = target / 100;

          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  });
  counters.forEach(counter => observer.observe(counter));
}
/*--scroll---*/
window.addEventListener("scroll", () => {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
/* --Bouton retour en haut--*/
const backToTopBtn = document.getElementById('backToTop');

/*Affiche le bouton après 300px de scroll*/
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

/*-- Click remonte en haut smooth--*/
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* -- 2. Dark mode - VERSION UNIQUE --*/
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
  /* ---Appliquer thème sauvegardé au chargement---*/
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";
  } else {
    themeBtn.innerHTML = "🌙";
  }

  /*--Toggle au clic--*/
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.innerHTML = isDark ? "☀️" : "🌙";
  });
}
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});
/*--Filtrage des freelances par catégorie--*/
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const freelanceCards = document.querySelectorAll('.freelance-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      
      freelanceCards.forEach(card => {
        const category = card.dataset.category;
        card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });
});
/* contact */ 
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    let isValid = true;
    
    if (document.getElementById('nom').value.trim() === '') {
      document.getElementById('error-nom').textContent = 'Le nom est requis';
      isValid = false;
    }
    if (document.getElementById('prenom').value.trim() === '') {
      document.getElementById('error-prenom').textContent = 'Le prénom est requis';
      isValid = false;
    }
    
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      document.getElementById('error-email').textContent = 'L\'email est requis';
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      document.getElementById('error-email').textContent = 'Email invalide';
      isValid = false;
    }
    
    if (document.getElementById('sujet').value === '') {
      document.getElementById('error-sujet').textContent = 'Choisissez un sujet';
      isValid = false;
    }
    
    if (document.getElementById('message').value.trim().length < 20) {
      document.getElementById('error-message').textContent = 'Minimum 20 caractères';
      isValid = false;
    }
    
    if (isValid) {
      document.getElementById('success-message').textContent = 'Message envoyé avec succès !';
      contactForm.reset();
    }
  });
}