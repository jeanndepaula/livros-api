const Livro = require('../models/Livro');

const controller = {
  async create(req, res) {
    try {
      const livro = await Livro.create(req.body);
      
      res.status(200).send(livro);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async find(req, res) {
    try {
      const { page = 1, param = '', yearStart, yearEnd } = req.query;
      
      let params = { $or: [
          {'titulo' : new RegExp(param, 'i')},
          {'autor' : new RegExp(param, 'i')},
          {'isbn' : new RegExp(param, 'i')}
        ]
      }

      if (yearStart && yearEnd) {
        params.ano = {
          $gte: yearStart,
          $lte: yearEnd
        }
      }

      const livros = await Livro.paginate(params, { page, limit: 5 });
      
      res.status(200).send(livros);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async findOne(req, res) {
    try {
      const livro = await Livro.findById(req.params.id);
      
      res.status(200).send(livro);
    } catch (error) {
      res.status(400).send(error);
    }
  },

};

module.exports = controller;
