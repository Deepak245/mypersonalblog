import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AlertComp from "./AlertComp"
import { useDispatch, useSelector } from "react-redux";
import {signin} from "../Actions/authAction";

import {Box,Button,Typography,Modal,Grid, InputLabel,TextField, Divider} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Landing = () => {
    const [open, setOpen] = useState(true);
    const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isAuthenticated,user,error,showAlert,alertType} = useSelector(state=>state.loginDetails)
    

    const onHandleLogin=()=>{
      dispatch(signin(email,password));
      setOpen(false);
      
      navigate("/")
    }
    console.log(user,error)
    console.log(showAlert)
    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        {!user?<AlertComp errordata={[alertType,error]}/>:<>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sign In only For Admins
            </Typography>
            <Divider variant="middle" sx={{bgcolor:'red'}}/>
            <Grid container={true}>
                <InputLabel style={{color:'black'}} >Enter Email Id For Admin:</InputLabel>
                <TextField sx={{width:'500px'}}
                    required
                    id="outlined-required"
                    label="Required"
                    name='email'
                    
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
            </Grid>
                <br/>
            <Grid container={true}>
                <InputLabel style={{color:'black'}} >Enter Password:</InputLabel>
                <TextField sx={{width:'500px'}}
                    required
                    id="outlined-required"
                    label="Required"
                    name='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />
             </Grid>
             <br/>
             <Button variant="contained" onClick={onHandleLogin}>SignIn</Button>
          </Box>
          
        </Modal>
        </>}
        
        
      </div>
    );
}

export default Landing;
