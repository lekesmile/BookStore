
import React from 'react'
import MaterialTab from './MaterialTab'
import moment from 'moment'


const Formbook = ({book, deletefromDatabase}) => {
  
  let columns = [
    { title: "Title", field: "title" },
    { title: "Author", field: "author" },
    { title: "Serial No", field: "serialNo" },
    { title: "Published Date", field: 'saved' }

  ]
  return (
    <div>
   
      <MaterialTab 
      title="BookStore"
      data={book}
      columns={columns}
      onRowDelete={deletefromDatabase}
      />
    </div>
  )
}

export default Formbook









// import React, { useState} from 'react';
// import Table from 'react-bootstrap/Table'

// import { FaRegEdit } from 'react-icons/fa';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { Button } from 'react-bootstrap';
// import ModalMod from './ModalMod';
// import FormSaveBook from './FormSaveBook';
// import FormEdit from './FormEdit'
 





// const Formbook = ({book, deletefromDatabase, search}) => {


//   // States
// const [modalShow, setModalShow] = useState(false);
// const [saveBook, setSaveBook] = useState(false)
// const [editBook, setEditBook] = useState(false)

// // Filter methods

//   const filteredBooks = book.filter(filterBok => {
//   return filterBok.author.toLowerCase().indexOf(search.toLowerCase()) !== -1;
// });




//     return (
//     <div className="form-div" >
     
//     <Table striped bordered hover="danger"  size="sm"  >
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Author</th>
//       <th>Title</th>
//       <th>Serial No</th>
//       <th>Published Date</th>
//       <th>Edit</th>
//       <th>Delete</th>
   
//     </tr>
//   </thead>
//   <tbody>
//       {filteredBooks.map((book, index)=>{
//      return(
//   <tr key={book._id}>
//       {/* <td>{Number(index) + 1}</td> */}
//      <td>{book._id}</td>
//      <td>{book.title}</td>
//      <td>{book.author}</td>
//      <td>{book.serialNo}</td>
//      <td>{moment(book.saved).format('L')}</td>
//      <td className="td-icons"> <FaRegEdit onClick={()=>setEditBook(true)} /></td>
//      <td className="td-icons"> <AiOutlineDelete onClick={() => setModalShow(true)}/> </td>
   

//    {/* //Delete Model */}
//      <ModalMod 
//      modelTitle="Comfirmation"
//      messageTitle="Are you sure you want to delete Book "
//      show={modalShow}
//      onHide={() => setModalShow(false)}
//      handleDel={()=> deletefromDatabase(book._id)} 
//      />
//     </tr>
//      )})}
//   </tbody>

// </Table> 
//     <Button 
//      className="addbook-button"
//      variant="outline-primary" 
//      size="sm" 
//      onClick={()=>{setSaveBook(!false)}}>
//      Save Book
//      </Button> 
//      {saveBook && <FormSaveBook />}
//      {/* {saveBook === true ? <FormSaveBook /> : ''} */}

//      {editBook && <FormEdit />}
//      </div>
//     )
// }


// export default Formbook