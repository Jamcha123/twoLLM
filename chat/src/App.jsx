import { useState, useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import './App.css'
import * as THREE from 'three'
import axios from 'axios'
import $ from 'jquery'

export default function App(){
  useEffect(() => {
    const form = document.getElementById("form")
    const prompt = document.getElementById("prompt")
    const text = document.getElementById("text")
    const models = document.getElementById("types")

    form.addEventListener("submit", async (e) => {
      e.preventDefault()
      if(models.value == "Select-Model"){
        alert("select a model")
        return
      }
      $("#text").empty()
      const link = "https://models-jmoufuae2a-uc.a.run.app?model=" + models.value + "&text=" + prompt.value
      const webby = (await axios.get(link))["data"]

      let x = document.createElement("h1")
      x.classList.add("text")
      x.innerText = "Me: " + prompt.value + ", AI: " + webby
      text.appendChild(x)
      text.scrollTop = 0
    })
  })
  return(
    <div className="relative w-[75%] h-[100vh] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
      <div className="relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
        <h1 className="text-2xl text-black mt-[2.5%]">TwoPrompt - Some Models can be slower </h1>
      </div>
      <div className="relative w-[100%] h-[65vh] mt-[5%] max-h-[65vh] min-h-[65vh] m-auto p-[0] flex flex-col align-top overflow-y-auto justify-center text-center ">
        <div className="relative w-[100%] h-[fit-content] m-auto mt-[2%] overflow-y-auto p-[0] flex flex-col text-center " id="text"></div>
      </div>
      <div className="relative w-[100%] h-[25%] m-auto p-[0] flex flex-col align-middle overscroll-y-auto justify-center text-center ">
        <form action=" " method="get" id="form" className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-transparent ">
          <input required type="text" id="prompt" placeholder="Enter A Prompt Here" className="relative w-[60%] cursor-text h-[100%] m-auto p-[0]  border-black border-r-transparent border-[2px] rounded-none text-center text-2xl text-black " />
          <select className="relative w-[20%] m-auto p-[0] h-[100%] bg-transparent text-center cursor-pointer text-xl text-black border-black border-r-transparent border-l-transparent border-[2px] rounded-none  " name="types" id="types">
            <option value="Select-Model">Select Model</option>
            <option value="Cohere-command-r-plus-08-2024">Cohere-command-r-plus-08-2024</option>
            <option value="DeepSeek-V3-0324">DeepSeek-V3-0324</option>
            <option value="Llama-4-Scout-17B-16E-Instruct">Llama-4-Scout-17B-16E-Instruct</option>
            <option value="Meta-Llama-3.1-405B-Instruct">Meta-Llama-3.1-405B-Instruct</option>
            <option value="Ministral-3B">Ministral-3B</option>
            <option value="Phi-4-mini-instruct">Phi-4-mini-instruct</option>
          </select>
          <motion.button type="submit" initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[20%] h-[100%] m-auto p-[0] bg-transparent border-black cursor-pointer z-[99] border-l-transparent border-[2px] rounded-none flex flex-col align-middle justify-center text-center text-xl text-black " >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

