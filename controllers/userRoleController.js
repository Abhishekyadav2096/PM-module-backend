const userRoleModel = require("../models/user_role");

// create user_role
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await userRoleModel.create(body);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
