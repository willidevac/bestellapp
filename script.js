async function initApp() {
  await loadComponents();
  bindMobileMenu();
  renderMenu();
  renderBasket();
  bindBasketEvents();
}

initApp();
