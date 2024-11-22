const mongoose = require('mongoose');

function dbConnect()
{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Database is connected"))
    .catch((err) => console.log(`Something went wrong ${err}`));
}

module.exports = dbConnect;