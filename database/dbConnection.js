import mongoose from "mongoose";


export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "PORTFOLIO"
    }).then(()=>{
         console.log("Connected to database.")

    }).catch(error=>{
        console.log(`Some error occured while connecting to database ${error}`);
    });
    
};

export default dbConnection;