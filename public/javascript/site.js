const express=require('express');
const app=express();
const port=process.env.PORT||8000;
app.use(express.static('public'))
app.get('/',(res,req)=>{
res.sendFile(__dirname+'/public/htmls/site.html');
});
app.listen(port,()=>
console.log('listening to port ${port}!'));