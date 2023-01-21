const mongoose = require('mongoose'); 
mongoose.set('strictQuery', true);


class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://loju:12220095@loju.0xtzfxp.mongodb.net/?retryWrites=true&w=majority")
            .then(() => {
                console.log("database connnected")
            })

    .catch((err) => {
        console.log("error" + err)
        })
    }
}

module.exports = new Database();