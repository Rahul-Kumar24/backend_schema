// const mongoose = require("mongoose");

// const categorySchema = mongoose.Schema({});

// exports.Category = mongoose.model("Category", categorySchema);

const mongoose = require("mongoose");

categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
