const { Book } = require('../models');

class BookController {
  static async findAll(req, res, next) {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async create(req, res, next) {
    const { title, author, year } = req.body;
    try {
      const book = await Book.create({ title, author, year });
      res.status(201).json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async findByPk(req, res, next) {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw { name: 'NotFound' };
      }
      res.status(200).json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { title, author, year } = req.body;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw { name: 'NotFound' };
      }
      await book.update({ title, author, year: +year });
      res.status(200).json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async destroy(req, res, next) {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw { name: 'NotFound' };
      }
      await book.destroy();
      res.status(200).json({ message: 'Book has been deleted' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = BookController;
