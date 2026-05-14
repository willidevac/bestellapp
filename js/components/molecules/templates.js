function formatPrice(price) {
  return `${price.toFixed(2).replace(".", ",")} ?`;
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
      <button type="button" data-add-dish="${dish.id}" aria-label="${dish.name} hinzuf?gen">+</button>
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
