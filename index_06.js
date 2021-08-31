var fs = require("fs");
const { format } = require("path");
const data = require("./json_files/data06.json");

function saveJson(dataJson, filename) {
  const folder = "./export_files/" + filename;

  fs.writeFile(folder, JSON.stringify(dataJson), function (err) {
    if (err) throw err;
    console.log("complete");
  });
}

//01 find items in Meeting Room
function getItemsMeetingRoom() {
  const items = data.filter((a) => a.placement.name == "Meeting Room");
  saveJson(items, "06/items.json");
}

//02 find all electronic devices
function getElectronic() {
  const electronics = data.filter((a) => a.type == "electronic");
  saveJson(electronics, "06/electronic.json");
}

//03 find all furniture
function getFurniture() {
  const furnitures = data.filter((a) => a.type == "furniture");
  saveJson(furnitures, "06/furnitures.json");
}

//04 find all items was purchased at 16 januari 2020
function getItemPurchased() {
  const itemsPurchased = data.filter((a) => {
    let datePurchased = new Date(a.purchased_at * 1000).toLocaleDateString();
    let dateMax = new Date("2020-01-16T16:00:00.000Z").toLocaleDateString();
    return datePurchased === dateMax;
  });

  saveJson(itemsPurchased, "06/purchased-at-2020-01-16.json");
}

//05 Find all items with brown color
function getBrownCOlor() {
  const brownItems = data.filter((a) => a.tags.includes("brown"));

  saveJson(brownItems, "06/all-browns.json");
}

//01
//getItemsMeetingRoom();

//02
//getElectronic();

//03
// getFurniture();

//04
// getItemPurchased();

//05
getBrownCOlor();
