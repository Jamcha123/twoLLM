import {useCallback, useRef, useEffect, useState, use} from 'react'
import './App.css'
import {motion} from 'framer-motion'
import * as THREE from 'three'
import axios from 'axios'
import git from './assets/github-mark-white.png'
import google from './assets/google.png'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import {} from 'firebase/firestore'

const config = {
    apiKey: ,
    authDomain: "ai-hub-8f387.firebaseapp.com",
    projectId: "ai-hub-8f387",
    storageBucket: "ai-hub-8f387.firebasestorage.app",
    messagingSenderId: "721658943205",
    appId: "1:721658943205:web:36e4e757a3f8b45f71a60c",
    measurementId: "G-6ESG13BJGF"
}

const app = initializeApp(config)

const auth = getAuth(app)
auth.useDeviceLanguage()

const github = new GithubAuthProvider()

const gooLogin = new GoogleAuthProvider()

export default function App(){
  const [active, setActive] = useState(false)
  const [hide, setHide] = useState(false)
  useEffect(() => {
    document.getElementById("login").addEventListener("submit", (e) => {
      e.preventDefault()
      const username = document.getElementById("username1")
      const password = document.getElementById("password1")

      signInWithEmailAndPassword(auth, username.value, password.value).then((value) => {
        alert(value)
      }).catch((err) => {
        alert(err)
      })
    })
    document.getElementById("register").addEventListener("submit", (e) => {
      e.preventDefault()
      const username = document.getElementById("username2")
      const password = document.getElementById("password2")

      createUserWithEmailAndPassword(auth, username.value, password.value).then((value) => {
        alert(value)
      }).catch((err) => {
        alert(err)
      })
    })
    document.getElementById("google1").addEventListener("click", (e) => {
      e.preventDefault()

      signInWithPopup(auth, gooLogin)
    })
    document.getElementById("git1").addEventListener("click", (e) => {
      e.preventDefault()

      signInWithPopup(auth, github)
    })
    document.getElementById("git2").addEventListener("click", (e) => {
      e.preventDefault()

      signInWithPopup(auth, github)
    })
    document.getElementById("google2").addEventListener("click", (e) => {
      e.preventDefault()

      signInWithPopup(auth, gooLogin)
    })
    document.getElementById("forgot").addEventListener("click", (e) => {
      e.preventDefault()
      const username = document.getElementById("username1")
      if(username.value == "" || username.value == null){
        alert("please enter your email in the email input section")
      }
      sendPasswordResetEmail(auth, username.value).then((value) => {
        alert(value)
      }).catch((err) => {
        alert(err)
      })
    })
    onAuthStateChanged(auth, (user) => {
      if(user != null){
        document.getElementById("login").style.display = "none"
        document.getElementById("register").style.display = "none"
        document.getElementById("auth").style.display = "flex"
      }
    })
  })
  return(
    <div className="fixed w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <motion.div initial={{display: "none"}} animate={{display: active? "none": "flex"}} transition={{type: "spring", duration: 0}} className="relative w-[30em] h-[33em] m-auto p-[0] bg-slate-900 flex flex-col align-middle justify-center text-center ">
        <div className="relative w-[100%] h-[4em] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
          <h1 className="text-2xl text-white mt-[2%] ">TwoLLM Login</h1>
        </div>
        <form action="" method="get" id="login" className="relative w-[100%] h-[17em] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <input required placeholder="enter your email" type="email" id="username1" className="relative w-[100%] h-[4em] m-auto p-[0] text-center text-xl text-white bg-transparent " />
          <input required placeholder="enter your password" type="password" id="password1" className="relative w-[100%] h-[4em] m-auto p-[0] text-center text-xl text-white bg-transparent " />
          <motion.input initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} type="submit" id='submit1' value="Login" className="relative w-[100%] h-[4em] m-auto p-[0] bg-transparent text-center text-white text-xl underline underline-offset-2 cursor-pointer " />
          <div className="relative w-[100%] h-[5em] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
            <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
              <img src={git} className="relative cursor-pointer w-[40%] h-[100%] m-auto p-[0] scale-[0.75] git" id="git1" alt="" />
            </div>
            <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
              <img src={google} className="relative cursor-pointer w-[40%] h-[100%] m-auto p-[0] scale-[0.75] google" id="google1" alt="" />
            </div>
          </div>
        </form>
        <motion.button onClick={() => setActive(true)} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[100%] h-[3em] m-auto p-[0] text-xl text-white underline underline-offset-2 cursor-pointer  ">
          No Login, Register Now
        </motion.button>
        <motion.button id="forgot" initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[100%] h-[3em] m-auto p-[0] text-xl text-white underline underline-offset-2 cursor-pointer  ">
          Forgot Password
        </motion.button>
      </motion.div>
      <motion.div initial={{display: "none"}} animate={{display: active? "flex": "none"}} transition={{type: "spring", duration: 0}} className="relative w-[30em] h-[30em] m-auto p-[0] bg-slate-900 flex flex-col align-middle justify-center text-center ">
        <div className="relative w-[100%] h-[4em] m-auto p-[0] bg-transparent mt-[0%] flex flex-col align-middle justify-center text-center ">
          <h1 className="text-2xl text-white mt-[2%] ">TwoLLM Register</h1>
        </div>
        <form action="" method="get" id="register" className="relative w-[100%] h-[17em] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <input required placeholder="enter a email" type="email" id="username2" className="relative w-[100%] h-[4em] m-auto p-[0] text-center text-xl text-white bg-transparent " />
          <input required placeholder="enter a password" type="password" id="password2" className="relative w-[100%] h-[4em] m-auto p-[0] text-center text-xl text-white bg-transparent " />
          <motion.input initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} type="submit" id='submit2' value="Register" className="relative w-[100%] h-[4em] m-auto p-[0] bg-transparent text-center text-white text-xl underline underline-offset-2 cursor-pointer " />
          <div className="relative w-[100%] h-[5em] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
            <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
              <img src={git} className="relative cursor-pointer w-[40%] h-[100%] m-auto p-[0] scale-[0.75] git" id="git2" alt="" />
            </div>
            <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
              <img src={google} className="relative cursor-pointer w-[40%] h-[100%] m-auto p-[0] scale-[0.75] google" id="google2" alt="" />
            </div>
          </div>
        </form>
        <motion.button onClick={() => setActive(false)} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[100%] h-[3em] m-auto p-[0] text-white text-xl text-center underline underline-offset-2 bg-transparent cursor-pointer ">
          Already User, Login Now
        </motion.button>
      </motion.div>
      <motion.div id="auth" initial={{display: "none"}} animate={{display: hide? "flex": "none"}} transition={{type: "spring", duration: 0}} className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] m-auto p-[0] bg-black z-[99] rounded-xl ">
        <div className="relative w-[40em] h-[10em] m-auto p-[0] bg-slate-800 flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[25%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
              <motion.div initial={{scale: 1}} animate={{scale: 0.5}} transition={{type: "spring", duration: 1, repeat: true, ease: "easeInOut"}} className="relative w-[3em] h-[3em] m-0 ml-[5%] p-[0] rounded-full bg-green-400 "></motion.div>
              <motion.div initial={{scale: 1}} animate={{scale: 0.5}} transition={{type: "spring", duration: 2, repeat: true, ease: "easeInOut"}} className="relative w-[3em] h-[3em] m-0 ml-[5%] p-[0] rounded-full bg-green-400 "></motion.div>
              <motion.div initial={{scale: 1}} animate={{scale: 0.5}} transition={{type: "spring", duration: 3, repeat: true, ease: "easeInOut"}} className="relative w-[3em] h-[3em] m-0 ml-[5%] p-[0] rounded-full bg-green-400 "></motion.div>
            </div>
          </div>
          <div className="relative w-[100%] h-[75%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center">
              <h1 className="text-2xl text-white">Authenticated and ready to use the twoLLM cli</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}