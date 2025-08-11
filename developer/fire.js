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

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LeUEpErAAAAAHJn66FWfNdoc9QSsqxjeVpj6DPa"),
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app)
auth.useDeviceLanguage()

onAuthStateChanged(auth, (user) => {
    if(user == null){
        console.log("user, not found")
    }else{
        console.log("user, logged in")
    }
})