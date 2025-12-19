setTimeout(() => {
    	const menuBtn = document.getElementById('menuBtn');
	const mobileMenu = document.getElementById('mobileMenu');
	const themeToggle = document.getElementById('themeToggle');


    console.log(themeToggle)
	// Mobile menu toggle (if present)
	if (menuBtn && mobileMenu) {
		let open = false;
		menuBtn.addEventListener('click', () => {
			open = !open;
			mobileMenu.classList.toggle('open', open);
			menuBtn.textContent = open ? '✕' : '☰';
		});
	}

	// Theme handling
	const root = document.documentElement;
	const stored = localStorage.getItem('theme');

	function applyTheme(theme) {
		if (theme === 'light') {
			root.setAttribute('data-theme', 'light');
			if (themeToggle) themeToggle.textContent = '☀️';
		} else {
			root.removeAttribute('data-theme');
			if (themeToggle) themeToggle.textContent = '🌙';
		}
		try { localStorage.setItem('theme', theme); } catch (e) {}
	}

	// initialize theme: use stored, otherwise prefer dark (default)
	if (stored === 'light') applyTheme('light');
	else applyTheme('dark');

	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
			const next = current === 'light' ? 'dark' : 'light';
			applyTheme(next === 'light' ? 'light' : 'dark');
		});
	}
}, 200);