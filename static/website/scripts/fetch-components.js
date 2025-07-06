function load_component(selector, component) {
	const container = document.querySelector(selector);
	if (!container) {
		console.error(`Could not find an element with selector ${selector}`);
		return;
	}

	fetch(component)
		.then(response => {
			if (!response.ok) {
				container.innerHTML = "<p>Sorry, we could not display this, try reloading the page</p>";
				console.error(`Could not fetch: ${component}`);
				throw new Error(`Trying to fetch component ${component} for ${selector}`);
			}
			return response.text();
		})
		.then(html => {
			container.innerHTML = html;
		})
		.catch(error => {
			console.error("Error loading component: ", error);
		})
}

// Fetch header and footer
document.addEventListener("DOMContentLoaded", () => {
	load_component("#home-header", "../components/header.html");
	load_component("#home-footer", "../components/footer.html")
});
