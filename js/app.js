//--- Selecting input elements ---//
const inpProducts = document.querySelector("#products");
const inpOrders = document.querySelector("#orders");
const divPackage = document.querySelector("#package");
const listPackage = divPackage.querySelector(".select__dropdown");
const inpAccounting = document.querySelector("#accounting");
const inpTerminal = document.querySelector("#terminal");

//--- Selecting elements of summary ---//
// Products
const products = document.querySelector("[data-id=products]");
const productsNumber = products.querySelector(".item__calc");
const productsPrice = products.querySelector(".item__price");
console.log(products);
console.log(productsNumber);
console.log(productsPrice);

// Orders
const orders = document.querySelector("[data-id=orders]");
const ordersNumber = orders.querySelector(".item__calc");
const ordersPrice = orders.querySelector(".item__price");
console.log(orders);
console.log(ordersNumber);
console.log(ordersPrice);

//Package
const package = document.querySelector("[data-id=package]");
console.log(package);

const accounting = document.querySelector("[data-id=package]");
console.log(accounting);
const terminal = document.querySelector("[data-id=terminal]");
console.log(terminal);
const totalPrice = document.querySelector("#total-price");
console.log(totalPrice);

//--- Object containing single prices ---//
const prices = {
  product: 0.5,
  order: 0.25,
  package: {
    bascic: 0,
    professional: 25,
    premium: 60,
  },
  accounting: 10,
  terminal: 10,
};
console.log(prices.product);

//--- Event on products quantity ---//

inpProducts.addEventListener("change", function () {
  products.classList.add("open");
  productsNumber.innerText = `${inpProducts.value} * $${prices.product}`;
  let totalProductPrice = inpProducts.value * prices.product;
  productsPrice.innerText = `$${totalProductPrice}`;
});

//--- Event on orders number ---//

inpOrders.addEventListener("change", function () {
  orders.classList.add("open");
  ordersNumber.innerText = `${inpOrders.value} * $${prices.order}`;
  let totalOrderPrice = inpOrders.value * prices.order;
  ordersPrice.innerText = `$${totalOrderPrice}`;
});

//--- Event on package type ---//

divPackage.addEventListener("click", function () {
  listPackage.style.display = "block";
  // jak zrobic wybieranie opcji z listy
  // jak zrobic aby lista sie schowała?, jakies toggle?
  // package.classList.toggle("open");
});

// sprawdzenie wprowadzanej wartości do inputów??
