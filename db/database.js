let mongoose = require('mongoose');

//const mongodb_url = 'mongodb://localhost:27017/test'  (database bên localhost) 
const mongodb_url = 'mongodb+srv://ngocduyen:ngocduyen@asm2-cloud.vyinr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'  //(database bên Clusters)

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();