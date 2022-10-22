// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdQc7lHVAnKCFDoPypQ2OsFS_I0PN1UYo",
  authDomain: "dragon-news-91a9d.firebaseapp.com",
  projectId: "dragon-news-91a9d",
  storageBucket: "dragon-news-91a9d.appspot.com",
  messagingSenderId: "169319699435",
  appId: "1:169319699435:web:8a950c66d4e38f72143fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;