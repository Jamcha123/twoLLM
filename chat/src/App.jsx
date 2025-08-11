import { useState, useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import './App.css'
import * as THREE from 'three'
import axios from 'axios'
import $ from 'jquery'
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'

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

signInAnonymously(auth)


export default function App(){
  useEffect(() => {
    const form = document.getElementById("form")
    const types = document.getElementById("types")
    const prompt = document.getElementById("prompt")
    const text = document.getElementById("text")

    form.addEventListener("submit", async (e) => {
      e.preventDefault()

      if(types.value == "Select-Model"){
        alert("please select a LLM model")
        return
      }
      $("#text").empty()

      if(types.value == "Google-Search"){
        const search = "https://search-tu6dy325kq-uc.a.run.app?query=" + prompt.value
        let target = (((await axios.get(search))["data"])["snippet"]).split("\n")

        target.forEach(async (e) => {
          let google = document.createElement("h1")
          google.classList.add("item2")
          google.style.marginTop = 5 + "%"
          google.innerText = e
          text.appendChild(google)
        })
        return 
      }

      let x = document.createElement("h1")
      x.classList.add("items")
      x.innerText = "sending..."
      text.appendChild(x)

      const link = "https://models-jmoufuae2a-uc.a.run.app?model=" + types.value + "&text=" + prompt.value
      const webby = (await axios.get(link))["data"]
      $("#text").empty()

      let y = document.createElement("h1")
      y.classList.add("item2")
      y.innerText = webby
      text.appendChild(y)
    })
  })
  return(
    <div className="relative w-[90%] h-[100vh] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
      <div className="relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
        <div className="relative w-[35%] h-[100%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center">
          <select className="relative w-[100%] m-auto p-[0] h-[100%] bg-gray-100 text-center cursor-pointer text-xl text-black border-solid border-[1px] border-white underline underline-offset-2 rounded-none  " name="types" id="types">
            <option value="Select-Model">Select A Model</option>
            <option value="Cohere-command-r-plus-08-2024">Cohere-command-r-plus-08-2024</option>
            <option value="DeepSeek-V3-0324">DeepSeek-V3-0324</option>
            <option value="Llama-4-Scout-17B-16E-Instruct">Llama-4-Scout-17B-16E-Instruct</option>
            <option value="Meta-Llama-3.1-405B-Instruct">Meta-Llama-3.1-405B-Instruct</option>
            <option value="Ministral-3B">Ministral-3B</option>
            <option value="Phi-4-mini-instruct">Phi-4-mini-instruct</option>
            <option value="Google-Search">Google Search Prompt</option>
          </select>
        </div>
        <div className="relative w-[65%] h-[100%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
          <div className="relative w-[fit-content] h-[100%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center">
            <h1 className="text-2xl mt-[0%] text-black" >TwoPrompt Chat - Some Models May Take Longer</h1>
          </div>
        </div>
      </div>
      <div className="relative w-[100%] h-[85%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center">
        <div id="text" className="relative w-[100%] max-h-[70%] min-h-[70%] m-auto p-[0] flex flex-col align-middle text-center overflow-y-auto overflow-x-hidden">

        </div>
        <form action="" method="get" id="form" className="relative z-[100] w-[100%] h-[15%] m-auto mb-[10%] p-[0] flex flex-col align-middle justify-center text-center bg-gray-200 rounded-xl border-transparent border-[2px]  ">
          <div className="w-[100%] h-[75%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center relative  ">
            <input id="prompt" type="text" required placeholder="Write A Prompt Here " className="relative w-[75%] h-[100%] m-auto p-[0] bg-transparent text-black text-2xl flex flex-col align-middle justify-center text-center" />
            <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} type="submit" className="relative cursor-pointer w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
              <span style={{color: "black", fontSize: 40 + "px"}} className="material-symbols-outlined">
                  send
              </span>
            </motion.button>
          </div>
          <div className="w-[100%] h-[25%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center relative  ">

          </div>
        </form>
      </div>
    </div>
  )
}

