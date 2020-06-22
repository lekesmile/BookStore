import React from 'react'
import Table from 'react-bootstrap/Table'


const Formbook = () => {
    return (
    <div className="form-div">
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Author</th>
      <th>Title</th>
      <th>Serial No</th>
      <th>Published Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table> 
        </div>
    )
}


export default Formbook