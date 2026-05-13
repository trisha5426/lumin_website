// /*import React, { useEffect, useState } from 'react';
// import CourseCard from '../Components/CourseCard';
// import examImage from '../Assets/exam.jpg';
// import videoi from '../Assets/video.jpg';
// import notes1 from '../Assets/notes1.jpg';
// import cases from '../Assets/case.jpg';
// import notes2 from '../Assets/notes2.jpg';
// import axios from '../axios';

// const Home = () => {
//   // Filter courses based on terms 2, 4, 6
//   const [courses, setCourses] = useState(null);
//   useEffect(() => {
//     const getCoursesData = async () => {
//       const res = await axios.get('/user/courses/all');
//       const courseData = res.data;
//       setCourses(courseData);
//     };
//     getCoursesData();
//   }, []);

//   return (
//     <>
//       <section className="container">
//         <div className="container-content">
//           <div className="right-section">
//             <h2 className="title">
//               Welcome to <span className="comp-name">LUMIN</span>
//             </h2>
//             <p className="container-text">
//               We offer semester exam preparation guides for LL.B. students at
//               Delhi University. We simplify the exam preparation journey by
//               offering interactive video lectures specifically tailored to
//               exams, previous year question papers, concise case summaries, and
//               lecture notes.
//               <br /> <br />
//               We provide top-tier education in an accessible format, ensuring
//               that learning is enriching and enjoyable. Our dedicated
//               instructors are deeply committed to empowering students to thrive
//               academically.
//             </p>
//             {/* <div className="c-button">
//               <a href="#courses">
//                 <button className="course-btn">Our Courses</button>
//               </a>
//             </div> }
//             //i added
//           /*</div>
//           <section className="left-section">
//             <img src={examImage} alt="exam" />
//           </section>
//         </div>
//       </section>

//       <section className="course-desp-box" id="product">
//         <h2 className="course-desp-title">In Our Courses, we will provide</h2>
//         <p className="course-desp-text">
//           We offer exam preparation guides for LLB students at Delhi University
//         </p>
//         <div className="slabs-container">
//           <article className="row-slab" id="row-slab1">
//             <section className="left-sec">
//               <img src={videoi} alt="video-lecture" />
//             </section>
//             <section className="right-sec">
//               <h3 className="slab-title">Video Lectures</h3>
//               <p className="slab-text">
//                 Video lectures designed for LLB semester exams to
//                 help students excel academically.
//               </p>
//             </section>
//           </article>
//           <article className="row-slab" id="row-slab2">
//             <section className="left-sec">
//               <img src={notes1} alt="notes" />
//             </section>
//             <section className="right-sec">
//               <h3 className="slab-title">Topic Notes</h3>
//               <p className="slab-text">
//                 Comprehensive and clear topic notes for effortless learning.
//               </p>
//             </section>
//           </article>
//           <article className="row-slab" id="row-slab3">
//             <section className="left-sec">
//               <img src={cases} alt="case-summary" />
//             </section>
//             <section className="right-sec">
//               <h3 className="slab-title">Case Summaries</h3>
//               <p className="slab-text">
//                 Concise summaries of cases essential for final exams.
//               </p>
//             </section>
//           </article>
//           <article className="row-slab" id="row-slab4">
//             <section className="left-sec">
//               <img src={notes2} alt="sample-paper" />
//             </section>
//             <section className="right-sec">
//               <h3 className="slab-title">Sample Answers</h3>
//               <p className="slab-text">
//                 Sample answers guide for the past five years of question papers.
//               </p>
//             </section>
//           </article>
//         </div>
//       </section>

//       <section className="center-section" id="courses">
//         <div>
//           <h2 className="section-title">Our Courses</h2>
//           {/* <pre>{JSON.stringify(courses, null, 2)}</pre> }
//           //i added
//           /*<div className="course-card-container">
//             <h2 className="term-title text-5xl font-bold p-2">Term-2</h2>
//             <div className="flex justify-around">
//               {courses &&
//                 courses.map(
//                   (course) =>
//                     course.term === '2' && (
//                       <CourseCard
//                         key={course._id}
//                         courseName={course.title}
//                         courseImage={course.img}
//                         courseId={course.courseId}
//                         instructorName={course.instructor.name}
//                         term={course.term}
//                       />
//                     )
//                 )}
//             </div>
//           </div>
//           <div className="course-card-container">
//             <h2 className="term-title text-5xl font-bold p-2">Term-4</h2>
//             <div className="flex justify-around">
//               {courses &&
//                 courses.map(
//                   (course) =>
//                     course.term === '4' && (
//                       <CourseCard
//                         key={course._id}
//                         courseName={course.title}
//                         courseImage={course.img}
//                         courseId={course.courseId}
//                         instructorName={course.instructor.name}
//                         term={course.term}
//                       />
//                     )
//                 )}
//             </div>
//           </div>
//           <div className="course-card-container">
//             <h2 className="term-title text-5xl font-bold p-2">Term-6</h2>
//             <div className="flex justify-around">
//               {courses &&
//                 courses.map(
//                   (course) =>
//                     course.term === '6' && (
//                       <CourseCard
//                         key={course._id}
//                         courseName={course.title}
//                         courseImage={course.img}
//                         courseId={course.courseId}
//                         instructorName={course.instructor.name}
//                         term={course.term}
//                       />
//                     )
//                 )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;*/

// import React, { useEffect, useState } from 'react';
// import CourseCard from '../Components/CourseCard';
// import axios from '../axios';

// const Home = () => {
//   const [courses, setCourses] = useState(null);

//   useEffect(() => {
//   const getCoursesData = async () => {
//     try {
//       const res = await axios.get('/user/courses/all');
//       // The backend sometimes returns { courses: [...] } instead of a plain array
//       const data = Array.isArray(res.data) ? res.data : res.data.courses || [];
//       setCourses(data);
//     } catch (err) {
//       console.error('Failed to fetch courses:', err);
//       setCourses([]); // stops the page from staying blank
//     }
//   };
//   getCoursesData();
// }, []);

//   return (
//     <>
//       {/* ── HERO SECTION ── */}
//       <section className="orig-hero">
//         <h1 className="orig-hero-title">Welcome</h1>
//         <p className="orig-hero-text">
//           We offer semester exam preparation guides for LL.B. students Delhi
//           University. We simplify the exam preparation journey by offering
//           interactive video lectures which are specific to exams and previous
//           year question papers, concise case summaries and lecture notes, and
//           sample answers to previous year exam questions.
//         </p>
//         <p className="orig-hero-text">
//           We provide top-tier education in an accessible format, ensuring that
//           learning is both enriching and enjoyable. Our dedicated instructors
//           are deeply committed to empowering students to thrive academically.
//         </p>
//         <a href="#courses" className="orig-green-btn">Our Courses</a>
//       </section>

//       {/* ── PRODUCT / FEATURES SECTION ── */}
//       <section className="orig-features" id="product">
//         <h2 className="orig-features-title">In Our Courses, we will provide</h2>
//         <p className="orig-features-sub">
//           We offer exam preparation guide for LLB students of Delhi University
//         </p>
//         <div className="orig-features-list">
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Video Lectures</h3>
//             <p className="orig-feature-desc">
//               Easy to learn Video lectures which are designed specifically for
//               LL.B. semester exams to help student excel academically.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Topic Notes</h3>
//             <p className="orig-feature-desc">
//               Comprehensive and clear topic notes for effortless learning.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Case Summaries</h3>
//             <p className="orig-feature-desc">
//               Concise summaries of cases essential for final exams.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Sample Answers</h3>
//             <p className="orig-feature-desc">
//               Sample answers guide for the past five years of question papers.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── COURSES SECTION ── */}
//       <section className="orig-courses-section" id="courses">
//         <h2 className="orig-courses-title">Our Courses</h2>

//         {/* 2nd Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">2nd Term</h3>
//           <div className="orig-cards-row">
//             {courses &&
//               courses
//                 .filter((c) => c.term === '2')
//                 .map((course) => (
//                   <CourseCard
//                     key={course._id}
//                     courseName={course.title}
//                     courseImage={course.img}
//                     courseId={course.courseId}
//                     instructorName={course.instructor.name}
//                     term={course.term}
//                   />
//                 ))}
//           </div>
//         </div>

//         {/* 4th Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">4th Term</h3>
//           <div className="orig-cards-row">
//             {courses &&
//               courses
//                 .filter((c) => c.term === '4')
//                 .map((course) => (
//                   <CourseCard
//                     key={course._id}
//                     courseName={course.title}
//                     courseImage={course.img}
//                     courseId={course.courseId}
//                     instructorName={course.instructor.name}
//                     term={course.term}
//                   />
//                 ))}
//           </div>
//         </div>

//         {/* 6th Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">6th Term</h3>
//           <div className="orig-cards-row">
//             {courses &&
//               courses
//                 .filter((c) => c.term === '6')
//                 .map((course) => (
//                   <CourseCard
//                     key={course._id}
//                     courseName={course.title}
//                     courseImage={course.img}
//                     courseId={course.courseId}
//                     instructorName={course.instructor.name}
//                     term={course.term}
//                   />
//                 ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

//FIXED CODE
// import React, { useEffect, useState } from 'react';
// import CourseCard from '../Components/CourseCard';
// import axios from '../axios';

// const Home = () => {
//   const [courses, setCourses] = useState(null);

//   useEffect(() => {
//     const getCoursesData = async () => {
//       try {
//         const res = await axios.get('/user/courses/all');
//         const data = Array.isArray(res.data) ? res.data : res.data.courses || [];
//         setCourses(data);
//       } catch (err) {
//         console.error('Failed to fetch courses:', err);
//         setCourses([]);
//       }
//     };
//     getCoursesData();
//   }, []);

//   return (
//     <>
//       {/* ── HERO SECTION ── */}
//       <section className="orig-hero">
//         <h1 className="orig-hero-title">Welcome</h1>
//         <p className="orig-hero-text">
//           We offer semester exam preparation guides for LL.B. students Delhi
//           University. We simplify the exam preparation journey by offering
//           interactive video lectures which are specific to exams and previous
//           year question papers, concise case summaries and lecture notes, and
//           sample answers to previous year exam questions.
//         </p>
//         <p className="orig-hero-text">
//           We provide top-tier education in an accessible format, ensuring that
//           learning is both enriching and enjoyable. Our dedicated instructors
//           are deeply committed to empowering students to thrive academically.
//         </p>
//         <a href="#courses" className="orig-green-btn">Our Courses</a>
//       </section>

//       {/* ── PRODUCT / FEATURES SECTION ── */}
//       <section className="orig-features" id="product">
//         <h2 className="orig-features-title">In Our Courses, we will provide</h2>
//         <p className="orig-features-sub">
//           We offer exam preparation guide for LLB students of Delhi University
//         </p>
//         <div className="orig-features-list">
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Video Lectures</h3>
//             <p className="orig-feature-desc">
//               Easy to learn Video lectures which are designed specifically for
//               LL.B. semester exams to help student excel academically.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Topic Notes</h3>
//             <p className="orig-feature-desc">
//               Comprehensive and clear topic notes for effortless learning.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Case Summaries</h3>
//             <p className="orig-feature-desc">
//               Concise summaries of cases essential for final exams.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Sample Answers</h3>
//             <p className="orig-feature-desc">
//               Sample answers guide for the past five years of question papers.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── COURSES SECTION ── */}
//       <section className="orig-courses-section" id="courses">
//         <h2 className="orig-courses-title">Our Courses</h2>

//         {/* 2nd Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">2nd Term</h3>
//           <div className="orig-cards-row">
//             {courses === null && (
//               <p style={{ color: '#888' }}>Loading courses...</p>
//             )}
//             {courses &&
//               courses
//                 .filter((c) => c.term === '2')
//                 .map((course) => (
//                   <CourseCard
//                     key={course._id}
//                     courseName={course.title}
//                     courseImage={course.img}
//                     courseId={course.courseId}
//                     instructorName={course.instructor.name}
//                     term={course.term}
//                   />
//                 ))}
//           </div>
//         </div>

//         {/* 4th Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">4th Term</h3>
//           <div className="orig-cards-row">
//             {courses === null && (
//               <p style={{ color: '#888' }}>Loading courses...</p>
//             )}
//             {courses &&
//               courses
//                 .filter((c) => c.term === '4')
//                 .map((course) => (
//                   <CourseCard
//                     key={course._id}
//                     courseName={course.title}
//                     courseImage={course.img}
//                     courseId={course.courseId}
//                     instructorName={course.instructor.name}
//                     term={course.term}
//                   />
//                 ))}
//           </div>
//         </div>

//         {/* 6th Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">6th Term</h3>
//           <div className="orig-cards-row">
//             {courses === null && (
//               <p style={{ color: '#888' }}>Loading courses...</p>
//             )}
//             {courses &&
//               courses
//                 .filter((c) => c.term === '6')
//                 .map((course) => (
//                   <CourseCard
//                     key={course._id}
//                     courseName={course.title}
//                     courseImage={course.img}
//                     courseId={course.courseId}
//                     instructorName={course.instructor.name}
//                     term={course.term}
//                   />
//                 ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
//-----------------------------------------------------------------------------------------
//FIXED AGAIN//---------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import CourseCard from '../Components/CourseCard';

// const COURSES = [
//   // 2nd Term
//   {
//     _id: '1',
//     term: '2',
//     title: 'Law of Evidence (LB-201)',
//     courseId: 'LB201',
//     img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop',
//     instructor: { name: 'Aakanksha Derashree' },
//   },
//   {
//     _id: '2',
//     term: '2',
//     title: 'Family Law 2',
//     courseId: 'LB202',
//     img: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=400&h=250&fit=crop',
//     instructor: { name: 'Beauty Gupta and Imama' },
//   },
//   {
//     _id: '3',
//     term: '2',
//     title: 'Property Law (LB-204)',
//     courseId: 'LB204',
//     img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop',
//     instructor: { name: 'Stuti Rastogi' },
//   },

//   // 4th Term
//   {
//     _id: '4',
//     term: '4',
//     title: 'Constitutional Law - II (LB-401)',
//     courseId: 'LB401',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Supreme_Court_of_India_-_2014-05-26_05-28.jpg/1200px-Supreme_Court_of_India_-_2014-05-26_05-28.jpg',
//     instructor: { name: 'Avlin Singh' },
//   },

//   // 6th Term
//   {
//     _id: '5',
//     term: '6',
//     title: 'Advocacy Professional Ethics and Accountancy for Lawyers (LB-601)',
//     courseId: 'LB601',
//     img: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=400&h=250&fit=crop',
//     instructor: { name: 'Garima Garg' },
//   },
//   {
//     _id: '6',
//     term: '6',
//     title: 'Alternative Dispute Resolution (LB-602)',
//     courseId: 'LB602',
//     img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop',
//     instructor: { name: 'Sonali Gambhir' },
//   },
//   {
//     _id: '7',
//     term: '6',
//     title: 'Environmental Law (LB-603)',
//     courseId: 'LB603',
//     img: 'https://images.unsplash.com/photo-1497435334941-8c899a9bd267?w=400&h=250&fit=crop',
//     instructor: { name: 'Sameera Fatima' },
//   },
//   {
//     _id: '8',
//     term: '6',
//     title: 'Principles of Taxation Law (LB-604)',
//     courseId: 'LB604',
//     img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
//     instructor: { name: 'Shaweta Gupta' },
//   },
// ];

// const Home = () => {
//   const term2 = COURSES.filter((c) => c.term === '2');
//   const term4 = COURSES.filter((c) => c.term === '4');
//   const term6 = COURSES.filter((c) => c.term === '6');

//   return (
//     <>
//       {/* ── HERO SECTION ── */}
//       <section className="orig-hero">
//         <h1 className="orig-hero-title">Welcome</h1>
//         <p className="orig-hero-text">
//           We offer semester exam preparation guides for LL.B. students Delhi
//           University. We simplify the exam preparation journey by offering
//           interactive video lectures which are specific to exams and previous
//           year question papers, concise case summaries and lecture notes, and
//           sample answers to previous year exam questions.
//         </p>
//         <p className="orig-hero-text">
//           We provide top-tier education in an accessible format, ensuring that
//           learning is both enriching and enjoyable. Our dedicated instructors
//           are deeply committed to empowering students to thrive academically.
//         </p>
//         <a href="#courses" className="orig-green-btn">Our Courses</a>
//       </section>

//       {/* ── PRODUCT / FEATURES SECTION ── */}
//       <section className="orig-features" id="product">
//         <h2 className="orig-features-title">In Our Courses, we will provide</h2>
//         <p className="orig-features-sub">
//           We offer exam preparation guide for LLB students of Delhi University
//         </p>
//         <div className="orig-features-list">
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Video Lectures</h3>
//             <p className="orig-feature-desc">
//               Easy to learn Video lectures which are designed specifically for
//               LL.B. semester exams to help student excel academically.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Topic Notes</h3>
//             <p className="orig-feature-desc">
//               Comprehensive and clear topic notes for effortless learning.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Case Summaries</h3>
//             <p className="orig-feature-desc">
//               Concise summaries of cases essential for final exams.
//             </p>
//           </div>
//           <div className="orig-feature-card">
//             <h3 className="orig-feature-name">Sample Answers</h3>
//             <p className="orig-feature-desc">
//               Sample answers guide for the past five years of question papers.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── COURSES SECTION ── */}
//       <section className="orig-courses-section" id="courses">
//         <h2 className="orig-courses-title">Our Courses</h2>

//         {/* 2nd Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">2nd Term</h3>
//           <div className="orig-cards-row">
//             {term2.map((course) => (
//               <CourseCard
//                 key={course._id}
//                 courseName={course.title}
//                 courseImage={course.img}
//                 courseId={course.courseId}
//                 instructorName={course.instructor.name}
//                 term={course.term}
//               />
//             ))}
//           </div>
//         </div>

//         {/* 4th Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">4th Term</h3>
//           <div className="orig-cards-row">
//             {term4.map((course) => (
//               <CourseCard
//                 key={course._id}
//                 courseName={course.title}
//                 courseImage={course.img}
//                 courseId={course.courseId}
//                 instructorName={course.instructor.name}
//                 term={course.term}
//               />
//             ))}
//           </div>
//         </div>

//         {/* 6th Term */}
//         <div className="orig-term-block">
//           <h3 className="orig-term-heading">6th Term</h3>
//           <div className="orig-cards-row">
//             {term6.map((course) => (
//               <CourseCard
//                 key={course._id}
//                 courseName={course.title}
//                 courseImage={course.img}
//                 courseId={course.courseId}
//                 instructorName={course.instructor.name}
//                 term={course.term}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

//---------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
import React from 'react';
import CourseCard from '../Components/CourseCard';
import { courses } from '../data';

const Home = () => {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="orig-hero">
        <h1 className="orig-hero-title">Welcome</h1>
        <p className="orig-hero-text">
          We offer semester exam preparation guides for LL.B. students Delhi
          University. We simplify the exam preparation journey by offering
          interactive video lectures which are specific to exams and previous
          year question papers, concise case summaries and lecture notes, and
          sample answers to previous year exam questions.
        </p>
        <p className="orig-hero-text">
          We provide top-tier education in an accessible format, ensuring that
          learning is both enriching and enjoyable. Our dedicated instructors
          are deeply committed to empowering students to thrive academically.
        </p>
        <a href="#courses" className="orig-green-btn">Our Courses</a>
      </section>

      {/* ── PRODUCT / FEATURES SECTION ── */}
      <section className="orig-features" id="product">
        <h2 className="orig-features-title">In Our Courses, we will provide</h2>
        <p className="orig-features-sub">
          We offer exam preparation guide for LLB students of Delhi University
        </p>
        <div className="orig-features-list">
          <div className="orig-feature-card">
            <h3 className="orig-feature-name">Video Lectures</h3>
            <p className="orig-feature-desc">
              Easy to learn Video lectures which are designed specifically for
              LL.B. semester exams to help student excel academically.
            </p>
          </div>
          <div className="orig-feature-card">
            <h3 className="orig-feature-name">Topic Notes</h3>
            <p className="orig-feature-desc">
              Comprehensive and clear topic notes for effortless learning.
            </p>
          </div>
          <div className="orig-feature-card">
            <h3 className="orig-feature-name">Case Summaries</h3>
            <p className="orig-feature-desc">
              Concise summaries of cases essential for final exams.
            </p>
          </div>
          <div className="orig-feature-card">
            <h3 className="orig-feature-name">Sample Answers</h3>
            <p className="orig-feature-desc">
              Sample answers guide for the past five years of question papers.
            </p>
          </div>
        </div>
      </section>

      {/* ── COURSES SECTION ── */}
      <section className="orig-courses-section" id="courses">
        <h2 className="orig-courses-title">Our Courses</h2>

        {courses.map((termData) => (
          <div className="orig-term-block" key={termData.id}>
            <h3 className="orig-term-heading">{termData.term} Term</h3>
            <div className="orig-cards-row">
              {termData.courses.map((course) => (
                <CourseCard
                  key={course.id}
                  courseName={course.courseName}
                  courseImage={course.img}
                  courseId={course.id}
                  instructorName={course.instructor}
                  term={termData.id}
                />
              ))}
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default Home;