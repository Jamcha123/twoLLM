import { useState, useEffect, useCallback } from 'react'
import './App.css'
import {motion, number} from 'framer-motion'
import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithPopup } from 'firebase/auth'
import { collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'


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

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LeUEpErAAAAAHJn66FWfNdoc9QSsqxjeVpj6DPa"),
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app)
auth.useDeviceLanguage()

const github = new GithubAuthProvider()
github.addScope("https://github.com/Jamcha123/twoPrompt")

const google = new GoogleAuthProvider()

const db = getFirestore(app)

export default function App(){
    const [active, setActive] = useState(false)
    useEffect(() => {
        const arr = ["DeepSeek-V3-0324", "Cohere-command-r-plus-08-2024", "Llama-4-Scout-17B-16E-Instruct", "Phi-4-mini-instruct", "Ministral-3B", "Meta-Llama-3.1-405B-Instruct", "jais-30b-chat"]
        onAuthStateChanged(auth, async (user) => {
            if(user == null){
                return;
            }
            const bill = (await getDoc(doc(db, "/billing/" + user.uid))).data()
            if(bill == undefined || bill == null){
                await setDoc(doc(db, "/billing/" + user.uid), {
                    balance: 1
                })
            }
        })
        
        onAuthStateChanged(auth, async (user) => {
            if(user == null){
                return; 
            }
            if(user != null){
                const data = (await getDoc(doc(db, "/usage/" + user.uid))).data()

                if(data == null || data == undefined){
                    const obj = {}
                    arr.forEach((e) => {
                        obj[e.toString()] = Number.parseInt(0)
                    })
                    await setDoc(doc(db, "/usage/" + user.uid), obj)
                }
            }
            const items = document.getElementsByTagName("a")
            const usage = document.getElementsByClassName("usage")
            const cost = document.getElementsByClassName("cost")
            for(let i = 0; i != items.length; i++){
                let link = "https://api-jmoufuae2a-uc.a.run.app?model=" + arr[i]  + "&user=" + user.uid + "&text=hello" 
                items[i].value = arr[i]
                items[i].innerText = arr[i]
                items[i].href = link

                const target = ((await getDoc(doc(db, "/usage/" + user.uid))).data())[items[i].value]
                usage[i].innerText = target
                cost[i].innerText = "$" + target*0.04
            }
        })
        onAuthStateChanged(auth, async (user) => {
            if(user != null){
                const usage = (await getDoc(doc(db, "/usage/" + user.uid))).data()
                let target = 0
                arr.forEach((e) => {
                    target += usage[e.toString()]
                })
                target = target.toString()
                let total_price = Number.parseInt(target) * 0.04

                document.getElementById("usages").innerText = target + " prompts"
                document.getElementById("costs").innerText = "$" + total_price.toString()
                document.getElementById("use").innerText = "total usage: $" + total_price.toString()
                
                const cost = (await getDoc(doc(db, "/billing/" + user.uid))).get("balance")
                document.getElementById("bill").innerText = "balance left: $" + Number.parseFloat(cost)
                
                let maxBalance = (cost + total_price).toString()
                const bar = document.getElementById("bar")
                bar.value = cost.toString()
                bar.max = maxBalance
                
                const amount = document.getElementById("amount") 
                document.getElementById("form").addEventListener("submit", async (e) => {
                    e.preventDefault()
                    const link = "https://checkout-jmoufuae2a-uc.a.run.app?user=" + auth.currentUser.uid + "&amount=" + amount.value

                    window.location.href = link
                })
            }
        })
        onAuthStateChanged(auth, async (user) => {
            if(user == null){
                return; 
            }
            const history = (await getDoc(doc(db, "/history/" + user.uid))).get("data")
            if(history == null || history == undefined){
                await setDoc(doc(db, "/history/" + user.uid), {data: []})
            }
            history.forEach((e) => {
                const {price, total_prompts, user_id, date} = e

                let x = document.createElement("div")
                x.classList.add("items_add")

                let text1 = document.createElement("h1")
                text1.classList.add("histories")
                text1.innerText = "balance added : " + price
                x.appendChild(text1) 

                let text2 = document.createElement("h1")
                text2.classList.add("histories")
                text2.innerText = price + " equals " + total_prompts + " prompts"
                x.appendChild(text2)
                 
                let text4 = document.createElement("h1")
                text4.classList.add("histories")
                text4.innerText = "date added: " + date
                x.appendChild(text4)

                document.getElementById("history").appendChild(x)
            })
        })
        onAuthStateChanged(auth, (user) => {
            if(user != null){
                document.getElementById("cover").style.display = "none"
                document.getElementById("login").style.display = "none"
            }
        })
    })
    return(
        <div className="relative w-[100%] h-[150vh] m-auto p-[0] bg-transparent flex flex-col align-middle ">
            <div className="fixed w-[100%] h-[100%] m-auto p-[0] bg-gradient-to-tr from-violet-800 via-purple-600 to-pink-600 z-[1] "></div>
            <div className="fixed w-[100%] h-[100%] m-auto p-[0] bg-black opacity-[0.75] z-[2] "></div>
            <section id="main" className="flex flex-col align-middle justify-center text-center mt-[0%] min-h-[150vh] h-[150vh] max-h-[150vh] min-w-[100%] w-[100%] max-w-[100%] z-[3] " >
                <div className="relative w-[100%] h-[5vh] ml-auto mr-auto mt-[5%] mb-[0%] p-[0] flex flex-row align-middle rounded-tl-xl rounded-tr-xl justify-center text-center bg-transparent">
                    <div className="relative w-[fit-content] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                        <h1 className="text-2xl text-white">TwoPrompt Developer API (Models have different load speeds)</h1>
                    </div>
                </div>
                <div className="relative w-[100%] h-[120vh] m-auto mt-[5%] mb-[10%] p-[0] grid grid-cols-1 grid-rows-2 gap-[20px] bg-transparent ">
                    <div className="relative w-[85%] h-[100%] bg-gray-300 rounded-2xl mr-auto ml-auto mt-[0%]  p-[0] flex flex-col align-middle ">
                        <div className="relative w-[100%] h-[10%] mr-auto ml-auto mt-[0%] xl:mt-[5%] mb-[0%] p-[0] flex flex-col align-middle justify-center text-center ">
                            <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
                                <h1 className="text-2xl text-black">LLMs Models List (text query - prompt input)</h1>
                            </div>
                        </div>
                        <div className="relative w-[90%] h-[90%] min-h-[70%] max-h-[70%] overflow-y-auto overflow-x-hidden m-auto mt-[2%] mb-[0%] p-[0] flex flex-col align-middle ">
                            <div className="relative w-[100%] border-b-black border-b-[2px] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-2xl text-black mb-[2%]">LLM Models Links</h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-2xl text-black mb-[2%]">Usage</h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-2xl text-black mb-[2%]">Cost ($0.04 per prompt)  </h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black">Total Cost and Usage:</h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 id="usages" className="text-xl text-black"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 id="costs" className="text-xl text-black"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[4em] mt-[5%] mb-[15%] m-auto p-[0] bg-transparent flex flex-row align-center text-center justify-center ">
                                <div className="relative w-[50%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <a className="text-xl text-violet-700 underline underline-offset-4 " href=""></a>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black usage"></h1>
                                </div>
                                <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-center text-center ">
                                    <h1 className="text-xl text-black cost"></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[85%] h-[100%] bg-gray-300 rounded-2xl mr-auto ml-auto mt-[0%]  p-[0] flex flex-col align-middle">
                        <div className="relative w-[100%] h-[25%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                            <h1 className="text-2xl text-black mt-[2%]" >Billing - TwoPrompt API (VAT included)</h1>
                            <div className="relative w-[100%] h-[90%] m-auto mt-[1%] mb-[0] p-[0] flex flex-col align-middle justify-center text-center">
                                <div className="relative w-[75%] h-[50%] m-auto p-[0] rounded-xl flex flex-row align-top justify-evenly text-start">
                                    <h1 id="bill" className="text-2xl mb-[5%] text-black"></h1>
                                    <h1 id="use" className="text-2xl mb-[5%] text-black"></h1>
                                </div>
                                <progress id="bar" className="relative w-[75%] h-[20%] m-auto p-[0] rounded-xl " ></progress>
                            </div>
                        </div>
                        <div className="relative w-[100%] h-[75%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                            <div className="relative w-[75%] h-[25%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
                                <div className="relative w-[30%] h-[25%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
                                    <h1 className="text-2xl text-black mt-[5%]">Billing History</h1>
                                </div>
                                <div className="relative w-[100%] h-[75%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
                                    <motion.button onClick={active? () => setActive(false) : () => setActive(true)} initial={{scale: 1}} whileTap={{scale: 1.1}} whileHover={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[10em] h-[1.75em] underline underline-offset-2 cursor-pointer m-auto p-[0] bg-green-800 flex flex-col align-middle justify-center text-center text-2xl text-white " >+ Add To Balance</motion.button>
                                    <motion.form initial={{scaleY: 0, display: "none"}} animate={{scaleY: active? 1 : 0, display: active? "flex" : "none"}} transition={{type: "spring", duration: 1}} action="" method="get" id="form" className="relative w-[30em] z-[100] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-transparent " >
                                        <input required placeholder="Enter a amount to add" type="number" className="relative w-[75%] h-[100%] m-auto p-[0] text-center text-xl text-black bg-gray-300 " id="amount" />
                                        <motion.button type="submit" initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[25%] cursor-pointer h-[100%] m-auto p-[0] text-center text-xl text-black bg-gray-400">
                                            Checkout
                                        </motion.button>
                                    </motion.form>
                                </div>
                            </div>
                            <div id="history" className="relative w-[75%] min-h-[75%] h-[75%] max-h-[75%] overflow-y-auto overflow-x-hidden m-auto p-[0] bg-transparent flex flex-col align-middle">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cover" className="fixed w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center opacity-[0.75] bg-gray-800 z-[4] ">

            </section>
            <section id="login" className="fixed w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center z-[5]  ">
                <div className="relative w-[30em] h-[20em] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
                    <div className="relative w-[100%] h-[15%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
                        <h1 className="text-3xl text-white" >Login To Access The API</h1>
                    </div>
                    <div className="relative w-[100%] h-[25%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
                        <motion.button onClick={() => signInWithPopup(auth, google)} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[15em] h-[75%] m-auto p-[0] flex flex-col align-middle justify-center text-center bg-black cursor-pointer text-2xl text-green-200 underline underline-offset-2  " >
                            Google Login
                        </motion.button>
                        <motion.button onClick={() => signInWithPopup(auth, github)} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} className="relative w-[15em] h-[75%] m-auto p-[0] flex flex-col align-middle justify-center text-center bg-white cursor-pointer text-2xl text-black underline underline-offset-2  " >
                            GitHub Login
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    )
}