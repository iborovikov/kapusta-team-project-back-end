const { User } = require("../../models");

const setBalance = async (req, res) => {
    const { balance } = req.body;
    const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { balance, balanceHasBeenSet: true });
  res.status(201).json({
    status: "success",
    code: 201,
    message: `User balance set as ${balance} value`,
    balance
  });
}

module.exports = setBalance