const mongoose=require("mongoose")

const diarySchema=new mongoose.Schema(
    {
        Name: String,
        Phone: String,
        Litre:String,
        Price:String
        
    }
)

module.exports=mongoose.model("diary",diarySchema)