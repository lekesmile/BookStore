import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const ModalMod = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <h4>{props.centeredModal}</h4>
            <p>
              {props.messagecont}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Cancel</Button>
            <Button variant="danger" onClick={props.onNohide}>Delete</Button>
          </Modal.Footer>
        </Modal>
      );
    }

export default ModalMod
