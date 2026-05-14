let feedbackTimeout;
const buttonTimeouts = new WeakMap();

function resetAddButton(button) {
  button.textContent = "+";
  button.removeAttribute("data-added");
}

function markAddButton(button) {
  window.clearTimeout(buttonTimeouts.get(button));
  button.textContent = "✓";
  button.dataset.added = "true";
  buttonTimeouts.set(button, window.setTimeout(() => resetAddButton(button), 900));
}

function showAddFeedback(dishName) {
  const feedback = document.querySelector("[data-cart-feedback]");
  if (!feedback) return;
  window.clearTimeout(feedbackTimeout);
  feedback.textContent = `${dishName} wurde hinzugefügt.`;
  feedback.dataset.visible = "true";
  feedbackTimeout = window.setTimeout(() => {
    feedback.dataset.visible = "false";
  }, 1800);
}

function showDishAddedFeedback(dish, button) {
  if (!dish) return;
  showAddFeedback(dish.name);
  if (button) markAddButton(button);
}
