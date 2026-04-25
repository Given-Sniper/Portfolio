// Import Firebase (use CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
  getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
  getStorage 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTazYyKbUyWrcuGipWumX4pLSiFP_XKSk",
  authDomain: "my-portfolio-dc74e.firebaseapp.com",
  projectId: "my-portfolio-dc74e",
  storageBucket: "my-portfolio-dc74e.firebasestorage.app",
  messagingSenderId: "593512518083",
  appId: "1:593512518083:web:3a8a12b9cdad6d46d42d76",
  measurementId: "G-BG1E2JP4LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
