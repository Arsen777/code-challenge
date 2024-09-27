interface Beer {
  name: string;
  ibu: number;
  abv: string;
  image_url: string;
  description: string;
}

// Fetch beers from the API
async function fetchBeers(): Promise<Beer[]> {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data.record as Beer[];
  } catch (error) {
    console.error("Error fetching beers:", error);

    return [];
  }
}

// Get background class based on IBU value
function getBackgroundClass(ibu: number): string {
  const firstDigit = Math.floor(ibu / 10);

  return `bg${firstDigit}`;
}

// Create a grid item for each beer
function createGridItem(beer: Beer): HTMLElement {
  const gridItem = document.createElement("div");
  gridItem.className = `grid-item ${getBackgroundClass(beer.ibu)}`;

  const name = document.createElement("h3");
  name.textContent = beer.name;
  name.className = "beer-title";

  const ibu = document.createElement("p");
  ibu.textContent = `IBU: ${beer.ibu}`;
  ibu.className = "beer-ibu";

  const abv = document.createElement("div");
  abv.className = "beer-abv";

  const abvNumber = document.createElement("p");
  abvNumber.textContent = `${beer.abv}%`;
  abvNumber.className = "beer-abv-number";

  abv.appendChild(abvNumber);

  const img = document.createElement("img");
  img.src = beer.image_url;
  img.alt = beer.name;
  img.className = "beer-image";

  gridItem.appendChild(abv);
  gridItem.appendChild(img);
  gridItem.appendChild(ibu);
  gridItem.appendChild(name);

  // Show modal when the grid item is clicked
  gridItem.addEventListener("click", () => showModal(beer));

  return gridItem;
}

// Show the modal with the selected beer's details
function showModal(beer: Beer): void {
  const modal = document.getElementById("modal")!;

  document.getElementById("modal-title")!.textContent = beer.name;
  document.getElementById("modal-description")!.textContent = beer.description;

  modal.style.display = "block";
}

// Hide the modal
function hideModal(): void {
  const modal = document.getElementById("modal")!;

  modal.style.display = "none";
}

// Toggle the dropdown visibility
function toggleDropdown(): void {
  const dropdown = document.getElementById("dropdown")!;

  dropdown.classList.toggle("visible");
}

// Add event listeners for closing the modal and showing the dropdown
function initializeEventListeners(): void {
  document.getElementById("close-modal-icon")!.addEventListener("click", hideModal);
  document
    .getElementById("dropdown-button")!
    .addEventListener("click", toggleDropdown);
}

// Initialize the app by fetching beers and populating the grid
async function initializeApp() {
  const beers = await fetchBeers();
  const gridContainer = document.getElementById("grid-container")!;

  beers.forEach((beer) => {
    const gridItem = createGridItem(beer);

    gridContainer.appendChild(gridItem);
  });

  // Initialize other event listeners
  initializeEventListeners();
}

// Start the app
initializeApp();
