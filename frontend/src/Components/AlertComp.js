import React,{useState} from 'react'
import {Alert,Collapse,IconButton}  from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const AlertComp = (props) => {
    const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
        <Alert severity={props.errordata[0]}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.errordata[1]}
        </Alert>
      </Collapse>
  )
}

export default AlertComp
