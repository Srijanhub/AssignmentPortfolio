/**
 * ==============================================================================
 * PERSONAL PORTFOLIO WEBSITE - JAVASCRIPT
 * Author: Srijan Halder (1st Year Computer Science Student)
 * Purpose: Handles Theme Switching (Dark/Light), Interactive Navigation,
 *          Active Section Highlighting, Mobile Drawer, Form Validation,
 *          and Project Details Modal Dialog.
 * ==============================================================================
 */

// Wait for the DOM to be fully loaded before attaching events
document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. THEME SWITCHING (DARK MODE & LIGHT MODE - FEATURE 9)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const bodyElement = document.body;

  // Check if a saved theme exists in localStorage; otherwise default to dark theme
  const savedTheme = localStorage.getItem('srijan-portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  // Toggle button event listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = bodyElement.classList.contains('dark-theme');
      const newTheme = isCurrentlyDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('srijan-portfolio-theme', newTheme);
    });
  }

  /**
   * Helper function to switch body classes between dark and light themes
   */
  function applyTheme(theme) {
    if (theme === 'light') {
      bodyElement.classList.remove('dark-theme');
      bodyElement.classList.add('light-theme');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    } else {
      bodyElement.classList.remove('light-theme');
      bodyElement.classList.add('dark-theme');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
      }
    }
  }


  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER TOGGLE (FEATURE 10 & 11)
     -------------------------------------------------------------------------- */
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggleBtn && navMenu) {
    // Open/close drawer on hamburger click
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(event.target) &&
          !mobileToggleBtn.contains(event.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    navMenu.classList.add('open');
    mobileToggleBtn.classList.add('active');
    mobileToggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    mobileToggleBtn.classList.remove('active');
    mobileToggleBtn.setAttribute('aria-expanded', 'false');
  }


  /* --------------------------------------------------------------------------
     3. INTERACTIVE NAVIGATION & ACTIVE SECTION HIGHLIGHTING (FEATURE 10)
     Using IntersectionObserver to highlight currently viewed section
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Detects section when it occupies the upper-middle screen
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          updateActiveNavLink(currentId);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  } else {
    // Fallback scroll listener for older browsers
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPosition = window.pageYOffset + 150;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        updateActiveNavLink(currentSectionId);
      }
    });
  }

  function updateActiveNavLink(sectionId) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }


  /* --------------------------------------------------------------------------
     4. CONTACT FORM VALIDATION (FEATURE 8)
     Validates Name, Email & Message fields before form submission
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const successAlert = document.getElementById('form-success-alert');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Simple and effective email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (contactForm) {
    // Real-time input clearing of errors
    nameInput.addEventListener('input', () => clearError(nameInput, nameError));
    emailInput.addEventListener('input', () => clearError(emailInput, emailError));
    messageInput.addEventListener('input', () => clearError(messageInput, messageError));

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent full page reload

      let isValid = true;

      // 1. Validate Name (must be at least 2 characters)
      const nameValue = nameInput.value.trim();
      if (nameValue.length < 2) {
        showError(nameInput, nameError);
        isValid = false;
      } else {
        clearError(nameInput, nameError);
      }

      // 2. Validate Email
      const emailValue = emailInput.value.trim();
      if (!emailRegex.test(emailValue)) {
        showError(emailInput, emailError);
        isValid = false;
      } else {
        clearError(emailInput, emailError);
      }

      // 3. Validate Message (must be at least 10 characters)
      const messageValue = messageInput.value.trim();
      if (messageValue.length < 10) {
        showError(messageInput, messageError);
        isValid = false;
      } else {
        clearError(messageInput, messageError);
      }

      // If all validations pass
      if (isValid) {
        // Show success alert
        if (successAlert) {
          successAlert.style.display = 'flex';
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset form inputs
        contactForm.reset();

        // Hide success message after 7 seconds
        setTimeout(() => {
          if (successAlert) {
            successAlert.style.display = 'none';
          }
        }, 7000);
      }
    });
  }

  function showError(inputElement, errorElement) {
    if (inputElement) inputElement.classList.add('input-error');
    if (errorElement) errorElement.classList.add('visible');
  }

  function clearError(inputElement, errorElement) {
    if (inputElement) inputElement.classList.remove('input-error');
    if (errorElement) errorElement.classList.remove('visible');
  }


  /* --------------------------------------------------------------------------
     5. PROJECT DETAILS MODAL DIALOG
     Shows full details, architecture, and links when clicking "View Details"
     -------------------------------------------------------------------------- */
  const projectData = {
    listingforge: {
      title: "ListingForge ⚡ Open-Weight AI E-Commerce Studio",
      tags: ["Node.js", "Express", "Open-Weight Vision Models", "Etsy API", "eBay SEO", "Local AI"],
      desc: "An e-commerce listing generator built to liberate independent vintage pickers, artisans, and resellers from expensive cloud API charges. Instead of paying $0.20 per item to proprietary APIs, ListingForge utilizes local open-weight vision and language models (via Ollama and ONNX) to analyze multi-photo uploads and generate platform-tailored SEO titles, dispute-proof condition disclosures, and full Etsy/eBay tag lists in seconds.",
      highlights: "💡 <strong>Key Features:</strong> Zero marginal inference cost per listing, local photo upload queue, automated tag scoring, dispute-proof condition notes, and export presets for multiple storefronts."
    },
    mandate: {
      title: "Mandate — Autonomous Agent Spending Firewall (PayPal Hackathon)",
      tags: ["Python 3.11", "FastAPI", "PayPal Orders v2", "PostgreSQL", "SQLite Parity", "Docker"],
      desc: "Developed during the PayPal AI Hackathon with teammate Vinay Khandia. Mandate acts as a deterministic, cryptographically auditable spending firewall sitting between autonomous AI shopping agents and payment rails. It ensures agents can only spend money within verified user bounds, sanitizes hidden HTML/CSS prompt injections, and generates immutable SHA-256 hash-chained Intent Receipts before any PayPal Order is settled.",
      highlights: "🛡️ <strong>Security Highlights:</strong> Fail-closed architecture, strict tenant isolation, SSRF-hardened merchant URL verification, and a tamper-evident Intent Receipt ledger."
    },
    atlasminds: {
      title: "AtlasMinds • Future Minds STEM Mentorship Platform",
      tags: ["HTML5", "CSS3 Glassmorphism", "JavaScript", "WebGL 3D Core", "BossCoder Backed"],
      desc: "A futuristic STEM & Agentic AI mentorship portal backed by BossCoder School of Technology. Features an interactive procedural 3D crystal computational core rendered with WebGL/Three.js, micro-cohort curriculum tracks (Python Explorer, AI Agent Builder, Real-World Creator), and interactive stage detail drawers.",
      highlights: "🚀 <strong>Design & Performance:</strong> Restrained obsidian and titanium aesthetic, smooth 90fps GPU transforms, tactile haptic feedback, and multi-course pathway architecture."
    },
    daypilot: {
      title: "DayPilot 🛸 Native macOS Developer Flight Deck",
      tags: ["Python", "macOS Automation", "BossCoder Telemetry", "JSON State", "Productivity"],
      desc: "A personal productivity companion app built to track BossCoder curriculum progress, daily coding hours, active focus modes (WORK, STUDY, RELAX), and pending GitHub pull request reviews directly from the macOS desktop without context switching.",
      highlights: "⚡ <strong>Highlights:</strong> Real-time workspace telemetry, distraction blocker, curriculum sync, and integrated focus timer."
    },
    portfolio: {
      title: "Personal Portfolio Website (Assignment 1)",
      tags: ["HTML5", "CSS3 Custom Properties", "Vanilla JavaScript", "Responsive Design"],
      desc: "The complete personal portfolio built for BossCoder School of Technology's Web Development Assignment 1. Satisfies all 11 core criteria: Home Section, About Me, Education Timeline, Skills with Progress Bars, Projects, Hobbies, Achievements, Contact Form with Client-Side Validation, Light/Dark Theme Switching, and 100% Mobile Responsive Design.",
      highlights: "🌟 <strong>Code Philosophy:</strong> Zero external JS framework dependencies, lightweight pure CSS variables, accessible semantic HTML, and humane storytelling."
    }
  };

  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalTags = document.getElementById('modal-tags');
  const modalBody = document.getElementById('modal-project-body');
  const modalHighlights = document.getElementById('modal-highlights-box');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');

  const modalTriggers = document.querySelectorAll('.modal-trigger');

  modalTriggers.forEach(button => {
    button.addEventListener('click', () => {
      const projectKey = button.getAttribute('data-project');
      const data = projectData[projectKey];

      if (data && modalBackdrop) {
        modalTitle.textContent = data.title;
        modalBody.textContent = data.desc;
        modalHighlights.innerHTML = data.highlights;

        // Render tags
        modalTags.innerHTML = '';
        data.tags.forEach(tagText => {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'tag';
          tagSpan.textContent = tagText;
          modalTags.appendChild(tagSpan);
        });

        // Set GitHub link appropriately
        if (projectKey === 'listingforge') {
          modalGithubLink.href = 'https://github.com/Srijanhub/ListingForge';
        } else if (projectKey === 'mandate') {
          modalGithubLink.href = 'https://github.com/Srijanhub/mandate';
        } else {
          modalGithubLink.href = 'https://github.com/Srijanhub';
        }

        openModal();
      }
    });
  });

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore background scrolling
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside on the backdrop
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });


  /* --------------------------------------------------------------------------
     6. FOOTER DYNAMIC YEAR
     -------------------------------------------------------------------------- */
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
