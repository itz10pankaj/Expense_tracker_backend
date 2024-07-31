
const mongoose = require('mongoose');
const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('db conneted')
    } catch (error) {
        console.log('Db not connect')
    }
}
module.exports = { db }