let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

// create a reference to the model
let BusinessContact = require("../models/business-contact");

module.exports.displayBusinessContactList = (req, res, next) => {
  BusinessContact.find((err, businessContactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(businessContactList);

      res.render("business-contact/list", {
        title: "Business Contacts",
        BusinessContactList: businessContactList,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("business-contact/add", {
    title: "Add Business Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newBusinessContact = BusinessContact({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    note: req.body.note,
  });

  BusinessContact.create(newBusinessContact, (err, BusinessContact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the business-contact list
      res.redirect("/business-contact-list");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  BusinessContact.findById(id, (err, businessContactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("business-contact/edit", {
        title: "Edit Business Contact",
        businessContact: businessContactToEdit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedBusinessContact = BusinessContact({
    _id: id,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    note: req.body.note,
  });

  BusinessContact.updateOne({ _id: id }, updatedBusinessContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the businessContact list
      res.redirect("/business-contact-list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  BusinessContact.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the business-contact list
      res.redirect("/business-contact-list");
    }
  });
};
