// const cTable = require("console.table");
const datax = require("./data.json");

// 1. Find all purchases made in February.
function monthPurchase(mon) {
  let monthP = datax.filter((a) => a.created_at.match("2018-" + mon));
  console.log(monthP);
}

// 2. Find all purchases made by Ari
function totalBy(nameCust) {
  let valueTotal = datax
    .filter((a) => a.customer.name == nameCust)
    .map((b) => b.items.map((c) => c.qty * c.price));

  let getTotal = valueTotal.flat(1).reduce((a, b) => a + b);
  console.log(getTotal);
}

// 3.Find people who have purchases with grand total lower than 300000
function totalLower(max) {
  let totalCust = datax
    .map((a) => {
      a.total = a.items.map((b) => b.qty * b.price).reduce((a, b) => a + b);
      return a;
    })
    .filter((a) => a.total < max)
    .map((b) => b.customer.name);
  console.log([...new Set(totalCust)]);
}

monthPurchase("02");
totalBy("Ari");
totalLower(300000);
