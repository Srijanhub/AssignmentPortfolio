# 🌟 Personal Portfolio Website — Srijan Halder
### Web Development Project • BossCoder School of Technology

Welcome to my **Personal Portfolio Website**! This project was built as part of the **Web Development Project Assignment** at **BossCoder School of Technology**.

---

## 📌 About Me & Project Overview
- **Name:** Srijan Halder
- **Institution:** BossCoder School of Technology
- **Program:** B.Tech in Computer Science & Engineering (1st Year, Semester 1)
- **GitHub:** [@Srijanhub](https://github.com/Srijanhub)
- **Email:** [onlinesrijanhalder@gmail.com](mailto:onlinesrijanhalder@gmail.com)

As a first-semester computer science student, I built this website to showcase my academic journey, technical skills, real-world hackathon projects, open-source contributions, and personal interests using foundational web standards: **semantic HTML5**, **modern CSS3**, and **vanilla JavaScript**.

---

## 🚀 Key Features & 11 Requirements Checklist

All 11 features required by the BossCoder project specification are fully implemented:

| # | Feature Name | Description & Implementation Details |
|---|--------------|--------------------------------------|
| **1** | **Home Section** | Prominently displays student name ("Srijan Halder"), a custom avatar with glowing developer badge, short introduction, warm welcome message, and action buttons (`About Me →`, `View Projects ↳`, `Let's Connect`). |
| **2** | **About Me Section** | Narrative introducing my background as a 1st-sem student, interest in C, Python, web development, and AI agent systems, alongside core goals and philosophy cards. |
| **3** | **Education Section** | Vertical timeline format showing BossCoder School of Technology (B.Tech CSE Sem 1), Class XII Higher Secondary (Science), and Class X Secondary school details with coursework badges and honors. |
| **4** | **Skills Section** | Visual cards and animated progress bars with percentages for both **Technical Skills** (HTML5, CSS3, JavaScript, Python, C Language, Git & GitHub) and **Non-Technical Skills** (Communication, Teamwork, Problem Solving, Time Management, Adaptability). |
| **5** | **Projects Section** | Highlighting my actual projects: **ListingForge ⚡** (Open-Weight AI E-Commerce Studio), **Mandate** (PayPal AI Hackathon 2026 Spending Firewall), **AtlasMinds** (Future Minds STEM Platform), **DayPilot** (macOS Developer HUD), and this **Portfolio Website**. Includes tags, screenshots, live modal dialogs, and GitHub source links. |
| **6** | **Open Source & Contributions** | Dedicated showcase of open-source upstream contributions and forks: `Netflix/hollow`, `django/djangoproject.com`, `psf/pyperf`, and `apache/shardingsphere`. |
| **7** | **Hobbies and Interests** | Visual cards for reading & tech blogs, photography & framing, chess strategy, lo-fi & indie music, hardware/setup tinkering, and table tennis. |
| **8** | **Achievements Section** | Real milestones: PayPal AI Hackathon 2026 Mandate Team, Hacktoberfest Open Source Contributor, BossCoder Academic Scholar, and High School Science & Tech Exhibition 1st Runner Up. |
| **9** | **Contact Section** | Contact information (email, GitHub, LinkedIn, location) and a clean contact form with Name, Email, Subject, and Message. |
| **10** | **Dark Mode & Light Mode** | Interactive sun/moon toggle switch in the navbar that smoothly swaps CSS custom property color themes across the whole site, persisting preferences in `localStorage`. |
| **11** | **Interactive Navigation** | Fixed header with backdrop blur, active section indicator tracked via `IntersectionObserver`, smooth scrolling, and a responsive mobile hamburger drawer. |
| **12** | **Responsive Design** | 100% responsive across mobile phones, tablets, laptops, and ultra-wide desktop screens using CSS Flexbox, CSS Grid, and media queries. |

---

## 🛠️ Technology Stack
- **HTML5:** Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`).
- **CSS3:** Custom Properties (variables), Flexbox, CSS Grid, Transitions, Keyframe Animations, Backdrop Filter, Media Queries.
- **JavaScript (ES6+):** Pure vanilla JavaScript (zero heavy frameworks), `IntersectionObserver` for scroll spy, DOM manipulation, client-side regular expression validation, modal management, and `localStorage`.

---

## 📂 Project Directory Structure

```text
Assignment1/
├── index.html              # Main webpage markup with all 11 sections
├── style.css               # Modern CSS3 stylesheet (Dark/Light variables, layout, responsive)
├── script.js               # Vanilla JS logic (Theme toggle, nav spy, validation, modal)
├── README.md               # Detailed project documentation and submission notes
└── assets/
    └── images/
        ├── profile-avatar.svg         # Custom developer avatar with glowing border
        ├── project-listingforge.svg   # ListingForge project preview graphic
        ├── project-mandate.svg        # PayPal Hackathon Mandate project graphic
        ├── project-atlasminds.svg     # AtlasMinds platform preview graphic
        ├── project-daypilot.svg       # DayPilot macOS flight deck preview graphic
        └── project-portfolio.svg      # Portfolio website preview graphic
```

---

## 💻 How to View & Run Locally

No build tools or package managers are required! Everything is pure, lightweight, and native to the web browser.

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer, or right-click and open with **Google Chrome**, **Mozilla Firefox**, **Safari**, or **Microsoft Edge**.

### Option 2: Using VS Code Live Server
1. Open the `Assignment1` folder in **Visual Studio Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The portfolio will automatically launch at `http://127.0.0.1:5500`.

### Option 3: Python Built-in HTTP Server
In your terminal, navigate to the project directory and run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🧪 Form Validation Testing
To test the JavaScript validation on the Contact form:
1. Try submitting empty fields: the form highlights invalid inputs and reveals specific guidance messages.
2. Enter an invalid email format (e.g. `arun@`): it detects the error using standard email pattern matching.
3. Enter a valid name, email, and message (>10 characters): a green success toast appears confirming valid input, and the form resets automatically.

---

## 📝 Student Reflection
Building this project as a first-semester student helped me solidify:
1. The importance of semantic HTML tags for accessibility and clean code structure.
2. How CSS variables make theming (Light/Dark mode) clean and maintainable with zero duplicate CSS.
3. How vanilla JavaScript can handle rich user interactions without needing bloated libraries.

*Submission for BossCoder School of Technology Web Development Assignment 1.*
