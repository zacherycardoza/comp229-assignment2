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
