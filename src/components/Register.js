import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ZoomInRounded } from '@material-ui/icons';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#10AFA6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#10AFA6',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        
      },
      '&:hover fieldset': {
       
      },
      '&.Mui-focused fieldset': {
        borderColor: '#10AFA6',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(../bg3.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#10AFA6',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  ul1:{
      position:'absolute',
      top:'27%',
      
  },
  ul2:{
    textAlign:'center',
    width:'100%',
   
  },
  ng: {
      textAlign:'center',
      backgroundColor:'green',
      width:'100%',
      position:'absolute',
      top:'30px',
      
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  tit: {
    backgroundColor:'#10AFA6',
      color:'white',
      width:'100%'
  },
}));


export default function Register() {
  const classes = useStyles();
  const [udetails,setUdetails]=useState({
    name:"",
    email:"",
    password:""
  });
  const history = useHistory();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUdetails(prevUdetails=>{
      return {
        ...prevUdetails,
        [name]:value
      }
    })

  }
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("user registered");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.cpassword.value);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  if (udetails.password.length < 8) {
    toast.error("Your password must be at least 8 characters"); 
  }
  else if (udetails.password.search(/[a-z]/i) < 0) {
    toast.error("Your password must contain at least one letter.");
   }
   else if(re.test(udetails.email)==false){
     toast.error("email is not valid");
   }
   else if (udetails.password.search(/[0-9]/) < 0) {
    toast.error("Your password must contain at least one digit."); 
   }
    else if(e.target.password.value!== e.target.cpassword.value){
       toast.error("Passwords doesn't match");
    }
    else{
      toast.success("Registered successfully");
       axios({
         url:'http://localhost:4000/save',
         method:'POST',
         data:udetails
       }).then(()=>{
         console.log("data has been sent to the server");
         history.push("/")
       })
       .catch((err)=>{console.log(err)});
    }
  };
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      
      <Grid item xs={false} sm={12} md={12} className={classes.image}>
          <div className={classes.ul1}>
          <ul style={{
              display:'flex',
              marginLeft:'50px'
          }}>
              <li style={{
                  marginTop:'40px',
                  marginRight:'25px'
              }}><img src="/lg1.png" alt="" srcset="" height="100px" width="100px" /></li>
              <li><h1 style={{
                       color:'white',
                       fontFamily:'poppins',
                        fontSize:'70px'
                       }}>Studentifo</h1>
                       <h2 style={{
                           color:'white',
                           fontFamily:'OCR A Extended',
                           position:'relative',
                           top:'-50px',
                           left:'200px',
                           letterSpacing:'5px'
                       }}>make it easy</h2></li>
          </ul>  
          </div>  
      </Grid>
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square
      style={{
          marginTop:'-60px'
      }}>
        <div className={classes.paper}>
       
        <div className={classes.ul2}>
        <ul style={{
              display:'flex',
             textAlign:'center',
             
          }}>
              <li style={{
                  marginTop:'10px',
                  
                  backgroundColor:'#10AFA6',
                  padding:'10px',
                  borderRadius:'100%'
              }}><img src="/lg1.png" alt="" srcset="" height="50px" width="50px" /></li>
              <li><h1 style={{
                       color:'#10AFA6',
                       fontFamily:'poppins',
                        fontSize:'30px',
                        width:'100%',
                        position:'relative',
                        left:'20px',
                        top:'15px'
                       
                        
                       }}>Studentifo<span style={{fontSize:'25px',color:'#10AFA6',opacity:'0.7',fontFamily:'Roboto'}}> Make It easy</span></h1>
                    </li>
          </ul>  
        </div>
         <ToastContainer autoClose={2000} position={toast.POSITION.TOP_CENTER}/>
          <Avatar className={classes.avatar}>
            <VpnKeyOutlinedIcon style={{
                color:'white',
                backgroundColor:'#10AFA6'
            }}/>
          </Avatar>
          <Typography component="h1" variant="h5" style={{
              color:'#10AFA6'
          }}>
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
         
          <CssTextField
              margin="normal"
              label="Username"
              variant="outlined"
              required
              fullWidth
               onChange={handleChange}
               value={udetails.name}
              name="name"
            />
            
            <CssTextField
              margin="normal"
              label="Email Address"
              variant="outlined"
              required
              fullWidth
              onChange={handleChange}
              value={udetails.email}
              label="Email Address"
              name="email"
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              value={udetails.password}
              autoComplete="current-password"
            />
             <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Conform-Password"
              type="password"
              
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="#10AFA6" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'#10AFA6',color:'white'}}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2" style={{
                    color:'#008880'
                }}>
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}