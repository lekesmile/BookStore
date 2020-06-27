const express = require('express')
const router = express.Router()
const Book = require('../schema/Book')



router.get('/', async (req, res) => {
    try {
     const findBook = await Book.find({})
     return  res.json(findBook).status(200)
    } catch (error) {
        return  res.json({'Sorry no data found on our database': error}).status(400)
    }
    
})

router.get('/:id', async (req, res) => {
    try {
     const findBookById = await Book.findById({_id: req.params.id})
     return  res.json(findBookById).status(200)
    } catch (error) {
        return  res.json({'Sorry no data found on our database': error}).status(400)
    }
    
})


router.post('/', async (req, res)=>{

  let {author, title, serialNo, sublicationDate} = req.body 

     try {
         const firstBook = new Book({
            author,
            title ,
            serialNo,
            sublicationDate
         })

       const savedBook =  await firstBook.save()

       return  res.json({'Book successfully saved into database': savedBook }).status(200)
     } catch (error) {
        return  res.json({'Dababase is currently down': error}).status(400)
     }
})

router.delete('/:id', async (req, res)=>{
    try {
    const findBook =  await Book.findByIdAndDelete({_id: req.params.id})
        
       return  res.json({"Deleted Book is " : findBook}).status(200)
    } catch (error) {
        return  res.json({'Dababase cannot delete delected Book ': error}).status(400)
    }
    
})

router.put('/:id', async (req, res)=>{
    try {
        const updateBook = await Book.findByIdAndUpdate({_id: req.params.id}, req.body )
        return  res.json({"Updated Book " : updateBook}).status(200)
    } catch (error) {
        return  res.json({'Book cannot be updated, try again later ': error.message}).status(400)
    }
    
})


module.exports = router