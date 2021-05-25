var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const { body,validationResult } = require("express-validator");

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100, minLength: 3}
  }
);

// Virtual for bookinstance's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);