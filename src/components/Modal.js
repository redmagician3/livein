import React from 'react'
import classes from './Modal.module.css'

function Modal({ projectId }) {
  return <div className={classes.modalContainer}>{projectId}</div>
}

export default Modal
