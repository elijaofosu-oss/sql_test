const express=require('express')
const app=express()
const PORT=2000
const sequelize=require('./Databse/database')
const userController=require('./router/user')
const postController=require('./router/post')

app.use(express.json())
app.use(user)
app.use(post)

sequelize.authenticate().then(()=>{
    console.log('server connected sucessfully')
}).catch((e)=>{
 console.log('there is an error', e.message)
})

app.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`)
})



