import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from 'firebase';
import './SignUp.css';
import { makeStyles } from '@material-ui/core/styles';
import { setItem, getItem } from '../../utility/localStorageControl';

var firebaseui = require('firebaseui')

const navigation = getItem('navigation');

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
  apiKey: "AIzaSyBd6JoX3J22YlU1_Sb2UwwIe4jyhc528_M",
  authDomain: "wizee-d334b.firebaseapp.com",
  databaseURL: "https://wizee-d334b.firebaseio.com",
  projectId: "wizee-d334b",
  storageBucket: "wizee-d334b.appspot.com",
  messagingSenderId: "541217265152",
  appId: "1:541217265152:web:4df368303996e0d2afaae5",
  measurementId: "G-85ZBMC8VC5"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        setItem('name', authResult.additionalUserInfo.profile.name);
        setItem('img', authResult.additionalUserInfo.profile.picture);
        setItem('idToken', authResult.credential.idToken);
        return true;
      },
      uiShown: function() {
        // The widget is rendered so Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: navigation === 'Hiii' ? '/search-by-weather' : '/home',
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