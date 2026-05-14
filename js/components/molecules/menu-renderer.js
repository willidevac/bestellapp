function renderCategoryTabs() {
  const tabs = document.querySelector("[data-category-tabs]");
  tabs.innerHTML = menuCategories.map(getCategoryTabTemplate).join("");
}

function renderMenuCategories() {
  const menuList = document.querySelector("[data-menu-list]");
  menuList.innerHTML = menuCategories.map(getCategoryTemplate).join("");
}

function renderMenu() {
  renderCategoryTabs();
  renderMenuCategories();
}
