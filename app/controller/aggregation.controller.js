const empModel = require("../model/emp.db");
const httpStatusCode = require("../utils/httpStatusCode");

class AggregationController {
  async matchDept(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { department: "IT" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async matchSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { salary: { $gt: 50000 } } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async matchStatus(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { status: "Active" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async matchAge(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { age: { $gte: 25, $lte: 35 } } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async matchCity(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { city: "Kolkata", salary: { $gt: 40000 } } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupTotalEmp(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalEmp: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupTotalSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalSalary: { $sum: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupAvgSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            AvgSalary: { $avg: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupMaxSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            MaxSalary: { $max: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupMinSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            MinSalary: { $min: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupTotalEmpCity(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$city` },
            totalEmp: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async groupEmp(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalEmp: { $sum: 1 },
          },
        },
        {
          $match: {
            totalEmp: {
              $gt: 5,
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async sortSalaryAsc(req, res) {
    try {
      const result = await empModel.aggregate([{ $sort: { salary: 1 } }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async sortSalaryDsc(req, res) {
    try {
      const result = await empModel.aggregate([{ $sort: { salary: -1 } }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async sortAgeDsc(req, res) {
    try {
      const result = await empModel.aggregate([{ $sort: { age: -1 } }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async sortDeptSalaryDsc(req, res) {
    try {
      const result = await empModel.aggregate([
        { $sort: { department: -1 }, $sort: { salary: -1 } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async limitSalaryDsc(req, res) {
    try {
      const result = await empModel.aggregate([
        { $sort: { salary: -1 } },
        { $limit: 5 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async limitEmp(req, res) {
    try {
      const result = await empModel.aggregate([{ $limit: 10 }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async limitAgeAsc(req, res) {
    try {
      const result = await empModel.aggregate([
        { $sort: { age: 1 } },
        { $limit: 3 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async skipEmp(req, res) {
    try {
      const result = await empModel.aggregate([{ $skip: 5 }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async pagination1(req, res) {
    try {
      const page = Number(req.query.page);
      const limit = 10;
      const skip = (page - 1) * limit;
      const result = await empModel.aggregate([
        { $skip: skip },
        { $limit: limit },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async pagination2(req, res) {
    try {
      const page = Number(req.query.page);
      const limit = 20;
      const skip = (page - 1) * limit;
      const result = await empModel.aggregate([
        { $skip: skip },
        { $limit: limit },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async addFieldBonus(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            bonus: {
              $multiply: ["$salary", 0.1],
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async addFieldAnnual(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            bonus: {
              $multiply: ["$salary", 12],
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async addFieldsalaryCategory(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            salaryCategory: {
              $switch: {
                branches: [
                  {
                    case: { $gt: ["$salary", 70000] },
                    then: "High",
                  },
                  {
                    case: {
                      $and: [
                        { $gte: ["$salary", 40000] },
                        { $lte: ["$salary", 70000] },
                      ],
                    },
                    then: "Medium",
                  },
                ],
                default: "Low",
              },
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async addFieldEmpLable(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            employeeLabel: {
              $concat: ["$name", "-", "$department", "department"],
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async sampleEmp(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $sample: {
            size: 5,
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async sampleDept(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $match: {
            department: "IT",
          },
        },
        {
          $sample: {
            size: 3,
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async deptHighestAvgSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $match: {
            status: "Active",
          },
        },
        {
          $group: {
            _id: `$department`,
            AvgSalary: { $avg: `$salary` },
          },
        },
        {
          $sort: {
            AvgSalary: -1,
          },
        },
        {
          $limit: 5,
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async deptRep(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: `$department`,
            AvgSalary: { $avg: `$salary` },
            totalEmp: { $sum: 1 },
            totalSalary: { $sum: `$salary` },
            avgSalary: { $avg: `$salary` },
            MaxSalary: { $max: `$salary` },
            MinSalary: { $min: `$salary` },
          },
        },
        {
          $sort: {
            AvgSalary: -1,
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async secHighest(req, res) {
    try {
      const result = await empModel.aggregate([
        { $sort: { salary: -1 } },
        { $skip: 1 },
        { $limit: 1 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async findCurrentyear(req, res) {
    try {
      const currentYear = new Date().getFullYear();
      const result = await empModel.aggregate([
        {
          $match: {
            $expr: {
              $eq: [{ $year: "$joiningDate" }, currentYear],
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async empName(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: "$department",
            employeeNames: {
              $push: "$name",
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async cityWiseAvgSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$city` },
            AvgSalary: { $avg: `$salary` },
          },
        },
        {
          $match: {
            AvgSalary: {
              $gt: 50000,
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async maxEmpDeptWise(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalEmp: { $sum: 1 },
          },
        },
        {
          $sort: {
            totalEmp: -1,
          },
        },
        { $limit: 3 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async calcExp(req, res) {
    try {
      const currentDate = new Date();
      const result = await empModel.aggregate([
        {
          $addFields: {
            experienceYears: {
              $dateDiff: {
                startDate: "$joiningDate",
                endDate: currentDate,
                unit: "year",
              },
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async findDup(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: "$name",
            count: {
              $sum: 1,
            },
          },
        },
        {
          $match: {
            count: { $gt: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async deptWiseAvgSalary(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            AvgSalary: { $avg: `$salary` },
          },
        },
        {
          $match: {
            AvgSalary: {
              $gt: 60000,
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async randEmp(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $sample: {
            size: 5,
          },
        },
        {
          $group: {
            _id: "$department",
            employeeName: {
              $first: "$name",
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async dashboard(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $match: {
            status: "Active",
          },
        },
        {
          $group: {
            _id: "$department",
            totalEmployees: {
              $sum: 1,
            },
            avgSalary: {
              $avg: "$salary",
            },
            avgAge: {
              $avg: "$age",
            },
            totalSalary: {
              $sum: "$salary",
            },
          },
        },
        {
          $addFields: {
            salaryCategory: {
              $switch: {
                branches: [
                  {
                    case: { $gt: ["$salary", 70000] },
                    then: "High",
                  },
                  {
                    case: {
                      $and: [
                        { $gte: ["$salary", 40000] },
                        { $lte: ["$salary", 70000] },
                      ],
                    },
                    then: "Medium",
                  },
                ],
                default: "Low",
              },
            },
          },
        },
        {
          $sort: {
            avgSalary: -1,
          },
        },
        {
          $limit: 5,
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
module.exports = new AggregationController();
