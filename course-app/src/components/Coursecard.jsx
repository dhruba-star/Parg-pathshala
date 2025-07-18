// src/components/CourseCard.jsx
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm mx-auto hover:shadow-lg transition">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="rounded-lg w-full h-48 object-cover mb-3"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-1">{course.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{course.subtitle}</p>
      <ul className="text-sm text-gray-700 list-disc pl-5 mb-2">
        {course.learn.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="text-sm text-gray-600 mb-1">
        <strong>কোর্স সময়কাল:</strong> {course.duration}
      </div>
      <div className="text-sm text-gray-600 mb-2">
        <strong>মূল্য:</strong> {course.price} টাকা
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
        কোর্সে ভর্তি হোন
      </button>
    </div>
  );
};

export default CourseCard;
