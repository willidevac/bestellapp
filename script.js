async function initApp() {
  await loadComponents();
  renderMenu();
  renderBasket();
  bindBasketEvents();
}

initApp();
