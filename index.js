const express=require('express')
const { request } = require('http')
const app =express()
const path = require('path')
const hbs=require('hbs')
// const bodyParser= require("body-parser")


const email="j@gmail.com"
const password="123"

const homepageData=[
    {
    Imagename:"car 1.jpg",
    heading:"image 1"
},
{
    Imagename:"car 2.jpeg",
    heading:"image 2"
},
{
    Imagename:"car 3.jpeg",
    heading:"image 3"
}]

app.set('view engine','hbs')
app.set("views",path.join(__dirname,"pages"))
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))


app.get('/',(req,res)=>{
    res.render('login')
})
app.post('/login',(req,res)=>{
    if(req.body.email===email &&req.body.password===password){
        res.render('homepage',{data:homepageData})
    }
    else{
        res.redirect('/')
    }
})

app.get('/detailed-view',(req,res)=>{
    res.render('detailed-view')
})



app.listen(4000)