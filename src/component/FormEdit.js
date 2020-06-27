import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap'
import Alert from './Alert'
import Axios from 'axios'

const FormEdit = () => {

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [serialNo, setSerialNo] = useState('')
    const [PublishedDate, setPublishedDate] = useState('')
    const [alert, setAlert] = useState({show: 'false'})

    // auto Fill in the form 
    // const editFormReq = (id)=>{
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

    const SaveBook =(e)=>{
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
     
 <Form>
  <Form.Group >
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="author" name="author" value={author} onChange={ (e) => setAuthor( e.target.value ) } /> 
  </Form.Group>
  <Form.Group>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" name="title" value={title} onChange={ (e) => setTitle( e.target.value ) } />
  </Form.Group>
  <Form.Group >
    <Form.Label>Serial No</Form.Label>
    <Form.Control type="number" placeholder="serial no" name="serialNo" value={serialNo} onChange={ (e) => setSerialNo( e.target.value ) } />
  </Form.Group>
  <Form.Group >
    <Form.Label>Published Date</Form.Label>
    <Form.Control type="date" placeholder="date" name="publication" value={PublishedDate} onChange={ (e) => setPublishedDate( e.target.value ) }/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={SaveBook}>
    Submit
  </Button>

</Form> 
        </div>
    )
}

export default FormEdit


