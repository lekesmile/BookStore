import React from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
const ModalMod = (props) => {
  return (
    <div>

<Modal
  open={props.show}
  onClose={props.onHide}
  aria-labelledby={props.modelTitle}
  aria-describedby={props.messageTitle}
>
  {props.body}

          <Button variant="danger" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleDel}>
              delete book
            </Button>
</Modal>

    </div>
  )
}

export default ModalMod
