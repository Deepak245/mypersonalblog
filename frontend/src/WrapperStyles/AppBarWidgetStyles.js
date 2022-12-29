



import { makeStyles } from "@mui/styles"



const HeaderStyle = {
    customColor :{
      background:'linear-gradient(to bottom, #02599C 0%, #0463a3 100%)'
  },
  HeaderWidth:"lg",
  IconButtonColor:"inherit"
  }

const useStyles = makeStyles({
  title:{flexGrow:1},
  tagline:{
    fontSize:'1rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    justifyContent:"center",
    fontFamily:'Montserrat'
  }
})
export {HeaderStyle,useStyles}

