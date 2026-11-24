// ========================================================
// BossCoder School of Technology - Web Development Assignment 1
// Student: Srijan Halder (1st Year B.Tech CSE)
// script.js - Theme toggle, Mobile nav, Form validation & Modal
// ========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ------------------------------------------------------
  // 1. THEME SWITCHER (Dark Mode / Light Mode - Feature 9)
  // ------------------------------------------------------
  const themeBtn = document.getElementById('theme-btn');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('user-theme') || 'dark';

  if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeIcon.textContent = '🌙';
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
  }

  // Toggle theme on button click
  themeBtn.addEventListener('click', function () {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeIcon.textContent = '🌙';
      localStorage.setItem('user-theme', 'light');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeIcon.textContent = '☀️';
      localStorage.setItem('user-theme', 'dark');
    }
  });


  // ------------------------------------------------------
  // 2. MOBILE HAMBURGER MENU (Feature 10 & 11)
  // ------------------------------------------------------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const allNavItems = document.querySelectorAll('.nav-item');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  allNavItems.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });


  // ------------------------------------------------------
  // 3. HIGHLIGHT CURRENT SECTION ON SCROLL (Feature 10)
  // ------------------------------------------------------
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', function () {
    let currentSection = '';
    const scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    allNavItems.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });


  // ------------------------------------------------------
  // 4. CONTACT FORM VALIDATION (Feature 8)
  // ------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successBox = document.getElementById('form-success');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Simple regex to check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop normal form submit

    let hasErrors = false;

    // Validate Name
    if (nameInput.value.trim().length < 2) {
      nameError.classList.add('show');
      nameInput.classList.add('error-input');
      hasErrors = true;
    } else {
      nameError.classList.remove('show');
      nameInput.classList.remove('error-input');
    }

    // Validate Email
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.classList.add('show');
      emailInput.classList.add('error-input');
      hasErrors = true;
    } else {
      emailError.classList.remove('show');
      emailInput.classList.remove('error-input');
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
      messageError.classList.add('show');
      messageInput.classList.add('error-input');
      hasErrors = true;
    } else {
      messageError.classList.remove('show');
      messageInput.classList.remove('error-input');
    }

    // If everything is valid
    if (!hasErrors) {
      successBox.style.display = 'block';
      contactForm.reset();

      // Hide success message after 6 seconds
      setTimeout(function () {
        successBox.style.display = 'none';
      }, 6000);
    }
  });


  // ------------------------------------------------------
  // 5. PROJECT DETAILS POPUP MODAL (Feature 5)
  // ------------------------------------------------------
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTech = document.getElementById('modal-tech');
  const modalDesc = document.getElementById('modal-desc');
  const modalGithub = document.getElementById('modal-github');
  const modalClose = document.getElementById('modal-close');
  const modalDone = document.getElementById('modal-done');

  // Student friendly descriptions of actual projects
  const projectsData = {
    listingforge: {
      title: "ListingForge ⚡",
      tech: "Node.js, Express, Open-Source Vision Models, REST APIs",
      desc: "I started ListingForge because independent sellers spend so much time writing tags and descriptions for Etsy and eBay. Instead of calling expensive paid cloud APIs, it uses open-source vision and language models locally to turn photos into titles and tags in seconds.",
      link: "https://github.com/Srijanhub/ListingForge"
    },
    mandate: {
      title: "Mandate — PayPal AI Hackathon 2026",
      tech: "Python 3.11, FastAPI, PayPal Orders v2, SQLite, Docker",
      desc: "A hackathon project I built with my teammate Vinay Khandia! Mandate is a spending firewall that sits between AI shopping agents and real payment APIs. It verifies that the agent only buys what the user approved, stops prompt injection attacks, and keeps a verified audit log.",
      link: "https://github.com/Srijanhub/mandate"
    },
    atlasminds: {
      title: "AtlasMinds STEM Platform",
      tech: "HTML5, CSS3, JavaScript, WebGL Canvas",
      desc: "An educational platform for young minds backed by BossCoder. I worked on building responsive curriculum cards, stage selection drawers, and a clean user interface.",
      link: "https://github.com/Srijanhub"
    },
    daypilot: {
      title: "DayPilot 🛸 Student Study Desk",
      tech: "Python, macOS Scripts, JSON State Tracking",
      desc: "A personal helper tool I wrote to keep me on track with my BossCoder curriculum, record my daily study hours, and avoid getting distracted while preparing for semester exams.",
      link: "https://github.com/Srijanhub"
    },
    portfolio: {
      title: "Personal Portfolio Website (Assignment 1)",
      tech: "Semantic HTML5, CSS3 Variables, Vanilla JavaScript",
      desc: "This portfolio website itself! Built for BossCoder School of Technology Web Development Assignment 1. Covers all 11 required features: Home, About, Education, Skills, Projects, Hobbies, Achievements, Contact Form with Validation, Dark/Light Mode, and Mobile Responsiveness.",
      link: "https://github.com/Srijanhub/AssignmentPortfolio"
    }
  };

  const detailButtons = document.querySelectorAll('.detail-btn');

  detailButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const projKey = btn.getAttribute('data-project');
      const data = projectsData[projKey];

      if (data) {
        modalTitle.textContent = data.title;
        modalTech.textContent = "Tech Stack: " + data.tech;
        modalDesc.textContent = data.desc;
        modalGithub.href = data.link;
        modal.style.display = 'flex';
      }
    });
  });

  function hideModal() {
    modal.style.display = 'none';
  }

  modalClose.addEventListener('click', hideModal);
  modalDone.addEventListener('click', hideModal);

  // Close when clicking outside the modal box
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      hideModal();
    }
  });


  // ------------------------------------------------------
  // 6. DYNAMIC CURRENT YEAR IN FOOTER
  // ------------------------------------------------------
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
