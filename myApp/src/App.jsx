import { useState, useEffect, useRef } from 'react'
import './App.css'
import {motion} from 'framer-motion'
import * as THREE from 'three'
import axios from 'axios'

function AddNavbar(){
  return(
    <nav className="fixed z-[100] top-[2%] w-[100%] h-[4em] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
      <ul className="flex flex-row align-middle justify-evenly text-center min-w-[75%] min-h-[100%] ">
        <div className="relative w-[30%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
          <motion.div initial={{scale: 1}} whileTap={{scale: 1.1}} whileHover={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[70%] h-[80%] m-auto p-[0] bg-sky-800 rounded-md flex flex-col align-middle justify-center text-center ">
            <li className="text-2xl text-white underline underline-offset-2 "><a href="#home">Homepage</a></li>
          </motion.div>
        </div>
        <div className="relative w-[30%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
          <motion.div initial={{scale: 1}} whileTap={{scale: 1.1}} whileHover={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[70%] h-[80%] m-auto p-[0] bg-sky-800 rounded-md flex flex-col align-middle justify-center text-center">
            <li className="text-2xl text-white underline underline-offset-2 "><a href="#about">About TwoPrompt</a></li>
          </motion.div>
        </div>
        <div className="relative w-[30%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ">
          <motion.div initial={{scale: 1}} whileTap={{scale: 1.1}} whileHover={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[70%] h-[80%] m-auto p-[0] bg-sky-800 rounded-md flex flex-col align-middle justify-center text-center">
            <li className="text-2xl text-white underline underline-offset-2 "><a href="#models">LLMs Models List</a></li>
          </motion.div>
        </div>
      </ul>
      <ul className="flex flex-col align-middle justify-evenly text-center min-w-[25%] min-h-[100%]">
        <div className="relative w-[100%] h-[100%] m-auto p-[0] rounded-md flex flex-row align-middle justify-center text-center bg-sky-950 ">
          <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative cursor-pointer underline underline-offset-2 w-[50%] h-[100%] m-auto p-[0] bg-transparent text-xl text-center text-white " >
            <a href="/chats.html">Start Prompting</a>
          </motion.button>
          <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[50%] h-[100%] m-0 ml-auto mr-auto mt-[0%] md:mb-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all "  >
              <a href="/developer.html">The Developer API</a>
          </motion.button>
        </div>
      </ul>
    </nav>
  )
}
function AddTHREE({id}){
  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000)

    const camera = new THREE.PerspectiveCamera(60, document.getElementById(id).clientWidth / document.getElementById(id).clientHeight, 1, 10000); 
    camera.position.set(0, 0, 30)

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#" + id), 
      antialias: true,
      depth: true
    })
    renderer.shadowMap.enabled = true, 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap,
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(document.getElementById(id).clientWidth, document.getElementById(id).clientHeight)
    renderer.render(scene, camera)

    function AddSphere(x, y, z){
      const spheregeometry = new THREE.TorusGeometry(20, 5)
      const spherematerial = new THREE.PointsMaterial({
        color: 0xffffff, 
        size: 0.1, 
        side: THREE.DoubleSide
      })
      const sphere = new THREE.Points(spheregeometry, spherematerial)
      sphere.position.set(x, y, z)
      sphere.rotation.x = 90
      sphere.name = "1"
      scene.add(sphere)


      renderer.render(scene, camera)
    }
    AddSphere(0, 0, 0)
    function resize(){
      camera.aspect = document.getElementById(id).clientWidth / document.getElementById(id).clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(document.getElementById(id).clientWidth, document.getElementById(id).clientHeight)
      renderer.render(scene, camera)
    }

    function animate(){
      window.addEventListener("resize", resize)
      let index = 0;
      if(id == "bg1"){
        scene.getObjectByName("1").position.y += index
        if(index >= 0 && index <= 5){
          index += 1
        }else{
          index -= 1
        }
        scene.getObjectByName("1").rotation.x += 0.005;
      }else{
        scene.getObjectByName("1").rotation.y += 0.005;
      }
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
  })
  return(
    <canvas id={id} className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent z-[97] " ></canvas>
  )
}
export default function App(){
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
      <AddNavbar></AddNavbar>
      <section id="home" className="flex flex-col align-middle justify-center text-center min-h-[90vh] min-w-[100%] h-[75vh] z-[98] ">
        <div className="relative w-[100%] m-auto p-[0] min-h-[90vh] h-[90vh] z-[97] flex flex-row align-middle justify-center text-center bg-transparent ">
          <AddTHREE id={"bg1"}></AddTHREE>
        </div>
        <div className="fixed w-[100%] h-[100vh] m-auto p-[0] bg-transparent z-[98] flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[65%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] h-[20em] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
              <h1 className="text-5xl text-white">TwoPrompt - LLM Model Prompter</h1>
              <h1 className="text-3xl mt-[5%] text-white">Prompt 6 Different LLMs</h1>
            </div>
          </div>
          <div className="relative w-[100%] h-[35%] m-auto p-[0] bg-black flex flex-row md:flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] md:w-[45%] h-[100%] md:h-[50%] m-auto p-[0] rotate-z-[0deg] grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row lg:align-middle lg:justify-center md:text-center gap-[30px] ">
              <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all "  >
                <a href="https://github.com/Jamcha123/twoPrompt">The Github Repo</a>
              </motion.button>
              <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all "  >
                <a href="https://pypi.org/project/twoprompt/">The Python Package</a>
              </motion.button>
              <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] md:mb-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all "  >
                <a href="/chats.html">Start Prompting</a>
              </motion.button>
              <motion.button initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] md:mb-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all "  >
                <a href="/developer.html">The Developer API</a>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] bg-cyan-950 z-[99] ">
        <div className="relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-start justify-start text-start ">
          <h1 className="text-3xl text-white ml-[15%] " >About TwoPrompt</h1>
        </div>
        <div className="relative w-[100%] h-[95%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[95%] m-auto p-[0] flex flex-col align-middle justify-start text-start">
            <p className="text-2xl text-white ml-[15%] mt-[2%] " >
              TwoPrompt is a Chat App and Developer API that prompts different LLMs <br />
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%] " >
              TwoPrompt Chat App is Free <br />
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%] " >
              TwoPrompt Developer API is paid and costs $0.04 per request<br />
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%]">
              TwoPrompt Chat App:  <a className="underline underline-offset-2 text-white text-2xl" href="/chats.html"> Start Prompting</a><br />
            </p>
            <p className="text-2xl text-white ml-[15%] mt-[2%]">
              TwoPrompt Developer API:  <a className="underline underline-offset-2 text-white text-2xl"  href="/developer.html"> Start Developing</a><br />
            </p>
          </div>
        </div>
      </section>
      <section id="models" className="flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] bg-cyan-900 z-[99] ">
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
            <code>LLM 6: Meta-Llama-3.1-405B-Instruct</code><br />
          </p>
          <p className="text-2xl text-white mr-[15%] mt-[2%] ">
            <code>LLM 7: jais-30b-chat</code><br />
          </p>

        </div>
      </section>
    </div>
  ) 
}