const { default: axios } = require("axios");

async function getData() {
  const a = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const post = a.data;

  const b = await axios.get("https://jsonplaceholder.typicode.com/users");
  const user = b.data;

  //relation | make new object
  const result = post.map((a) => {
    a.user = user.find((b) => b.id == a.userId);
    return a;
  });

  console.log(result);
}

getData();
