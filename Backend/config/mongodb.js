import mongoose  from "mongoose";
const connectDB = async (url) => {
    mongoose.connection.on("connected",()=>{
        console.log("DB Connected Sucessfully");
    })
    
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)
}
export default connectDB