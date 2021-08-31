const { default: axios } = require("axios");

async function getData() {
  const resProduct = await axios.get(
    "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
  );
  const dataProduct = resProduct.data;

  const result = dataProduct.filter((a) => a.category == "fruits");

  console.log(result);
}

getData();
