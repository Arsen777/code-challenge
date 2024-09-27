// Toggle the dropdown visibility
export function toggleDropdown(): void {
  const dropdown = document.getElementById("dropdown")!;

  dropdown.classList.toggle("visible");
}

export function toggleNestedDropdown(event: MouseEvent): void {
  event.stopPropagation(); // Prevent the event from bubbling up

  // Cast currentTarget to HTMLElement
  const target = event.currentTarget as HTMLElement;
  const nestedDropdown = target.querySelector("ul");

  // Toggle the visibility of the nested dropdown
  if (nestedDropdown) {
    nestedDropdown.classList.toggle("visible");
    target.classList.toggle("active"); // Add or remove active class
  }
}
