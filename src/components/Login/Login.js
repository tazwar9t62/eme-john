import React, { useState, useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";
import SignInForm from "../SignInForm/SignInForm";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
firebase.initializeApp(firebaseConfig);

function Login() {
  let [loggesInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let [user, setUser] = useState({
    isSignedIn: false,
    email: "",
    photo: "",
  });
  let provider = new firebase.auth.GoogleAuthProvider();
  let fbProvider = new firebase.auth.FacebookAuthProvider();
  let handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setLoggedInUser(result.user);
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  let handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        let { displayName, photoURL, email } = result.user;
        let signedInUser = {
          isSignedIn: true,
          email: email,
          photo: photoURL,
          name: displayName,
        };
        // console.log(result);
        setUser(signedInUser);
        setLoggedInUser(result.user);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  let handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        let signedOutUser = {
          isSignedIn: false,
          email: "",
          photo: "",
          name: "",
        };
        setUser(signedOutUser);
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SignInForm></SignInForm>
      {user.isSignedIn ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in using Google</button>
      )}

      <button onClick={handleFbSignIn}>Sign in using Facebook</button>

      {user.isSignedIn && (
        <div>
          <h2>Welcome {user.name}</h2>
          <h4>You're logged in using {user.email}</h4>
          <img style={{ width: "20%" }} src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}

export default Login;
