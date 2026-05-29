const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const empModel = mongoose.model("employee", EmpSchema);
module.exports = empModel;
