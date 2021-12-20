const { NotFound } = require("http-errors");

const { User } = require("../../models");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOneAndUpdate(
    { verificationToken },
    {
      verificationToken: null,
      verify: true,
    },
    { new: true }
  );
  if (!user) {
    throw new NotFound("User not found");
  }

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Verification successful",
  });
};

module.exports = verify;
