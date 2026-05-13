async function loadComponent(componentMount) {
  const componentPath = componentMount.dataset.component;
  const response = await fetch(componentPath);
  componentMount.innerHTML = await response.text();
  componentMount.removeAttribute("data-component");
}

async function loadComponents() {
  let componentMounts = document.querySelectorAll("[data-component]");

  while (componentMounts.length > 0) {
    await Promise.all([...componentMounts].map(loadComponent));
    componentMounts = document.querySelectorAll("[data-component]");
  }
}

loadComponents();
