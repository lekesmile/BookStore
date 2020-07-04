import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import Alert from './Alert'
import Axios from 'axios'

const FormEdit = () => {

  

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [serialNo, setSerialNo] = useState('')
  const [PublishedDate, setPublishedDate] = useState('')
  const [alert, setAlert] = useState({show: 'false'})

  // auto Fill in the form 
  // const editFormFillContent = (id)=>{
  //     Axios.get(`http://localhost/${id}`)
  //     .then((res)=>{
  //         setAuthor(res.data.author)
  //         setTitle(res.data.title)
  //         setSerialNo(res.data.serialNo)
  //         setPublishedDate(res.data.setPublishedDate)
    
  //     })
  //   }

// Request Object to post

  const newbook = {
      "author": author,
      "title": title,
      "serialNo": serialNo,
      "saved": PublishedDate
  }
  
  // Axios Post request

  const saveEditedBook =(e)=>{
      e.preventDefault(); 
      Axios.post('http://localhost:5000', newbook)
      .then((res)=>{
          console.log(res.data)
          handleAlert({type: 'alert-success', text: 'Book Added'})
           setTimeout(window.location.reload(), 30000)
        
      })
      .catch((e)=>{
          console.log(e)
          handleAlert({type: 'alert-error', text: 'Sorry, we cannot add book'})
         
      })
  }

  //Handle Alert

const handleAlert = ({type, text}) =>{
  setAlert({show:true, type, text})
  setTimeout(()=>{
      setAlert({show:false})
  }, 8000)
}





    return (
        <div className="FormBook">
            <h3 className="FormBookH3">Edit Book</h3>
            {alert.show && <Alert type={alert.type} text={alert.text} />}
     
 <form>
     <TextField
          id="outlined-multiline-flexible"
          label="author"
          multiline
          rowsMax={4}
          value={author}
          onChange={ (e) => setAuthor( e.target.value ) }
          variant="outlined"
       />
        <TextField
          id="outlined-multiline-flexible"
          label="title"
          multiline
          rowsMax={4}
          value={title}
          onChange={ (e) => setTitle( e.target.value ) }          
          variant="outlined"
       />
        <TextField
          id="outlined-multiline-flexible"
          label="serial No"
          multiline
          rowsMax={4}
          value={serialNo}
          onChange={ (e) => setSerialNo( e.target.value ) }
          variant="outlined"
       />
        <TextField
          id="outlined-multiline-flexible"
          label="published date"
          multiline
          rowsMax={4}
          value={PublishedDate}
          onChange={ (e) => setPublishedDate( e.target.value ) }
          variant="outlined"
       />
  <Button variant="contained" color="primary" type="submit" onClick={saveEditedBook}>
    Submit
  </Button>

</form> 
        </div>
    )
}

export default FormEdit


