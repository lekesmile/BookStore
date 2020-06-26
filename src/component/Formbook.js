import React, { useState} from 'react';
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import ModalMod from './ModalMod';
import FormSaveBook from './FormSaveBook';


const Formbook = ({book, deletefromDatabase}) => {

const [modalShow, setModalShow] = useState(false);
const [saveBook, setSaveBook] = useState(false)


    return (
    <div className="form-div" >
    <Table striped bordered hover="danger"  size="sm"  >
  <thead>
    <tr>
      <th>#</th>
      <th>Author</th>
      <th>Title</th>
      <th>Serial No</th>
      <th>Published Date</th>
      <th>Edit</th>
      <th>Delete</th>
   
    </tr>
  </thead>
  <tbody>
      {book.map((book, index)=>{
     return(
  <tr key={book._id}>
      <td>{Number(index) + 1}</td>
     <td>{book.author}</td>
     <td>{book.title}</td>
     <td>{book.serialNo}</td>
     <td>{moment(book.saved).format('L')}</td>
     <td className="td-icons"> <FaRegEdit /></td>
     <td className="td-icons"> <AiOutlineDelete onClick={() => setModalShow(true)}/> </td>
   
     <ModalMod 
     CenteredModal="Comfirmation"
     messagecont="Are you sure you want to delete Book "
     show={modalShow}
     onHide={() => setModalShow(false)}
     onNohide={()=> deletefromDatabase(book._id)} 
     />
    </tr>
     )})}
  </tbody>

</Table> 
    <Button 
     className="addbook-button"
     variant="outline-primary" 
     size="sm" 
     onClick={()=>{setSaveBook(!false)}}>
     Save Book
     </Button> 
     {saveBook && <FormSaveBook />}
     {/* {saveBook === true ? <FormSaveBook /> : ''} */}
     </div>
    )
}


export default Formbook