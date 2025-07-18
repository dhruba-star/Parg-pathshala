// src/pages/CourseListing.jsx
import React from "react";
import CourseCard from "../components/CourseCard";

const dummyCourses = [
  {
    title: "৩০ দিনে অ্যালজেব্রা মাস্টারি কোর্স",
    subtitle: "১৫+ ভিডিও, প্র্যাকটিস, সার্টিফিকেট সহ",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    learn: [
      "লিনিয়ার ও কোয়াড্রাটিক সমীকরণ সমাধান",
      "রিয়েল লাইফে অ্যালজেব্রার প্রয়োগ",
      "SSC প্রস্তুতির জন্য কার্যকরী পদ্ধতি",
    ],
    duration: "৩০ দিন",
    price: ৯৯৯,
  },
  {
    title: "রসায়নের বেসিক কোর্স",
    subtitle: "এইচএসসি প্রস্তুতির জন্য ২০ ঘন্টা ক্লাস",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/chemistry.jpg",
    learn: [
      "অ্যাটমিক স্ট্রাকচার থেকে এসিড-বেস",
      "প্রতিটি অধ্যায়ের বিস্তারিত PDF",
      "ইন্টারঅ্যাকটিভ কুইজ এবং সার্টিফিকেট",
    ],
    duration: "৪৫ দিন",
    price: ১১৯৯,
  },
];

const CourseListing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📚 আমাদের কোর্স সমূহ
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
