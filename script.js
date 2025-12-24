// Theme handling - Initialize immediately
const root = document.documentElement;
const stored = localStorage.getItem('theme');

function applyTheme(theme) {
	if (theme === 'light') {
		root.setAttribute('data-theme', 'light');
		// Update button if it exists
		const themeToggle = document.getElementById('themeToggle');
		if (themeToggle) themeToggle.textContent = '☀️';
	} else {
		root.removeAttribute('data-theme');
		// Update button if it exists
		const themeToggle = document.getElementById('themeToggle');
		if (themeToggle) themeToggle.textContent = '🌙';
	}
	try {
		localStorage.setItem('theme', theme);
	} catch (e) {
		console.error('Failed to save theme to localStorage:', e);
	}
}

// Apply stored theme immediately (before DOM loads)
if (stored === 'light') {
	applyTheme('light');
} else {
	applyTheme('dark');
}

// Function to initialize interactive elements
function initializeControls() {
	const menuBtn = document.getElementById('menuBtn');
	const mobileMenu = document.getElementById('mobileMenu');
	const themeToggle = document.getElementById('themeToggle');

	console.log('Initializing controls...', { menuBtn, mobileMenu, themeToggle });

	// Mobile menu toggle
	if (menuBtn && mobileMenu) {
		// Remove any existing listeners by cloning the button
		const newMenuBtn = menuBtn.cloneNode(true);
		menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);

		let open = false;
		newMenuBtn.addEventListener('click', () => {
			open = !open;
			mobileMenu.classList.toggle('open', open);
			newMenuBtn.textContent = open ? '✕' : '☰';
		});
	}

	// Theme toggle
	if (themeToggle) {
		// Remove any existing listeners by cloning the button
		const newThemeToggle = themeToggle.cloneNode(true);
		themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);

		// Set initial icon based on current theme
		const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
		newThemeToggle.textContent = currentTheme === 'light' ? '☀️' : '🌙';

		newThemeToggle.addEventListener('click', () => {
			const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
			const next = current === 'light' ? 'dark' : 'light';
			applyTheme(next);
		});

		console.log('Theme toggle initialized');
	}
}

// Wait for navbar to be loaded, then initialize controls
function waitForNavbar() {
	const navbar = document.getElementById('navbar');

	if (navbar && navbar.innerHTML.trim() !== '') {
		// Navbar is loaded, initialize controls
		setTimeout(initializeControls, 100);
	} else {
		// Navbar not loaded yet, check again
		setTimeout(waitForNavbar, 50);
	}
}

// Start checking for navbar when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', waitForNavbar);
} else {
	waitForNavbar();
}