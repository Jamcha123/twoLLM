import { useState, useRef, useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import {motion} from 'framer-motion'
import axios from 'axios'
import {initializeApp} from 'firebase/app'
import {initializeAppCheck, ReCaptchaEnterpriseProvider} from 'firebase/app-check'
import {getAuth, onAuthStateChanged, signInAnonymously, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, linkWithPopup, signInWithRedirect, signOut} from 'firebase/auth'
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

const config = {
    apiKey: "",
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
github.addScope("https://github.com/Jamcha123/twoPrompt")

const google = new GoogleAuthProvider()

const db = getFirestore(app)

function AddNavbar(){
    useEffect(() => {
        const arr = ["item1", "item2", "item3"]
        document.getElementById("link1").addEventListener("click", (e) => {
            e.preventDefault()
            arr.forEach((e) => {
                document.getElementById(e).style.display = "none"
            })
            document.getElementById("item1").style.display = "flex"
        })
        document.getElementById("link2").addEventListener("click", (e) => {
            e.preventDefault()
            arr.forEach((e) => {
                document.getElementById(e).style.display = "none"
            })
            document.getElementById("item2").style.display = "flex"
        })
        document.getElementById("link3").addEventListener("click", (e) => {
            e.preventDefault()
            arr.forEach((e) => {
                document.getElementById(e).style.display = "none"
            })
            document.getElementById("item3").style.display = "flex"
        })
    })
    return(
        <nav className="relative w-[20%] z-[99] h-[100vh] m-auto p-[0] flex flex-col align-middle justify-center text-center bg-white ">
            <ul className="relative w-[100%] h-[75%] m-auto p-[0] flex flex-col align-top justify-start text-start">
                <div className="relative w-[100%] h-[5em] m-0 mb-[0%] mt-[0%] p-[0] bg-cyan-100 hover:bg-cyan-200 flex flex-col align-middle justify-center text-center ">
                    <li className="text-2xl text-black underline underline-offset-2 "><a id="link1" href="#item1">Dashboard</a></li>
                </div>
                <div className="relative w-[100%] h-[5em] m-0 mb-[0%] mt-[0%] p-[0] bg-cyan-100 hover:bg-cyan-200 flex flex-col align-middle justify-center text-center ">
                    <li className="text-2xl text-black underline underline-offset-2"><a id="link2" href="#item2">API Keys</a></li>
                </div>
                <div className="relative w-[100%] h-[5em] m-0 mb-[0%] mt-[0%] p-[0] bg-cyan-100 hover:bg-cyan-200 flex flex-col align-middle justify-center text-center ">
                    <li className="text-2xl text-black underline underline-offset-2"><a id="link3" href="#item3">Usage and Billing</a></li>
                </div>
            </ul>
            <ul className="relative w-[100%] h-[25%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">

            </ul>
        </nav>
    )
}
export default function App(){
    const getTokens = async () => {
        const tokens = (await getDoc(doc(db, "/api/" + auth.currentUser.uid))).data()
        if(tokens == null || tokens == undefined){
            return "no database found"
        }
        const arr = tokens["tokens"]
        arr.forEach((e) => {
            console.log(e)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user.isAnonymous === true){
                document.getElementById("login").style.display = "flex"
                document.getElementById("logout").style.display = "none"
                document.getElementById("log").style.display = "flex"
                document.getElementById("keys").style.display = "none"

            }else if(user.isAnonymous === false){
                document.getElementById("login").style.display = "none"
                document.getElementById("logout").style.display = "flex"
                document.getElementById("log").style.display = "none"
                document.getElementById("keys").style.display = "flex"
                
            }
        })
        document.getElementById("create").addEventListener("click", async (e) => {
            e.preventDefault()
            if(auth.currentUser.isAnonymous === true){
                alert("login with google or github first")
            }
            console.log(await getTokens())
        })

    })
    return(
        <div className="relative w-[100%] h-[100%] max-h-[100vh] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
            <nav className="fixed w-[100%] z-[98] top-[0%] h-[5vh] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-white ">
                <ul className="relative w-[60%] m-auto p-[0] h-[100%] flex flex-row align-middle justify-start text-start  ">
                    <div className="relative w-[100%] h-[100%] m-auto p-[0] flex-col align-middle justify-center text-center  ">
                        <h1 className="text-black text-2xl mt-[1%] ml-[30%] " >TwoPrompt Dashboard</h1>
                    </div>
                </ul>
                <ul className="relative w-[40%] m-auto p-[0] h-[100%] flex flex-col align-middle justify-center text-center  ">
                    <div id="login" className="relative w-[100%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
                        <motion.button onClick={() => {linkWithPopup(auth.currentUser, github).then((value) => alert(value.providerId)).catch((err) => alert(err))}} className="relative w-[7em] h-[75%] m-auto p-[0] bg-emerald-800 rounded-none text-center text-xl text-white underline underline-offset-2 cursor-pointer  "  initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} >Github</motion.button>
                        <motion.button onClick={() => {linkWithPopup(auth.currentUser, google).then((value) => alert(value.providerId)).catch((err) => alert(err))}} className="relative w-[7em] h-[75%] m-auto p-[0] bg-black rounded-none text-center text-xl text-white underline underline-offset-2 cursor-pointer  "  initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} >Google</motion.button>
                    </div>
                    <div className="relative w-[100%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center" id="logout" >
                        <motion.button onClick={() => signOut(auth)} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[7em] h-[75%] m-auto p-[0] bg-gradient-to-tr from-emerald-800 to-black rounded-none text-center text-xl text-white underline underline-offset-2 cursor-pointer">
                            Logout
                        </motion.button>
                    </div>
                </ul>
            </nav>
            <AddNavbar></AddNavbar>
            <section className="relative w-[80%] h-[100vh] m-auto p-[0] flex flex-col align-middle justify-center text-center overflow-hidden " >
                <div id="item1" className="relative w-[100%] min-h-[100vh] m-auto p-[0] hidden flex-col align-middle justify-center text-center ">
                    
                </div>
                <div id="item2" className="relative w-[100%] min-h-[100vh] m-auto p-[0] hidden flex-col align-middle justify-center text-center ">
                    <div className="relative w-[100%] h-[25%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
                        <div className="relative w-[100%] h-[65%] m-auto p-[0] flex flex-row align-middle justify-center text-center "></div>
                        <div className="relative w-[90%] h-[35%] border-b-black border-b-[2px] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
                            <div className="relative w-[40%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                                <h1 className="text-2xl text-black " >API Keys</h1>
                            </div>
                            <div className="relative w-[60%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                                <div className="relative w-[100%] h-[65%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-end text-end ">
                                    <motion.button id="create" className="relative hover:rounded-md transition-all duration-100 w-[10em] h-[100%] m-auto p-[0] cursor-pointer rounded-none bg-gradient-to-tr from-black to-emerald-800 text-white text-xl text-center " initial={{scale: 1}} whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} transition={{type: "spring", duration: 1}}>
                                        + Create API Key
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[100%] h-[75%] m-auto p-[0] bg-transparent overflow-y-auto flex flex-col align-middle justify-center text-center ">
                        <div id="log" className="relative w-[30em] h-[10em] m-auto p-[0] bg-cyan-800 flex flex-col align-middle justify-center text-center ">
                            <div className="relative w-[100%] h-[25%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
                                <h1 className="text-2xl text-white mt-[2.5%] " >Login to generate keys</h1>
                            </div>
                            <div className="relative w-[100%] h-[75%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                                    <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[7em] h-[2.5em] hover:rounded-md duration-100 transition-all cursor-pointer m-auto p-[0] bg-gradient-to-tr from-black to-emerald-800 text-center text-2xl text-white underline underline-offset-2 ">Google Login</motion.button>
                                </div>
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                                    <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[7em] h-[2.5em] hover:rounded-md duration-100 transition-all cursor-pointer m-auto p-[0] bg-gradient-to-tr from-black to-emerald-800 text-center text-2xl text-white underline underline-offset-2 ">Github Login</motion.button>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-top justify-start text-start " id="keys">

                        </div>
                    </div>
                </div>
                <div id="item3" className="relative w-[100%] min-h-[100vh] m-auto p-[0] hidden flex-col align-middle justify-center text-center ">
                    
                </div>
            </section>
        </div>
    )
}