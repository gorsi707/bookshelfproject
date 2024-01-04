const bookModel = require("../models/booksModel");

module.exports = {
  newbook: async (body) => {
    try {
      const book = await bookModel.newBook(body);
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
      const getallbooks = await bookModel.allbooks();

      if (getallbooks.response.length == 0) {
        return {
          response: "No books found",
        };
      }
      return {
        response: getallbooks.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  singlebook: async (id) => {
    try {
      const getbook = await bookModel.singlebook(id);

      if (getbook.response == null) {
        return {
          response: "No book found",
        };
      }

      return {
        response: getbook.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
