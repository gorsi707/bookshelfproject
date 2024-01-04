const userModel = require("../models/userModel");

module.exports = {
  register: async (body) => {
    try {
      await userModel.register(body);
    } catch (error) {
      console.log("service error", error);
    }
  },

  login: async (body) => {
    try {
      const user = await userModel.login(body);

      if (!user.response && user.error) {
        return {
          error: "user not exist",
        };
      }

      return {
        response: user.response,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
