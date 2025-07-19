import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard.jsx";
import CourseHero from "../components/CourseHero.jsx";
import { db } from "../firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";

// Component to fetch and show courses
function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const snapshot = await getDocs(collection(db, "courses"));
        const courseList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(courseList);
      } catch (error) {
        console.error("কোর্স লোডিং এ সমস্যা:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">লোড হচ্ছে...</p>;
  if (courses.length === 0)
    return <p className="text-center mt-10">কোনো কোর্স পাওয়া যায়নি।</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">আমাদের কোর্সসমূহ</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

// Main page component combining Hero and Course list
export default function CoursePage() {
  return (
    <div>
      <CourseHero />
      <Courses />
    </div>
  );
}
