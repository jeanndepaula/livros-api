const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://usrjean:pswjean@cluster0-g00i0.mongodb.net/dados?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
})
