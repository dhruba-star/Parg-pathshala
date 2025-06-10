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

// Firebase config (change these for your own project in production!)
const firebaseConfig = {
  apiKey: "AIzaSyBNAQjVl4C_TjMvIdvQDAbGWaxm2QSgikY",
  authDomain: "parg-pathshala.firebaseapp.com",
  projectId: "parg-pathshala",
  storageBucket: "parg-pathshala.appspot.com",
  messagingSenderId: "180752050484",
  appId: "1:180752050484:web:42cd167cf51392f8525d61",
  measurementId: "G-LEHRJWCBD2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Show popup
function showPopup(message, isError = false) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "block";
  popup.style.background = isError ? "#ffeaea" : "#eaffea";
  popup.style.borderColor = isError ? "#db4437" : "#0b66c3";
  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);
}

// Sign up with email and password
document.getElementById("signUpForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    showPopup("❌ Passwords do not match!", true);
    return;
  }

  if (!/^[0-9]{10,}$/.test(phone)) {
    showPopup("❌ Please enter a valid phone number.", true);
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      phone,
      provider: "email",
      createdAt: new Date().toISOString()
    });
    showPopup("✅ Account created! Please check your email for a verification link.");
    e.target.reset();
  } catch (error) {
    showPopup(`❌ ${error.message}`, true);
  }
});

// Google sign up
document.getElementById("googleSignUp").addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName || "No Name",
      email: user.email,
      phone: user.phoneNumber || "",
      provider: "google",
      createdAt: new Date().toISOString()
    });
    showPopup("✅ Signed up with Google successfully!");
  } catch (error) {
    showPopup(`❌ ${error.message}`, true);
  }
});
