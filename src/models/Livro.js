const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const validator = require('validator')

const livroSchema = mongoose.Schema({

  titulo: {
    type: String,
    required: true,
    trim: true
  },
  isbn: {
    type: String,
    required: true,
    validate: value => {
      if (!validator.isNumeric(value)) {
        throw new Error({error: 'Valor inválido para ISBN'})
      }
    }
  },
  autor: {
    type: String,
    required: true,
    trim: true
  },
  editora: {
    type: String,
    required: true,
    trim: true
  },
  ano: {
    type: String,
    required: true,
    validate: value => {
      if (!validator.isInt(value, [{ min: 1900, max: 2999 }])) {
        throw new Error({error: 'Valor inválido para ano'})
      }
    }
  },
  idioma: {
    type: String,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  dimensoes: {
    type: String,
    required: true
  },
})

livroSchema.plugin(mongoosePaginate);

const Livro = mongoose.model('Livro', livroSchema)

module.exports = Livro
