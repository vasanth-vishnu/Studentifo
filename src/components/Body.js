import React,{useState,useEffect} from 'react';
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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Studentifo
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
    [theme.breakpoints.down('sm')]: {
      display:'none'
    },
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
      [theme.breakpoints.down('sm')]: {
        display:'none'
      },
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

}));

export default function Body() {
  const classes = useStyles();
  const [logus,setLogus]=useState({
    email:"",
    password:""
  });
  const [uname,setUname]=useState({
    name:""
  });
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setLogus((prevLogus)=>{
      return {
          ...prevLogus,
          [name]:value
      }
    })
  }
  const history = useHistory();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios({
      url:'http://localhost:4000/login',
      method:'POST',
      data:logus
    }).then((data)=>{
      
        if(data.data.user){
        toast.success("loggedIn successfully");
        history.push('/home');}
        else{
          toast.error("login credentials are not matching");
        }
      
    })
    .catch((err)=>{console.log(err)});
    var c=0;
  
  
  }
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
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
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <div className={classes.ul2}>
          <ToastContainer autoClose={2000} position={toast.POSITION.TOP_CENTER}/>
        <ul style={{
              display:'flex',
             textAlign:'center',
             
          }}>
              <li style={{
                  
                  
                  backgroundColor:'#10AFA6',
                  padding:'10px',
                  borderRadius:'100%'
              }}><img src="/lg1.png" alt="" srcset="" height="50px" width="50px" style={{position:'relative',top:'5px'}} /></li>
              <li><h1 style={{
                       color:'#10AFA6',
                       fontFamily:'poppins',
                        fontSize:'30px',
                        width:'100%',
                        position:'relative',
                        left:'20px',
                        
                       
                        
                       }}>Studentifo <span style={{fontSize:'25px',color:'#10AFA6',opacity:'0.7',fontFamily:'Roboto'}}> Make It easy</span></h1>
                    </li>
          </ul>  
        </div>
            
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon style={{
                color:'white',
                backgroundColor:'#10AFA6'
            }}/>
          </Avatar>
          <Typography component="h1" variant="h5" style={{
              color:'#10AFA6'
          }}>
            Sign in
          </Typography>
          
          <form className={classes.form}>
            <CssTextField
              margin="normal"
              label="Email Address"
              variant="outlined"
              required
              fullWidth
              value={logus.email}
              onChange={handleChange}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={logus.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'#10AFA6',color:'white'}}
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
           
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{
                    color:'#008880'
                }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" style={{
                    color:'#008880'
                }}>
                  {"Don't have an account? Sign Up"}
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