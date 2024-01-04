const bookService = require("../service/bookService");
const joi = require("joi");

const schema = joi.object({
  bookTitle: joi.string().required(),
  author: joi.string().required(),
  review: joi.string().required(),
  notes: joi.string().required(),
  ISBN: joi.number().required(),
  stars: joi.string().required(),
});

module.exports = {
  newbook: async (req, res) => {
    try {
      const validator = await schema.validate(req.body);
      const book = await bookService.newbook(validator);
      console.log(req.body);
      res.redirect("/");
    } catch (error) {
      res.send({ error: book.error });
      console.log(error);
    }
  },

  getallbooks: async (req, res) => {
    try {
      const getallbooks = await bookService.allbooks();

      await res.render("index", { response: getallbooks.response });
    } catch (error) {
      res.send({ error: error });
    }
  },

  singlebook: async (req, res) => {
    try {
      const getbook = await bookService.singlebook(req.params.id);

      await res.render("booknotes", {
        singlebook: getbook.response.dataValues,
      });
    } catch (error) {
      res.send({ error: error });
    }
  },
};
