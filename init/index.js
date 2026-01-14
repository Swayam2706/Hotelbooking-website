const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dburl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dburl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68caefe42731a34a20c30f03",
    geometry: {
      type: "Point",
      coordinates: [77.209, 28.6139], // Default coordinates (e.g., New Delhi)
    },
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
