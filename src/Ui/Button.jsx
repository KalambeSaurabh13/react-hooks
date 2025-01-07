import React from 'react'
import Button from 'react-bootstrap/Button';
const ButtonUi = ({children,clickEvent,variant}) => {

  return (
    <Button style={{margin:'10px', padding:'15px'}} onClick={clickEvent} variant={variant}>{children}</Button>
  )
}

export default ButtonUi