const express=require('express')
const mongoose=require('mongoose');
const authRoutes =require('./Route/auth.route');


const app=express()
app.use(express.json())


//routes

app.use('/',authRoutes);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/resume');
  console.log("Database is connected succesfully");
}
 main();


app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`);
});