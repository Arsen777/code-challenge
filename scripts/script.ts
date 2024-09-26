interface Beer {
  title: string;
  ibu: number;
  abv: number;
  imageUrl: string;
  description: string;
}

async function fetchBeers() {
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

  const title = document.createElement("h3");
  title.textContent = beer.title;

  const ibu = document.createElement("p");
  ibu.textContent = `IBU: ${beer.ibu}`;

  const abv = document.createElement("p");
  abv.textContent = `ABV: ${beer.abv}`;

  const img = document.createElement("img");
  img.src = beer.imageUrl;
  img.alt = beer.title;

  gridItem.appendChild(title);
  gridItem.appendChild(ibu);
  gridItem.appendChild(abv);
  gridItem.appendChild(img);

  gridItem.addEventListener("click", () => showModal(beer));

  return gridItem;
}

function showModal(beer: Beer): void {
  const modal = document.getElementById("modal")!;

  document.getElementById("modal-title")!.textContent = beer.title;
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
