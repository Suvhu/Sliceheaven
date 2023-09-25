const mongoose  = require ('mongoose') ;
mongoose.set('strictQuery', false);
const mongoURI = "mongodb://127.0.0.1:27017/pizzaz" ;

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to MongoDB");
    })
}

module.exports = connectToMongo ;