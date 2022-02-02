import React, { useState } from 'react'
import './ContactForm.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Box, CircularProgress, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  email: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  message: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  submit: {
    '&': {
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#6de9ab',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const ContactForm = () => {
  const [status, setStatus] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')

  const classes = useStyles()

  const submitForm = (ev) => {
    ev.preventDefault()
    const data = {
      email:emailText,
      message:messageText
    }
    setStatus("LOADING")
    
    axios.post("https://armando-portfolio-app.herokuapp.com/cotact", {email:data.email, message:data.message})
    .then((res)=>{
      if (res.data.message === "success") {
        setStatus("SUCCESS");
        setEmailText("");
        setMessageText("");
        
      }
    }).catch((err)=>{
      setStatus("ERROR");
      console.log(err);
    });
  }

  const handleEmailChange = (event) => {
    const input = String(event.target.value)
    setEmailText(input)
  }

  const handleMessageChange = (event) => {
    const input = String(event.target.value)
    setMessageText(input)
  }

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        action="https://formspree.io/mvolplar"
        method="POST"
      >
        <TextField
          className={classes.email}
          type="email"
          name="email"
          label="Email"
          value={emailText}
          onChange={handleEmailChange}
          variant="filled"
          required
        />
        <TextField
          className={classes.message}
          type="text"
          name="message"
          label="Message"
          value={messageText}
          onChange={handleMessageChange}
          multiline
          rows="5"
          variant="filled"
          required
        />
        {status === 'SUCCESS' && (
          <Typography variant='h5'  style={{color:"#0be779", textAlign:"center"}}>Thanks!, I will try to response soon</Typography>
        ) }
        {status === "LOADING" && (
          <Box sx={{textAlign:"center"}}>
          <CircularProgress color="primary"  />
          </Box>
        )}
         {status === "" && (
          <Button className={classes.submit} type="submit" variant="contained">
          Submit
        </Button>
        )}
  
        {status === 'ERROR' && <Typography  variant='h5' style={{color:"#e70b0b", textAlign:"center"}}>Ooops! There was an error.</Typography>}
      </form>
    </div>
  )
}

export default ContactForm
