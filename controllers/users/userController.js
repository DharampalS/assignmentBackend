const db = require("../../models");
const response = require("../../utility/helpers");
const validator = require("../../validators/userSignUp");
const { Op } = require("sequelize");
const Users = db.user;
var md5 = require("md5");

// User Signup
exports.signIn = async (req, res) => {
  try {
    validator.userValidation(req.body);
    const { password, email } = req.body;
    const findUser = await Users.findOne({
      where: {
        [Op.and]: [{ email: email }, { password: md5(password) }],
      },
    });
    if (!findUser) {
      return response.errorResponse(res, "Incorrect email or password");
    } else {
      return response.successResponse(res, "Login Sucessfully");
    }
  } catch (error) {
    return response.errorResponse(res, error.message);
  }
};

// User Login
exports.signUp = async (req, res) => {
  try {
    validator.userValidation(req.body);
    const { password, email } = req.body;
    const md5Password = md5(password);
    const userCreate = await Users.create({
      email: email,
      password: md5Password,
    });
    if (!userCreate) {
      return response.errorResponse(res, "Something went wrong!");
    } else {
      return response.successResponse(res, "User Signup Sucessfully");
    }
  } catch (error) {
    return response.errorResponse(res, error.message);
  }
};
