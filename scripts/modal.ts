import { Beer } from "../types/beer";

// Show the modal with the selected beer's details
export function showModal(beer: Beer): void {
  const modal = document.getElementById("modal")!;
  const ibuText = document.getElementById("ibu-text") as HTMLElement;
  const abvText = document.getElementById("abv-text") as HTMLElement;
  const beerImage = document.getElementById(
    "modal-beer-image"
  ) as HTMLImageElement;

  if (modal) {
    (document.getElementById("modal-title") as HTMLElement).textContent =
      beer.name;
    (document.getElementById("modal-description") as HTMLElement).textContent =
      beer.description;

    ibuText.innerHTML = `IBU <br> ${beer.ibu}`;
    abvText.textContent = `${beer.abv}%`;
    beerImage.src = beer.image_url;

    modal.style.display = "block";
  }
}

// Hide the modal
export function hideModal(): void {
  const modal = document.getElementById("modal")!;

  modal.style.display = "none";
}
