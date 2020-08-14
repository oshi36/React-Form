import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from './images/image.jpg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
    paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding:theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const [currentResult,setCurrentResult]=useState("");
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Submit=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let result= (1/parseInt(currentNum)).toFixed(3);
    setCurrentResult(result);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('Result:', currentResult);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentResult(0);
  }


  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>  
      <div className="card" >
      <img src={Image} className="image" alt="Oshi Gupta Image"  />
      <div className="card-body">
          <p className="card-text">
      <strong className="details">Oshi Gupta</strong>
      <br />
      <strong className="details">2018BTCS054</strong>
              <br />
          </p>
      </div>
      </div> 
      </Grid>
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Multiplicative Inverse
          </Typography>
       
          <Avatar className={classes.avatar}>
            <AssignmentRoundedIcon />
          </Avatar>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              required
              fullWidth
              id="num"
              label="Enter a number"
              name="num"
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              readOnly
              type="text"
              fullWidth
              name="result"
              label="Result"
              id="result"
              value={currentResult}
              
            />
            <Button id="btn1"
            onClick={Submit}
              type="submit"
              halfWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              See The Answer
            </Button> 
            
            <Button id="btn2"
            onClick={Clear}
              type="submit"
              halfWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
              Clear
            </Button>
          
          </form>
        </div>
      </Grid>
    </Grid>
  );
}