const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Book = require('./schema/Book')

require('./database/databaseConn')

const app = express()


//Middleware
app.use(bodyParser.json())
app.use(cors())


//Route

app.get('/', async (req, res) => {
    try {
     const findBook = await Book.find({})
     return  res.json({'All books on our database': findBook}).status(200)
    } catch (error) {
        return  res.json({'Sorry no data found on our database': error}).status(400)
    }
    
})

app.post('/', async (req, res)=>{
     try {
         const firstBook = new Book({
            author: req.body.author ,
            title: req.body.title ,
            SerialNo: req.body.SerialNo,
            PublicationDate: req.body.PublicationDate
         })

       const savedBook =  await firstBook.save()

       return  res.json({'Book successfully saved into database': savedBook }).status(200)
     } catch (error) {
        return  res.json({'Dababase is currently down': error}).status(400)
     }
})

app.delete('/:id', async (req, res)=>{
    try {
    const findBook =  await Book.findByIdAndDelete({_id: req.params.id})
        
       return  res.json({"Deleted Book is " : findBook}).status(200)
    } catch (error) {
        return  res.json({'Dababase cannot delete selected Book ': error}).status(400)
    }
    
})

app.put('/:id', async (req, res)=>{
    try {
        const updateBook = await Book.findByIdAndUpdate({_id: req.params.id}, req.body )
        return  res.json({"Updated Book " : updateBook}).status(200)
    } catch (error) {
        return  res.json({'Book cannot be updated, try again later ': error.message}).status(400)
    }
    
})


const port = process.env.PORT || 5000

app.listen(port, (req, res)=>{
   console.log(`Server is running on port ${port}`) 

})

