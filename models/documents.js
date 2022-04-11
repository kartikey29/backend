const mongoose = require("mongoose");
/////////////////////////////////////////////
const DocumentsSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
/////////////////////////////////////////////
module.exports = mongoose.model("documents", DocumentsSchema);