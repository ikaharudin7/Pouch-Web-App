if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://josh:test123@cluster0.jvj0nic.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'demo' 
})

const db = mongoose.connection.on('error', err => {
    console.error(err);
    process.exit(1)
})

db.once('open', async() => {
    console.log(`Mongo connection start on ${db.host}:${db.port}`)
})

require('./user')

module.exports = {db}