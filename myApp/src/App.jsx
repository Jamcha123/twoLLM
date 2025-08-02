import { useState, useEffect, useRef } from 'react'
import './App.css'
import {motion} from 'framer-motion'
import * as THREE from 'three'
import axios from 'axios'

function AddNavbar(){
  return(
    <nav className="fixed z-[99] top-[2%] w-[100%] h-[4em] m-auto p-[0] bg-cyan-950 ">
      <ul className="flex flex-row align-middle justify-evenly text-center min-w-[100%] min-h-[100%] ">
        <li className="text-2xl text-white underline underline-offset-2" ><a href="#home">Landing Page</a></li>
        <li className="text-2xl text-white underline underline-offset-2" ><a href="#about">About TwoPrompt</a></li>
        <li className="text-2xl text-white underline underline-offset-2" ><a href="#models">List Of The Models</a></li>
      </ul>
    </nav>
  )
}
export default function App(){
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
      <AddNavbar></AddNavbar>
      <section id="home" className="flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] ">
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
          <div className="relative w-[75%] h-[20%] md:h-[20%] m-auto p-[0] flex flex-col align-middle justify-center text-center bg-transparent">
            <h1 className="text-4xl text-white" >TwoPrompt - Prompt different LLMs, Same CLI</h1>
            <p className="text-2xl text-white mt-[10%]"><code>pip install twoprompt --break-system-packages</code></p>
          </div>
          <div className="relative w-[75%] h-[75%] md:h-[50%] m-auto mt-[20%] p-[0] flex flex-col md:flex-row align-middle justify-center text-center bg-transparent ">
            <div className="relative w-[100%] md:w-[50%] h-[20%] md:h-[100%] m-0 ml-auto mr-auto p-[0] flex flex-col align-middle justify-center text-center ">
              <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[12em] h-[3em] m-auto p-[0] bg-white rounded-md text-black text-2xl  " >
                <a href="https://pypi.org/project/twoprompt/" className="underline underline-offset-4">The Python Package</a>
              </motion.button>
            </div>
            <div className="relative w-[100%] md:w-[50%] h-[20%] md:h-[100%] m-0 ml-auto mr-auto p-[0] flex flex-col align-middle justify-center text-center ">
              <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[12em] h-[3em] m-auto p-[0] bg-black rounded-md text-white text-2xl  " >
                <a href="https://github.com/Jamcha123/twoPrompt" className="underline underline-offset-4">The Github Repo</a>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] bg-cyan-950 ">
        <div className="relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-start justify-start text-start ">
          <h1 className="text-3xl text-white ml-[15%] " >About TwoPrompt</h1>
        </div>
        <div className="relative w-[100%] h-[95%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[95%] m-auto p-[0] flex flex-col align-middle justify-start text-start">
            <p className="text-2xl text-white ml-[15%] mt-[2%] " >
              TwoPrompt is a Python CLI tool for Prompting LLMs<br />
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%]">
              TwoPrompt has a free guest account (no login needed, 10 free prompts)<br />
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%]">
              TwoPrompt has a paid login account (login needed, unlimited prompts)<br />
              Cost is $0.02 per prompt or $1 per 50 prompts
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%]">
              <code>pip install twoprompt --break-system-packages</code>
            </p>
          </div>
        </div>
      </section>
      <section id="models" className="flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] bg-cyan-950 ">
        <div className="relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-middle text-end justify-end ">
          <h1 className="text-3xl text-white mr-[15%] " >LLMs Model List</h1>
        </div>
        <div className="relative w-[100%] h-[95%] m-auto p-[0] bg-transparent flex flex-col align-middle text-end justify-end">
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 1: Cohere-command-r-plus-08-2024</code><br />
          </p>
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 2: DeepSeek-V3-0324</code><br />
          </p>
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 3: Llama-4-Scout-17B-16E-Instruct</code><br />
          </p>
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 4: Ministral-3B</code><br />
          </p>
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 5: Phi-4-mini-instruc</code><br />
          </p>
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 6: Meta-Llama-3.1-405B-Instruc4</code><br />
          </p>
        </div>
      </section>
    </div>
  ) 
}