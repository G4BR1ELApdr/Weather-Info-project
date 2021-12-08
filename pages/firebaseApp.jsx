import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCP7_2HCL3Xtjb051ZkPP8ZYVT-yPU37b0",
    authDomain: "weather-info-project-61731.firebaseapp.com",
    projectId: "weather-info-project-61731",
    storageBucket: "weather-info-project-61731.appspot.com",
    messagingSenderId: "780740732399",
    appId: "1:780740732399:web:21e8105b0802b281ac421a"
  };
  

  function firebaseApp() {
    const app = initializeApp(firebaseConfig);
    console.log("app firebase", app)
    return app;
}

export default firebaseApp;