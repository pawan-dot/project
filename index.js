const express=require('express');
const app=express();
const Rouuter=express.Router();
app.get('/',function(req,res){
    res.sendfile(__dirname+"/html/index.html");
})
app.post('/create-user',function(req,res){
    
            res.sendFile('../MyProjects/chatapp/index.html');
        })
app.listen(4500,()=>{
    console.log(" server start");
})