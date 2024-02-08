const express=require("express")
const diaryModel=require("../model/diaryModel")
const router=express.Router()
//separate page  to  call api 
router.post("/add",async(req,res)=>{
    let data=req.body
    let diary=new diaryModel(data)
    let result=await diary.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.get("/view",async(req,res)=>{
    let data=await diaryModel.find()
    res.json(data)
})


 

module.exports=router
