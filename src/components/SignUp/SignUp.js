import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from 'firebase';
import './SignUp.css';
import { makeStyles } from '@material-ui/core/styles';

var firebaseui = require('firebaseui');

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    border: '1px solid rgba(0,0,0,0.7)',
  },
}));

var firebaseConfig = {
    apiKey: "AIzaSyAPUcCyrSsvtvgBw0pMDKUl4VcjrOL-hQY",
    authDomain: "wizee-b4ded.firebaseapp.com",
    databaseURL: "https://wizee-b4ded.firebaseio.com",
    projectId: "wizee-b4ded",
    storageBucket: "wizee-b4ded.appspot.com",
    messagingSenderId: "1023424069575",
    appId: "1:1023424069575:web:8a6c25b1c870270ade23e2",
    measurementId: "G-DGMSP5SDVP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered so Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);

function SignUp(){
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(true);
  const handleClose = (e) => {
    e.preventDefault();
    if(!document.getElementById("firebaseui-auth-container").contains(e.target)){
      setOpen(false);
    }
  };
  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>
        </CardContent>
      </Card>
      </Backdrop>
    </div>
  );
}
  
export default SignUp;