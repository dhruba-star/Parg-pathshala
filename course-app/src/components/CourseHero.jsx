// src/components/CourseHero.jsx
import React from 'react';

const CourseHero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 py-16 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">কোর্স সংগ্রহ</h1>
        <p className="text-lg md:text-xl font-medium">
          এসএসসি, এইচএসসি এবং ভর্তি পরীক্ষার জন্য এক্সপার্ট লেভেল কোর্সসমূহ এখনই শিখুন
        </p>
      </div>
    </section>
  );
};

export default CourseHero;
