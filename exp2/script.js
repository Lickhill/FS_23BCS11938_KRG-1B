const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const pageTitle = document.getElementById("pageTitle");
const navLinks = document.querySelectorAll(".nav-link");
const dashboardContent = document.getElementById("dashboardContent");

let isDark = localStorage.getItem("theme") === "dark";

function toggleTheme() {
	isDark = !isDark;
	document.body.setAttribute("data-theme", isDark ? "dark" : "light");
	themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
	localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleSidebar() {
	sidebar.classList.toggle("open");
	overlay.classList.toggle("active");
}

function closeSidebar() {
	sidebar.classList.remove("open");
	overlay.classList.remove("active");
}

function changePage(pageName) {
	pageTitle.textContent = pageName;
	navLinks.forEach((link) => link.classList.remove("active"));
	event.target.classList.add("active");

	// Show/hide dashboard content based on page
	if (pageName === "Dashboard") {
		dashboardContent.style.display = "grid";
	} else {
		dashboardContent.style.display = "none";
	}

	if (window.innerWidth <= 768) {
		closeSidebar();
	}
}

// Initialize theme based on system preference and localStorage
function initializeTheme() {
	// Check for saved theme preference or default to system preference
	const savedTheme = localStorage.getItem("theme");
	const systemPrefersDark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	if (savedTheme) {
		isDark = savedTheme === "dark";
	} else {
		isDark = systemPrefersDark;
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}

	document.body.setAttribute("data-theme", isDark ? "dark" : "light");
	themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
}

// Animate chart bars on page load
function animateCharts() {
	const chartBars = document.querySelectorAll(".chart-bar");
	chartBars.forEach((bar, index) => {
		bar.style.transform = "scaleY(0)";
		bar.style.transformOrigin = "bottom";
		bar.style.transition = "transform 0.6s ease";

		setTimeout(() => {
			bar.style.transform = "scaleY(1)";
		}, index * 100);
	});
}

// Event listeners
themeToggle.addEventListener("click", toggleTheme);
menuBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

navLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		changePage(link.getAttribute("data-page"));
	});
});

// Listen for system theme changes
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (e) => {
		if (!localStorage.getItem("theme")) {
			isDark = e.matches;
			document.body.setAttribute("data-theme", isDark ? "dark" : "light");
			themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
		}
	});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
	initializeTheme();
	animateCharts();
});
