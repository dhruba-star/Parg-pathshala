import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNAQjVl4C_TjMvIdvQDAbGWaxm2QSgikY",
  authDomain: "parg-pathshala.firebaseapp.com",
  projectId: "parg-pathshala",
  storageBucket: "parg-pathshala.appspot.com",
  messagingSenderId: "180752050484",
  appId: "1:180752050484:web:42cd167cf51392f8525d61",
  measurementId: "G-LEHRJWCBD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Register with Email & Password
document.getElementById("signUpForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await sendEmailVerification(user);
    showPopup("✅ Confirmation email sent. Please check your inbox.");

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      phone,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    alert(`❌ ${error.message}`);
  }
});

// 🔐 Google Sign-In
document.getElementById("googleSignIn").addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber || "Not provided",
      provider: "Google",
      createdAt: new Date().toISOString()
    });

    alert("✅ Signed in with Google successfully!");
  } catch (error) {
    alert(`❌ ${error.message}`);
  }
});

// ✅ Popup function
function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);
}
