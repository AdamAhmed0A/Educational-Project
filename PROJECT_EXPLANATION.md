# Project Code Explanation

This document explains the structure and functionality of the code used in this educational website project.

## 1. HTML & JavaScript Logic

The project is built as a Single Page Application (of sorts) using vanilla HTML and JavaScript. `index.html` serves as the main entry point, enabling a modular structure where different sections of the page are stored in separate files within the `components/` folder and loaded dynamically.

### **Main Logic (`index.html`)**

The script in the `<head>` of `index.html` handles the assembly of the page.

*   **`fetch("path/to/component.html")`**:
    *   **Purpose**: This built-in JavaScript function is used to make an HTTP request to retrieve the content of the HTML files located in the `components` folder (e.g., `Navbar.html`, `HeroSection.html`).
    *   **How it works**: It runs asynchronously, meaning the rest of the page continues to load while the file is being fetched.

*   **`.then(res => res.text())`**:
    *   **Purpose**: processing the response from the `fetch` call.
    *   **Explanation**: It converts the raw response stream into a standard text string (which contains the HTML code).

*   **`.then(data => { document...innerHTML = data })`**:
    *   **Purpose**: Injection.
    *   **Explanation**: It takes the text content (`data`) and inserts it into the specific placeholder `div` elements on the page (e.g., `<div id="navbar">`). `insertAdjacentHTML("beforeend", data)` is also used to append content.

### **Animation Logic (Bottom of `index.html` & Components)**

*   **`IntersectionObserver`**:
    *   **Purpose**: Used to detect when elements appear on the screen while scrolling.
    *   **Usage 1 (Fade Up)**: It watches elements with the class `.fade-up`. When they enter the viewport, it adds the class `.show`, which triggers a CSS transition to fade them in and move them up.
    *   **Usage 2 (Stats Counter)**: It watches elements with the class `.stat-item`. When visible, it triggers a counting animation that increments numbers from 0 to their target value.

*   **`setInterval`**:
    *   **Purpose**: Creates the counting effect.
    *   **Explanation**: Runs a piece of code repeatedly at a set interval (every few milliseconds) to increment the displayed number until the target is reached.

### **Components Specific Logic**

*   **Navbar (`components/Navbar.html`)**:
    *   Contains a script for the **Mobile Menu**.
    *   **Event Listener**: Listens for a 'click' on the `menuBtn`.
    *   **Function**: Toggles the `open` class on the `.mobile-menu`, showing or hiding the navigation links on small screens.

---

## 2. CSS Styling (`style.css`)

The styling is broken down into modular sections within the single `style.css` file.

| Section | Line Numbers | Description |
| :--- | :--- | :--- |
| **Variables & Reset** | **1 - 24** | Defines CSS variables (colors like `--primary`, `--text`) and resets margins/padding for all elements. |
| **Navbar** | **26 - 171** | Styles the fixed navigation bar, logo, links, and the mobile responsive menu (hamburger menu). |
| **Hero Section** | **172 - 383** | Styles the top banner. Includes animations for the "pinging" dot, floating icons, and gradient text. |
| **Courses Section** | **384 - 583** | Defines the grid layout for course cards, hover effects on images, and "Enroll" buttons. |
| **CTA Section** | **584 - 704** | Styles the "Call to Action" area with a glowing effect (`.pulse-glow`) and radial gradient backgrounds. |
| **Features Section** | **705 - 808** | Layout for the features grid, including styles for icons and hover lift effects. |
| **Footer** | **810 - 936** | Styles the bottom footer, including the brand links, social icons, and grid layout. |
| **Stats Section** | **938 - 1071** | Styles the statistics counter area with large bold numbers and a dark background. |
| **Testimonials** | **1072 - 1193** | Styles the user review cards, including the quote icon, star ratings, and author avatars. |

### **Key CSS Classes Explained**

*   **`.container`**: A utility class used throughout to center content and set a maximum width (1200px).
*   **`.fade-up` & `.show`**: Used in conjunction with JavaScript. `.fade-up` sets the initial state (transparent, slightly down), and `.show` (added by JS) transitions it to fully visible and in place.
*   **`.btn`**: Base styles for all buttons, with specific modifiers like `.btn-primary` (blue) and `.btn-ghost` (transparent).
*   **`@media` queries**: Used extensively (e.g., `@media (min-width: 768px)`) to make the layout responsive, switching from single-column layouts on mobile to multi-column grids on desktop.
