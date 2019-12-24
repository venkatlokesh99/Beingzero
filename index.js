const express=require('express');
const app=express();
const port=process.env.PORT||8000;
app.use(express.static('public'))
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/public/htmls/site.html');
});
var obj={};
obj.name="Lokesh";
obj.rollno="17H51A0557";
app.get('/data',(req,res)=>{
    res.json(obj);
    });

app.listen(port,()=>
console.log(`listening to port ${port}!`));
console.log(__dirname);