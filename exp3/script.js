// Product dataset
let products = [
	{
		id: 1,
		name: "Wireless Headphones",
		category: "electronics",
		price: 99.99,
		description: "High-quality wireless headphones with noise cancellation",
		rating: 4.5,
		icon: "🎧",
	},
	{
		id: 2,
		name: "Cotton T-Shirt",
		category: "clothing",
		price: 24.99,
		description: "Comfortable 100% cotton t-shirt in various colors",
		rating: 4.2,
		icon: "👕",
	},
	{
		id: 3,
		name: "JavaScript Guide",
		category: "books",
		price: 39.99,
		description: "Complete guide to modern JavaScript programming",
		rating: 4.8,
		icon: "📚",
	},
	{
		id: 4,
		name: "Smart Watch",
		category: "electronics",
		price: 299.99,
		description: "Advanced smartwatch with health monitoring features",
		rating: 4.6,
		icon: "⌚",
	},
	{
		id: 5,
		name: "Garden Tools Set",
		category: "home",
		price: 79.99,
		description: "Professional gardening tools set with carrying case",
		rating: 4.3,
		icon: "🛠️",
	},
	{
		id: 6,
		name: "Running Shoes",
		category: "sports",
		price: 89.99,
		description: "Lightweight running shoes with superior cushioning",
		rating: 4.7,
		icon: "👟",
	},
];

// DOM elements
const categoryFilter = document.getElementById("categoryFilter");
const productsGrid = document.getElementById("productsGrid");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

// Current filtered products
let filteredProducts = [...products];

// Initialize the application
function init() {
	renderProducts(products);
	updateResultCount(products.length);

	// Add event listener
	categoryFilter.addEventListener("change", handleFilterChange);
}

// Handle filter change event
function handleFilterChange(event) {
	const selectedCategory = event.target.value;
	filterProducts(selectedCategory);
}

// Filter products based on category
function filterProducts(category) {
	if (category === "all") {
		filteredProducts = [...products];
	} else {
		filteredProducts = products.filter(
			(product) => product.category === category
		);
	}

	renderProducts(filteredProducts);
	updateResultCount(filteredProducts.length);
	toggleNoResultsMessage(filteredProducts.length === 0);
}

// Render products to the DOM
function renderProducts(productsToRender) {
	// Clear previous products
	productsGrid.innerHTML = "";

	if (productsToRender.length === 0) {
		return;
	}

	// Create product cards
	productsToRender.forEach((product) => {
		const productCard = createProductCard(product);
		productsGrid.appendChild(productCard);
	});
}

// Create individual product card
function createProductCard(product) {
	const card = document.createElement("div");
	card.className = "product-card";

	card.innerHTML = `
        <div  class="product-image">${product.icon}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-category">${capitalizeFirst(product.category)}</div>
        <div class="product-price">$${product.price}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-rating">Rating: ${product.rating}/5</div>
    `;

	return card;
}

// Update result count display
function updateResultCount(count) {
	if (count === products.length) {
		resultCount.textContent = `Showing all ${count} products`;
	} else {
		resultCount.textContent = `Showing ${count} of ${products.length} products`;
	}
}

// Toggle no results message
function toggleNoResultsMessage(show) {
	noResults.style.display = show ? "block" : "none";
	productsGrid.style.display = show ? "none" : "grid";
}

// Utility function to capitalize first letter
function capitalizeFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	init();
});
