function formatPrice(price) {
  return `${price.toFixed(2).replace(".", ",")} €`;
}

function getCategoryTabTemplate(category) {
  return `<a href="#${category.id}">
    <img src="${category.icon}" alt="" width="26" height="26">
    ${category.title}
  </a>`;
}

function getDishTemplate(dish) {
  return `<article class="dish-card">
    <img class="dish-image" src="${dish.image}" alt="${dish.alt}">
    <div class="dish-copy"><h3>${dish.name}</h3><p>${dish.description}</p></div>
    <div class="dish-action">
      <strong>${formatPrice(dish.price)}</strong>
      <button type="button" data-add-dish="${dish.id}" aria-label="${dish.name} hinzufügen">+</button>
    </div>
  </article>`;
}

function getCategoryTemplate(category) {
  return `<section class="menu-category" id="${category.id}" aria-labelledby="${category.id}-title">
    <div class="category-heading">
      <img src="${category.icon}" alt="" width="42" height="42">
      <div><p class="kicker">${category.kicker}</p><h2 id="${category.id}-title">${category.title}</h2></div>
    </div>
    <div class="dish-grid">${category.items.map(getDishTemplate).join("")}</div>
  </section>`;
}

function getBasketItemTemplate(item) {
  return `<article class="basket-item">
    <strong>${item.amount} x ${item.name}</strong>
    <div class="basket-item-row">
      <button type="button" data-remove-dish="${item.id}" aria-label="${item.name} löschen">x</button>
      <button type="button" data-decrease-dish="${item.id}" aria-label="${item.name} verringern">-</button>
      <span>${item.amount}</span>
      <button type="button" data-increase-dish="${item.id}" aria-label="${item.name} erhöhen">+</button>
      <span>${formatPrice(item.price * item.amount)}</span>
    </div>
  </article>`;
}

function getBasketSummaryTemplate(subtotal, delivery, total) {
  return `<div><span>Zwischensumme</span><strong>${formatPrice(subtotal)}</strong></div>
    <div><span>Lieferkosten</span><strong>${formatPrice(delivery)}</strong></div>
    <div class="summary-total"><span>Gesamt</span><strong>${formatPrice(total)}</strong></div>`;
}

function getBasketShortcutText(amount, total) {
  if (amount === 0) return "Warenkorb leer";
  return `${amount} Artikel · ${formatPrice(total)}`;
}

function getEmptyBasketTemplate() {
  return `<p class="empty-basket">Dein Warenkorb ist noch leer.</p>`;
}
