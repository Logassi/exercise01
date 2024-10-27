import { Request, Response, NextFunction } from "express";
import { MOCK_API_URL } from "../config";
import axios from "axios";

async function GetAll(req: Request, res: Response, next: NextFunction) {
  console.log("Get All");
  const { data } = await axios.get(`${MOCK_API_URL}/users`);

  try {
    res.status(200).send({
      message: "Get All Income and Expense Success",
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function GetAllExpense(req: Request, res: Response, next: NextFunction) {
  console.log("Get All Expense");
  try {
    const { data } = await axios.get(`${MOCK_API_URL}/users`);
    console.log("Fetched data from API success");

    const filteredExpenses = data.filter(
      (item: any) => item.type === "expense"
    );

    res.status(200).send({
      message: "Get Users Detail Success",
      data: filteredExpenses,
    });
  } catch (error) {
    next(error);
  }
}

async function GetAllIncome(req: Request, res: Response, next: NextFunction) {
  console.log("Get All Income");
  try {
    const { data } = await axios.get(`${MOCK_API_URL}/users`);
    console.log("Fetched data from API success");

    const filteredIncome = data.filter((item: any) => item.type === "income");

    res.status(200).send({
      message: "Get Users Detail Success",
      data: filteredIncome,
    });
  } catch (error) {
    console.error("Error while fetching or processing data:", error);
    next(error);
  }
}

async function GetExpenseDetail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Get Expense Detail");

  const { data } = await axios.get(`${MOCK_API_URL}/users`);
  console.log("Fetched data from API success");

  const { category } = req.params;
  console.log("Fetched category type from route");

  const filteredExpenses = data.filter((item: any) =>
    category === "food" || category === "transport"
      ? item.category === category
      : false
  );

  try {
    res.status(200).send({
      message: "Get Users Detail Success",
      data: filteredExpenses,
    });
  } catch (error) {
    next(error);
  }
}

async function GetIncomeDetail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Get Expense Detail");

  const { data } = await axios.get(`${MOCK_API_URL}/users`);
  console.log("Fetched data from API success");

  const { category } = req.params;
  console.log("Fetched category type from route");

  const filteredExpenses = data.filter((item: any) =>
    category === "salary" ? item.category === category : false
  );

  try {
    res.status(200).send({
      message: "Get Users Detail Success",
      data: filteredExpenses,
    });
  } catch (error) {
    next(error);
  }
}

export {
  GetAllExpense,
  GetAllIncome,
  GetExpenseDetail,
  GetIncomeDetail,
  GetAll,
};
// export { GetAllExpense };
