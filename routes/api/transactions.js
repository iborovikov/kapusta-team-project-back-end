const express = require("express");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../middlewares");

const {
  expense,
  income
} = require("../../controllers/transactions");

const { transactionJoiSchema } = require("../../models/transaction");
const router = express.Router();

router.post("/expense", authenticate, validation(transactionJoiSchema), controllerWrapper(expense));
router.post("/income", authenticate, validation(transactionJoiSchema), controllerWrapper(income));


module.exports = router;