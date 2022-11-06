import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCi5LA_7dQJfj1hx3m9qvV65vhAj_N6tNM",
  authDomain: "hackathon-pregnant-app.firebaseapp.com",
  projectId: "hackathon-pregnant-app",
  storageBucket: "hackathon-pregnant-app.appspot.com",
  messagingSenderId: "308235076361",
  appId: "1:308235076361:web:5c155a97898e3dd46489d8",
};

const app = initializeApp(firebaseConfig);
export default app;
