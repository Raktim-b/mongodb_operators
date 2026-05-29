const express = require("express");
const aggregationController = require("../controller/aggregation.controller");
const aggrRouter = express.Router();

aggrRouter.get("/match1", aggregationController.matchDept);
aggrRouter.get("/match2", aggregationController.matchSalary);
aggrRouter.get("/match3", aggregationController.matchStatus);
aggrRouter.get("/match4", aggregationController.matchAge);
aggrRouter.get("/match5", aggregationController.matchCity);

aggrRouter.get("/group1", aggregationController.groupTotalEmp);
aggrRouter.get("/group2", aggregationController.groupTotalSalary);
aggrRouter.get("/group3", aggregationController.groupAvgSalary);
aggrRouter.get("/group4", aggregationController.groupMaxSalary);
aggrRouter.get("/group5", aggregationController.groupMinSalary);
aggrRouter.get("/group6", aggregationController.groupTotalEmpCity);
aggrRouter.get("/group7", aggregationController.groupEmp);

aggrRouter.get("/sort1", aggregationController.sortSalaryAsc);
aggrRouter.get("/sort2", aggregationController.sortSalaryDsc);
aggrRouter.get("/sort3", aggregationController.sortAgeDsc);
aggrRouter.get("/sort4", aggregationController.sortDeptSalaryDsc);

aggrRouter.get("/limit1", aggregationController.limitSalaryDsc);
aggrRouter.get("/limit2", aggregationController.limitEmp);
aggrRouter.get("/limit3", aggregationController.limitAgeAsc);

aggrRouter.get("/skip1", aggregationController.skipEmp);
aggrRouter.get("/skip2", aggregationController.pagination1);
aggrRouter.get("/skip3", aggregationController.pagination2);

aggrRouter.get("/addfield1", aggregationController.addFieldBonus);
aggrRouter.get("/addfield2", aggregationController.addFieldAnnual);
aggrRouter.get("/addfield3", aggregationController.addFieldsalaryCategory);
aggrRouter.get("/addfield4", aggregationController.addFieldEmpLable);

aggrRouter.get("/sample1", aggregationController.sampleEmp);
aggrRouter.get("/sample2", aggregationController.sampleDept);

aggrRouter.get("/mix1", aggregationController.deptHighestAvgSalary);
aggrRouter.get("/mix2", aggregationController.deptRep);
aggrRouter.get("/mix3", aggregationController.secHighest);
aggrRouter.get("/mix4", aggregationController.findCurrentyear);
aggrRouter.get("/mix5", aggregationController.empName);
aggrRouter.get("/mix6", aggregationController.cityWiseAvgSalary);
aggrRouter.get("/mix7", aggregationController.maxEmpDeptWise);
aggrRouter.get("/mix8", aggregationController.calcExp);
aggrRouter.get("/mix9", aggregationController.findDup);
aggrRouter.get("/mix10", aggregationController.deptWiseAvgSalary);
aggrRouter.get("/mix11", aggregationController.randEmp);
aggrRouter.get("/mix12", aggregationController.dashboard);

module.exports = aggrRouter;
