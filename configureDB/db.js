const mongoose = require('mongoose')
const configureDB = async (req, res) => {
    try {
        await mongoose.connect('mongodb+srv://krishnalasyatalluri9:krishnalasyatalluri9@tasks.8tzjo.mongodb.net/task?retryWrites=true&w=majority&appName=Tasks', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('db connected')
    } catch (e) {
        console.log('error connecting db')
    }
}
module.exports = configureDB
