const userService = require("../service/userService");
const joi = require("joi");

const schema = joi.object({
  firstName: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  Cpassword: joi.ref("password"),
});

module.exports = {
  register: async (req, res) => {
    try {
      const validator = await schema.validateAsync(req.body);
      await userService.register(validator);
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res) => {
    try {
      const user = await userService.login(req.body);

      if (user.error) {
        return res.send({
          error: user.error,
        });
      }

      res.render("user", { name: user.response.fullName });
    } catch (error) {
      console.log(error);
    }
  },
};
