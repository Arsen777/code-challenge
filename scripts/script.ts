interface Beer {
  name: string;
  ibu: number;
  abv: string;
  image_url: string;
  description: string;
}

async function fetchBeers(): Promise<Beer[]> {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9"
  );
  const data = await response.json();

  return data.record as Beer[];
}

function getBackgroundClass(ibu: number): string {
  const firstDigit = Math.floor(ibu / 10);

  return `bg${firstDigit}`;
}

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

  gridItem.addEventListener("click", () => showModal(beer));

  return gridItem;
}

function showModal(beer: Beer): void {
  const modal = document.getElementById("modal")!;

  document.getElementById("modal-title")!.textContent = beer.name;
  document.getElementById("modal-description")!.textContent = beer.description;

  modal.style.display = "block";
}

function hideModal(): void {
  const modal = document.getElementById("modal")!;

  modal.style.display = "none";
}

function toggleDropdown(): void {
  const dropdown = document.getElementById("dropdown")!;

  dropdown.classList.toggle("visible");
}

document.getElementById("close-modal")!.addEventListener("click", hideModal);
document
  .getElementById("dropdown-button")!
  .addEventListener("click", toggleDropdown);

async function initializeApp() {
  const beers = await fetchBeers();
  const gridContainer = document.getElementById("grid-container")!;

  beers.forEach((beer) => {
    const gridItem = createGridItem(beer);

    gridContainer.appendChild(gridItem);
  });
}

initializeApp();
