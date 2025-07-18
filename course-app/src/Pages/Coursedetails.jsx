import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      const docRef = doc(db, "courses", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCourse(docSnap.data());
      } else {
        setCourse(null);
      }
      setLoading(false);
    }
    fetchCourse();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10">লোড হচ্ছে...</p>;

  if (!course)
    return (
      <div className="text-center mt-10">
        <p>কোর্সটি পাওয়া যায়নি।</p>
        <Link to="/" className="text-blue-600 underline mt-4 block">
          কোর্সসমূহে ফিরে যান
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <img
        src={course.thumbnailUrl || "https://via.placeholder.com/800x400"}
        alt={course.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.subtitle}</p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">কোর্সের সময়কাল</h2>
        <p>{course.duration || "নির্ধারিত নয়"}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">মূল্য</h2>
        <p>{course.price ? `${course.price} টাকা` : "বিনামূল্যে"}</p>
      </div>

      {course.features && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">ফিচারসমূহ</h2>
          <ul className="list-disc list-inside">
            {course.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <Link
        to="/courses"
        className="inline-block mt-6 text-blue-600 underline"
      >
        কোর্সসমূহে ফিরে যান
      </Link>
    </div>
  );
                }
