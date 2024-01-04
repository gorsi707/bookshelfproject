const { models } = require("./index");

module.exports = {
  newBook: async (body) => {
    try {
      const book = await models.books.create({
        bookTitle: body.value.bookTitle,
        author: body.value.author,
        review: body.value.review,
        notes: body.value.notes,
        isbn: body.value.isbn,
        stars: body.value.stars,
      });

      return {
        response: book,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  allbooks: async () => {
    try {
      const getallbooks = await models.books.findAll();

      return {
        response: getallbooks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  singlebook: async (id) => {
    try {
      const getbook = await models.books.findOne({
        where: {
          id: id,
        },
      });

      return {
        response: getbook,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
