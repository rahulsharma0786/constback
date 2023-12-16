const myemp=require("../empSchema/Empschema")

const newdata=(req,res)=>{
const ouremp=new myemp(req.body)

ouremp.save().then(()=>{
    console.log("data save")
    console.log(ouremp)
})   
}




module.exports={
newdata,

}





















































