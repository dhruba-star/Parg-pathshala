// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNAQjVl4C_TjMvIdvQDAbGWaxm2QSgikY",
  authDomain: "parg-pathshala.firebaseapp.com",
  projectId: "parg-pathshala",
  storageBucket: "parg-pathshala.appspot.com",
  messagingSenderId: "180752050484",
  appId: "1:180752050484:web:42cd167cf51392f8525d61",
  measurementId: "G-LEHRJWCBD2",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Fetch all courses from Firestore collection "courses"
export async function fetchAllCourses() {
  try {
    const coursesCol = collection(db, "courses");
    const snapshot = await getDocs(coursesCol);
    const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return { success: true, courses };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Fetch single course by ID
export async function fetchCourseById(courseId) {
  try {
    const courseRef = doc(db, "courses", courseId);
    const courseSnap = await getDoc(courseRef);
    if (courseSnap.exists()) {
      return { success: true, course: { id: courseSnap.id, ...courseSnap.data() } };
    } else {
      return { success: false, message: "কোর্স পাওয়া যায়নি।" };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export { db };
