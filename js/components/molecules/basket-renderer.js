function getBasketItems() {
  return Object.values(basket).filter((item) => item.amount > 0);
}

function getSubtotal() {
  return getBasketItems().reduce((sum, item) => {
    return sum + item.price * item.amount;
  }, 0);
}

function getBasketAmount() {
  return getBasketItems().reduce((sum, item) => sum + item.amount, 0);
}

function renderBasketItems() {
  const basketItems = document.querySelector("[data-basket-items]");
  const items = getBasketItems();
  basketItems.innerHTML = items.length
    ? items.map(getBasketItemTemplate).join("")
    : getEmptyBasketTemplate();
}

function renderBasketSummary() {
  const basketSummary = document.querySelector("[data-basket-summary]");
  const subtotal = getSubtotal();
  const delivery = subtotal > 0 ? deliveryFee : 0;
  const total = subtotal + delivery;
  basketSummary.innerHTML = getBasketSummaryTemplate(subtotal, delivery, total);
}

function renderBasketShortcut() {
  const basketShortcut = document.querySelector("[data-basket-shortcut]");
  const basketShortcutLabel = document.querySelector("[data-basket-shortcut-label]");
  if (!basketShortcut || !basketShortcutLabel) return;
  const subtotal = getSubtotal();
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;
  const amount = getBasketAmount();
  basketShortcutLabel.textContent = getBasketShortcutText(amount, total);
  basketShortcut.toggleAttribute("data-active", subtotal > 0);
}

function renderBasket() {
  renderBasketItems();
  renderBasketSummary();
  renderBasketShortcut();
  const msg = document.querySelector("[data-basket-message]");
  if (msg) msg.textContent = "";
}
