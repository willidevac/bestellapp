function getBasketItems() {
  return Object.values(basket).filter((item) => item.amount > 0);
}

function getSubtotal() {
  return getBasketItems().reduce((sum, item) => {
    return sum + item.price * item.amount;
  }, 0);
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

function renderBasket() {
  renderBasketItems();
  renderBasketSummary();
}
