import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from '../firebase/firebase.config'


export default function Home() {
    //set up a google sign in popup function 
  const GoogleSignIn = async () => { //going to be async bc we are waiting for some sort of response before it starts to do something

    const provider = new GoogleAuthProvider(); //creating a brand new auth, grabbing information based on the new user  

    const authorization = auth; //grabbing the auth that we imported above
    const result = await signInWithPopup(authorization, provider); //grabbing authorization and provider, working with those keys, then connect to the firebase we created, logging in using the user's gmail account 
    console.log(result);
  }

  return (
    <div >

      <button onClick={() => GoogleSignIn()}>Log In with Google</button>
      
    </div>
  )
}
