const datax = require("./json_files/data04.json");

//dont have any phone number
function get01() {
  const res = datax.filter((a) => a.profile.phones.length == 0);
  console.log(res);
}

//find users who have articles
function get02() {
  const res = datax.filter((a) => a["articles:"].length > 0);
  console.log(res);
}

//find users who have "annis" on their name
function get03() {
  const res = datax.filter((a) => a.profile.full_name.match("Annis"));
  console.log(res);
}

//find user who have articles on year 2020
function get04() {
  const res = datax.map((a) =>
    a["articles:"].filter((a) => a.published_at.match("2020-"))
  );

  console.log(res);
}

//find users who are born on 1986
function get05() {
  const res = datax.filter((a) => a.profile.birthday.match("1986"));
  console.log(res);
}

//find articles that contain "tips" on the title
function get06() {
  const res = datax.map((a) =>
    a["articles:"].filter((b) => b.title.match("Tips"))
  );
  console.log(res);
}

//find articles published before august 2019
function get07() {
  //----pakai flat
  // const temp1 = datax
  //   .map((a) => a["articles:"])
  //   .flat()
  //   .filter((a) => new Date(a.published_at) <= new Date(2019, 08));
  //--------------------------------------------------------------------
  //----used map
  // let mergedArticle = [];
  // const articles = datax
  //   .map((a) => a["articles:"])
  //   .map((a) => a.map((b) => mergedArticle.push(b)));
  // console.log(mergedArticle);

  let mergedArticle = [];
  const article = datax.map((a) => a["articles:"]);

  for (let i = 0; i < article.length; i++) {
    if (article[i].length > 0) {
      for (let a = 0; a < article[i].length; a++) {
        // console.log(article[i][a]);

        mergedArticle.push(article[i][a]);
      }
    }
  }

  console.log(article);
  // console.log(mergedArticle);
}

function getArticle() {
  const mergedArticles = [];
  const maxDate = new Date(2019, 08);

  for (let i = 0; i < datax.length; i++) {
    const article = datax[i]["articles:"];

    if (article.length > 0) {
      for (let a = 0; a < article.length; a++) {
        const partOfArticles = article[a];

        if (new Date(partOfArticles.published_at) <= maxDate) {
          mergedArticles.push(partOfArticles);
        }
      }
    }
  }
  console.log(mergedArticles);
}

// get07();
getArticle();
