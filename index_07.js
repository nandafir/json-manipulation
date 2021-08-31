const { default: axios } = require("axios");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const datax = require("./json_files/data07_dump.json");

//01 get all names - Concat
async function getAllName() {
  const res = await axios.get("https://randomuser.me/api/?results=20");
  const obj = res.data.results;

  const names = obj.map((a) =>
    a.name.title.concat(" ", a.name.first).concat(" ", a.name.last)
  );

  console.log(names);
}

//02 get male gender
async function getGender() {
  const res = await axios.get("https://randomuser.me/api/?results=20");
  const obj = res.data.results;

  const maleGender = obj.filter((a) => (a.gender = "male"));

  console.log(maleGender);
}

//03
async function getCsv() {
  const res = await axios.get("https://randomuser.me/api/?results=20");
  const obj = res.data.results;

  const objConcat = obj.map((a) => ({
    name: a.name.title.concat(" ", a.name.first).concat(" ", a.name.last),
    email: a.email,
    phone: a.phone,
  }));

  //   console.log(objConcat);

  //export csv
  const csvWriter = createCsvWriter({
    path: "./export_files/07/file_user.csv",
    header: [
      { id: "name", title: "NAME" },
      { id: "email", title: "EMAIL" },
      { id: "phone", title: "PHONE" },
    ],
  });

  csvWriter
    .writeRecords(objConcat) // returns a promise
    .then(() => {
      console.log("...export csv successfull!");
    });
}

//01
// getAllName();

//02
// getGender();

//03
getCsv();
