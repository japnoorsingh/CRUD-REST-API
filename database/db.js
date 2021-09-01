// Setting up Mongoose
const mongoose = require('mongoose');

// URL from MongoDB Atlas
const url = 'mongodb+srv://Japnoor:Japnoor5402@cluster0.ym25m.mongodb.net/CRUDAPI?retryWrites=true&w=majority';

// Connecting Mongoose
// Method 1:
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// const dbConn = mongoose.connection;
// dbConn.on("error", console.error.bind(console, "Connection Error"));
// dbConn.on("open", function(){
//     console.log("DB Connection Successful");
// });
// module.exports = dbConn;

// Method 2:
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`MongoDB Connection Successful`))
    .catch(() => console.log(`Error`))

// Exporting URL to server.js
module.exports = url;