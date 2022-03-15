import React from "react"

import firebase from "firebase/app"

import { auth } from "../firebase"

// Disable dragging img
const div = document.querySelector('div')
div.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

div.addEventListener('drop', (e) => {
  e.preventDefault()
})

export default function Login() {
  return (
    <div id='login-page'>
      <div className="mobile">You are using mobile device which is not compatible. Please switch to Laptop/PC.
        <br /> - Chimmyw
      </div>
      <div id='login-card'>
        <img className="login-logo" draggable="false" src="https://i.imgur.com/SbfSBcv.png"></img>
        <h2>LOGIN</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <img className="gg-icon" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="GOOGLE"></img> Đăng nhập bằng Google
        </div>

        <div className="gg-or-fb">-- hoặc --</div>

        <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <img className="fb-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="GOOGLE"></img> Đăng nhập bằng Facebook
        </div>
      </div>
    </div>
  )
}
