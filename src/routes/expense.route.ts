import { Router } from "express";
import {
  GetAllExpense,
  GetExpenseDetail,
  GetIncomeDetail,
  GetAll,
  GetAllIncome,
} from "../controllers/expense.controller";
// import masukMiddleWare from "../middlewares/masuk.middleware";

const router = Router();

// Semua kena middleware
// router.use(masukMiddleWare);

// GET ALL EXPENSE AND INCOME
// GET http://localhost:8080/user-management/
router.get("/", GetAll);

// GET ALL EXPENSE
// GET http://localhost:8080/user-management/expense
router.get("/expense", GetAllExpense);

// GET ALL INCOME
// GET http://localhost:8080/user-management/income
router.get("/income", GetAllIncome);

// GET DETAIL INCOME/EXPENSE WITH SPECIFIED CATEGORY
// GET http://localhost:8080/expense-management/income/salary
// GET http://localhost:8080/expense-management/expense/food
// GET http://localhost:8080/expense-management/expense/transport
router.get("/income/:category", GetIncomeDetail);
router.get("/expense/:category", GetExpenseDetail);

// Below is using middleware
// GET http://localhost:8080/user-management/users/23?user=Anjay
// router.get("/users/:uuid", masukMiddleWare, GetUserDetail);

export default router;

//http://localhost:8080/user-management/users?user=Hesoyam
