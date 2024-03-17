const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('connect succesfully');
    } catch {
        console.log('connect fail');
    }
}

// đưa vào object để tí import nó ra để chấm vô giúp rõ về nghĩa hơn
module.exports = { connect };
