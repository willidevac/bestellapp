function closeMobileMenu(menuButton, mainNav) {
  menuButton.setAttribute("aria-expanded", "false");
  mainNav.removeAttribute("data-open");
}

function toggleMobileMenu(menuButton, mainNav) {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mainNav.toggleAttribute("data-open", !isOpen);
}

function bindMobileMenu() {
  const menuButton = document.querySelector("[data-menu-button]");
  const mainNav = document.querySelector("[data-main-nav]");
  if (!menuButton || !mainNav) return;

  menuButton.addEventListener("click", () => toggleMobileMenu(menuButton, mainNav));
  mainNav.addEventListener("click", () => closeMobileMenu(menuButton, mainNav));
}
