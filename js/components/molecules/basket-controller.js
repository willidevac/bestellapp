const basket = {};

function getAllDishes() {
  return menuCategories.flatMap((category) => category.items);
}

function findDishById(dishId) {
  return getAllDishes().find((dish) => dish.id === dishId);
}

function addDishToBasket(dishId, button) {
  const dish = findDishById(dishId);
  if (!basket[dishId]) basket[dishId] = { ...dish, amount: 0 };
  basket[dishId].amount += 1;
  renderBasket();
  showDishAddedFeedback(dish, button);
}

function decreaseDishAmount(dishId) {
  if (!basket[dishId]) return;
  basket[dishId].amount -= 1;
  if (basket[dishId].amount <= 0) delete basket[dishId];
  renderBasket();
}

function removeDishFromBasket(dishId) {
  delete basket[dishId];
  renderBasket();
}

function clearBasket() {
  Object.keys(basket).forEach((dishId) => delete basket[dishId]);
  renderBasket();
}

function showBasketMessage(message) {
  const basketMessage = document.querySelector("[data-basket-message]");
  if (basketMessage) basketMessage.textContent = message;
}

function handleOrder() {
  if (getBasketItems().length === 0) {
    showBasketMessage("Bitte wähle zuerst ein Gericht aus.");
    return;
  }
  clearBasket();
  showBasketMessage("Danke! Deine Testbestellung wurde aufgenommen.");
}

function handleBasketClick(target) {
  const dishId = target.dataset.increaseDish || target.dataset.addDish;
  if (dishId) addDishToBasket(dishId, target);
  if (target.dataset.decreaseDish) decreaseDishAmount(target.dataset.decreaseDish);
  if (target.dataset.removeDish) removeDishFromBasket(target.dataset.removeDish);
  if (target.dataset.orderButton !== undefined) handleOrder();
}

function bindBasketEvents() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) handleBasketClick(button);
  });
}
