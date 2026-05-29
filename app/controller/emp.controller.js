const empModel = require("../model/emp.db");
const httpStatusCode = require("../utils/httpStatusCode");

class EmpController {
  async createEmp(req, res) {
    try {
      const { name, city, status, age, joiningDate, salary, department } =
        req.body;
      if (
        !name ||
        !city ||
        !status ||
        !age ||
        !salary ||
        !department ||
        !joiningDate
      ) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      const emps = new empModel({
        name,
        city,
        status,
        age,
        joiningDate,
        salary,
        department,
      });
      const result = await emps.save();
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee added successfully",
          data: result,
        });
      }
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new EmpController();
