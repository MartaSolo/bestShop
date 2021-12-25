/*
Function calculating the price. The price is automatically updated according to the values passed by aa user.

Author: MartaSolo
Date: 12.2021
*/


//--- Selecting elements ---//

//Selecting input elements
const inpProducts = document.querySelector("#products");
const inpOrders = document.querySelector("#orders");
const divPackage = document.querySelector("#package");
const listPackage = document.querySelectorAll(".select__dropdown li");
const inpAccounting = document.querySelector("#accounting");
const inpTerminal = document.querySelector("#terminal");

//Selecting elements of summary
// Products
const products = document.querySelector("[data-id=products]");
const productsNumber = products.querySelector(".item__calc");
const productsPrice = products.querySelector(".item__price");

// Orders
const orders = document.querySelector("[data-id=orders]");
const ordersNumber = orders.querySelector(".item__calc");
const ordersPrice = orders.querySelector(".item__price");

//Package
const package = document.querySelector("[data-id=package]");
const packageType = package.querySelector(".item__calc");
const packagePrice = package.querySelector(".item__price");

//Accounting
const accounting = document.querySelector("[data-id=accounting]");
const accountingPrice = accounting.querySelector(".item__price");

//Terminal
const terminal = document.querySelector("[data-id=terminal]");
const terminalPrice = terminal.querySelector(".item__price");

// Total price
const totalPrice = document.querySelector("#total-price");
const totalPriceSum = totalPrice.querySelector(".total__price");


//--- Object containing single prices ---//
const prices = {
  product: 0.5,
  order: 0.25,
  package: {
    basic: 0,
    professional: 25,
    premium: 60,
  },
  accounting: 10,
  terminal: 5,
};

// --- Functions ---//

// Function calculating the total price
function sumPrice() {
  let sum = 0;
  // products
  if (inpProducts.value > 0 && inpProducts.value % 1 === 0) {
    sum += inpProducts.value * prices.product;
  }
  // orders
  if (inpOrders.value > 0 && inpOrders.value % 1 === 0) {
    sum += inpOrders.value * prices.order;
  }
  // package
  for (el of listPackage) {
    if (el.dataset.value === divPackage.dataset.value) {
      sum += prices.package[divPackage.dataset.value];
    }
  }
  // accounting
  if (inpAccounting.checked) {
    sum += prices.accounting;
  }
  // terminal
  if (inpTerminal.checked) {
    sum += prices.terminal;
  }
  return sum;
}
sumPrice();

// Function showing the updated total price
function showSumPrice() {
  totalPrice.classList.add("open");
  totalPriceSum.innerText = "$" + sumPrice();
}
showSumPrice();



//--- Events on inputs ---//

// Event on products quantity
inpProducts.addEventListener("change", function () {
  products.classList.add("open");
  productsNumber.innerText = `${inpProducts.value} * $${prices.product}`;
  let totalProductPrice = inpProducts.value * prices.product;
  productsPrice.innerText = `$${totalProductPrice}`;
  showSumPrice();
});

// Event on orders number
inpOrders.addEventListener("change", function () {
  orders.classList.add("open");
  ordersNumber.innerText = `${inpOrders.value} * $${prices.order}`;
  let totalOrderPrice = inpOrders.value * prices.order;
  ordersPrice.innerText = `$${totalOrderPrice}`;
  showSumPrice();
});

// Event on package type
divPackage.addEventListener("click", function (e) {
  divPackage.classList.toggle("open");
  // e.target.dataset.value is a chosen li element
  let value;
  if (typeof e.target.dataset.value !== "undefined") {
    value = e.target.dataset.value;
  } else {
    value = "";
  }

  let text;
  if (typeof e.target.dataset.value !== "undefined") {
    text = e.target.innerText;
  } else {
    text = "";
  }

  if (value.length > 0) {
    divPackage.dataset.value = value;
    divPackage.querySelector(".select__input").innerText = text;
  }
  // passing values to the summary fields
  packageType.innerText = text;
  let totalPackagePrice;
  if (value === divPackage.dataset.value) {
    totalPackagePrice = prices.package[divPackage.dataset.value];
  } else if (value === "") {
    totalPackagePrice = "";
  }
  packagePrice.innerText = `$${totalPackagePrice}`;

  // opening summary for the package
  for (let el of listPackage) {
    el.addEventListener("click", function (e) {
      package.classList.add("open");
    });
  }
  showSumPrice();
});

// Event on accounting
inpAccounting.addEventListener("change", function () {
  accounting.classList.toggle("open");
  accountingPrice.innerText = `$${prices.accounting}`;
  showSumPrice();
});

// Event on Terminal
inpTerminal.addEventListener("change", function () {
  terminal.classList.toggle("open");
  terminalPrice.innerText = `$${prices.terminal}`;
  showSumPrice();
});
