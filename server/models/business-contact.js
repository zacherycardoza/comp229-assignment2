// File Name: business-contact.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 23rd, 2021
let mongoose = require("mongoose");

// create a model class
let businessContactModel = mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    note: String,
  },
  {
    collection: "business_contacts",
  }
);

module.exports = mongoose.model("BusinessContact", businessContactModel);
