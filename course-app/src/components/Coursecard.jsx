import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/course/${course.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
        <img
          src={course.thumbnailUrl || "https://via.placeholder.com/400x200"}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-1">{course.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{course.subtitle}</p>
          <p className="text-sm mb-2">
            <strong>কোর্স সময়কাল:</strong> {course.duration || "নির্ধারিত নয়"}
          </p>
          <p className="text-sm mb-2">
            <strong>মূল্য:</strong>{" "}
            {course.price ? `${course.price} টাকা` : "বিনামূল্যে"}
          </p>
        </div>
      </div>
    </Link>
  );
}
