const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('../models/Book')
module.exports = (config) => {
    mongoose.connect(config.connectionString)

    let database = mongoose.connection

    database.once('open', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('Connected!')
    })
}