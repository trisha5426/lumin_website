// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { IoMdTime, IoIosGlobe, IoMdAlarm } from "react-icons/io";
// import { FaRupeeSign } from "react-icons/fa";
// import { MdOndemandVideo, MdNotes, MdCases, MdCheckCircleOutline } from "react-icons/md";
// import "../index.css";

// // import Accordion from "../Components/Accordion"; // Adjust this import according to your file structure

// const CoursePage = () => {
//   const { term, courseId } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     // Fetch course information based on courseId and term from your API
//     fetch(`https://lumin-backend-v1.onrender.com/api/user/courses/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         const course = data.find((course) => course.courseId === courseId && course.term === term);
//         setCourse(course);
//       })
//       .catch((error) => {
//         console.error("Error fetching course data:", error);
//       });
//   }, [courseId, term]);

//   if (!course) {
//     return <p>Loading...</p>; // Add a loading state while fetching data
//   }

//   const instructor = course?.instructorName;

//   return (
//     <section className="course-page center-section">
//       <div className="col-left course-page-col">
//         <div className="course-intro">
//           <div className="course-page-nav">
//             <Link to="/#courses" className="course-page-nav-link">
//               Courses
//             </Link>
//             <span className="link-separator">{' > '}</span>
//             <Link to={`/#term-${term}`} className="course-page-nav-link">
//               Term {term}
//             </Link>
//             <span className="link-separator">{' > '}</span>
//             <Link to={`/courses/${term}/${courseId}`} className="course-page-nav-link">
//               {course?.title}
//             </Link>
//           </div>
//           <h1 className="course-page-course-title">{course.title}</h1>
//           <p className="course-desc">
//             Welcome to this course
//           </p>
//           <p className="instructor">
//             Created By <span className="course-page-instructor-name">{course.instructor?.name}</span>
//           </p>
//           <div className="intro-bottom">
//             <p className="text-with-icon">
//               <IoMdTime /> Last Updated 15th June 2024
//             </p>
//             <p className="text-with-icon">
//               <IoIosGlobe /> English with conversational Hindi
//             </p>
//           </div>
//           <div className="course-page-sub-container">
//             <h3 className="bio">About the author</h3>
//             <p className="about-author-text">{course.instructor?.bio}</p>
//           </div>
//         </div>
//         <div className="course-structure-container">
//           <div className="course-page-sub-container">
//             <h3 className="bio">This course includes:</h3>
//             <div className="inclusions-container">
//               <div className="text-with-icon">
//                 <MdOndemandVideo /> 11 hours of video lectures
//               </div>
//               <div className="text-with-icon">
//                 <MdNotes /> Lecture Notes
//               </div>
//               <div className="text-with-icon">
//                 <MdCases /> Case Summaries
//               </div>
//               <div className="text-with-icon">
//                 <MdCheckCircleOutline /> Solved PYQs
//               </div>
//             </div>
//           </div>
//           <div className="course-page-sub-container course-contents">
//             <h3 className="bio">Course Contents</h3>
//             <div className="course-contents-container">
//               <p>{course?.contents}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-right course-page-col">
//         <div className="video-card">
//           <div className="video-container">
//             <iframe
//               src={course.videos}
//               title="course video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <div>
//             <div className="course-page-price-container">
//               <span className="new-price">
//                 <FaRupeeSign /> 299
//               </span>
//               <span className="old-price">
//                 <FaRupeeSign /> 499
//               </span>
//               <span className="discount">40% off</span>
//             </div>
//             <div className="exclusive-msg">
//               <IoMdAlarm /> Exclusive for first 300 students!
//             </div>
//           </div>
//           {/* <div className="cta-btn" >Buy Now</div> */}
//           <Link
//   to={`/payment?courseId=${courseId}&title=${encodeURIComponent(course?.title)}`}
//   className="cta-btn"
// >
//   Buy Now
// </Link>

//           <div className="card-footer">
//             <p className="accessible">Accessible till 31st July, 2024</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursePage;
//UPDATED CODE

//---------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { FaRupeeSign } from "react-icons/fa";
// import { IoMdTime } from "react-icons/io";

// import { courses } from "../data";
// import "../index.css";

// const CoursePage = () => {

//   const { courseId } = useParams();

//   // Flatten all courses
//   const allCourses = courses.flatMap((term) => term.courses);

//   // Find matching course
//   const course = allCourses.find(
//     (c) => c.id.toLowerCase() === courseId.toLowerCase()
//   );

//   // If course not found
//   if (!course) {
//     return (
//       <div className="course-not-found">
//         <h1>Course Not Found</h1>

//         <Link to="/" className="cta-btn">
//           Back To Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="course-page">

//       {/* LEFT SIDE */}
//       <div className="course-left">

//         <h1 className="course-title">
//           {course.courseName}
//         </h1>

//         <p className="course-description">
//           Complete preparation course for {course.courseName}
//         </p>

//         <div className="course-meta">

//           <div className="meta-item">
//             <IoMdTime />
//             <span>Updated June 2024</span>
//           </div>

//         </div>

//         <div className="author-box">

//           <h3>Instructor</h3>

//           <p>{course.instructor}</p>

//         </div>

//         {/* COURSE CONTENTS */}

//         <div className="course-content-box">

//           <h2>Course Contents</h2>

//           {
//             course.contents.map((topic, index) => (

//               <div
//                 className="topic-box"
//                 key={index}
//               >

//                 <h3>{topic.topicName}</h3>

//                 {
//                   topic.subTopics.map((sub, subIndex) => (

//                     <div
//                       className="subtopic"
//                       key={subIndex}
//                     >

//                       <p>{sub.name}</p>

//                     </div>

//                   ))
//                 }

//               </div>

//             ))
//           }

//         </div>

//       </div>

//       {/* RIGHT SIDE */}

//       <div className="course-right">

//         <div className="price-card">

//           <img
//             src={course.img}
//             alt={course.courseName}
//             className="course-image"
//           />

//           <div className="price">

//             <FaRupeeSign />

//             {course.price}

//           </div>

//           <button className="buy-btn">
//             Buy Now
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default CoursePage;

//-------------------------------------------------------------------------------------------------------------------------
//updated again

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { courses } from "../data";
// import "../index.css";

// const CoursePage = () => {
//   const { term, courseId } = useParams();

//   // Flatten nested courses array
//   const allCourses = courses.flatMap((termData) =>
//     termData.courses.map((course) => ({
//       ...course,
//       term: termData.id,
//     }))
//   );

//   // Find matching course
//   // const course = allCourses.find(
//   //   (c) =>
//   //     c.id.toLowerCase() === courseId.toLowerCase().replace("-", "") &&
//   //     c.term === term
//   // );
//   const course = allCourses.find(
//   (c) =>
//     c.id.toLowerCase() === courseId.toLowerCase() &&
//     c.term === term
// );

//   // If no course found
//   if (!course) {
//     return (
//       <div
//         style={{
//           minHeight: "70vh",
//           padding: "120px 40px",
//           textAlign: "center",
//         }}
//       >
//         <h1>Course Not Found</h1>

//         <Link to="/" className="orig-green-btn">
//           Back Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="course-page-container">
//       {/* HERO */}
//       <section className="course-hero">
//         <div className="course-hero-content">
//           <h1>{course.courseName}</h1>

//           <p className="course-instructor">
//             Instructor: {course.instructor}
//           </p>

//           <p className="course-price">₹{course.price}</p>

//           <button className="orig-green-btn">
//             Buy Course
//           </button>
//         </div>
//       </section>

//       {/* COURSE CONTENT */}
//       <section className="course-content-wrapper">
//         <h2>Course Content</h2>

//         {course.contents?.map((topic, index) => (
//           <div className="course-topic-card" key={index}>
//             <h3>{topic.topicName}</h3>

//             {topic.subTopics?.map((sub, i) => (
//               <div className="subtopic-card" key={i}>
//                 <p>{sub.name}</p>

//                 <small>
//                   Last Updated: {sub.lastUpdated}
//                 </small>
//               </div>
//             ))}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default CoursePage;

//----------------------------------------------------------------------

//updated again

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { courses } from "../data";
// import "../index.css";

// const CoursePage = () => {
//   // URL params
//   const { term, courseId } = useParams();

//   console.log("TERM:", term);
//   console.log("COURSE ID:", courseId);

//   // Flatten all courses
//   const allCourses = courses.flatMap((termData) =>
//     termData.courses.map((course) => ({
//       ...course,
//       term: termData.id,
//     }))
//   );

//   console.log("ALL COURSES:", allCourses);

//   // Find matching course
//   const course = allCourses.find(
//     (c) =>
//       c.id.toLowerCase() === courseId.toLowerCase() &&
//       c.term === term
//   );

//   console.log("FOUND COURSE:", course);

//   // If course not found
//   if (!course) {
//     return (
//       <div
//         style={{
//           minHeight: "70vh",
//           padding: "120px 40px",
//           textAlign: "center",
//         }}
//       >
//         <h1>Course Not Found</h1>

//         <p style={{ marginBottom: "20px" }}>
//           No course matches this URL.
//         </p>

//         <Link to="/" className="orig-green-btn">
//           Back Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="course-page-container">

//       {/* HERO SECTION */}
//       <section className="course-hero">
//         <div className="course-hero-content">

//           <h1>{course.courseName}</h1>

//           <p className="course-instructor">
//             Instructor: {course.instructor}
//           </p>

//           <p className="course-price">
//             ₹{course.price}
//           </p>

//           <button className="orig-green-btn">
//             Buy Course
//           </button>

//         </div>
//       </section>

//       {/* COURSE CONTENT */}
//       <section className="course-content-wrapper">

//         <h2>Course Content</h2>

//         {course.contents?.map((topic, index) => (
//           <div className="course-topic-card" key={index}>

//             <h3>{topic.topicName}</h3>

//             {topic.subTopics?.map((sub, i) => (
//               <div className="subtopic-card" key={i}>

//                 <p>{sub.name}</p>

//                 <small>
//                   Last Updated: {sub.lastUpdated}
//                 </small>

//               </div>
//             ))}

//           </div>
//         ))}

//       </section>

//     </div>
//   );
// };

// export default CoursePage;

//-----------------------------------------------------------------------------------------
import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data";
import "../index.css";

const CoursePage = () => {
  const { term, courseId } = useParams();

  // Flatten all courses
  const allCourses = courses.flatMap((termData) =>
    termData.courses.map((course) => ({
      ...course,
      term: termData.id,
    }))
  );

  // Find selected course
  const course = allCourses.find(
    (c) =>
      c.id.toLowerCase() === courseId.toLowerCase() &&
      c.term === term
  );

  // If course not found
  if (!course) {
    return (
      <div className="not-found-page">
        <h1>Course Not Found</h1>

        <Link to="/" className="orig-green-btn">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="course-page">

      {/* TOP SECTION */}
      <section className="course-top-section">

        {/* LEFT SIDE */}
        <div className="course-left">

          <div className="breadcrumb">
            Courses &gt; Term {term} &gt; {course.courseName}
          </div>

          <h1 className="course-title">
            {course.courseName}
          </h1>

          <p className="course-created">
            Created By <span>{course.instructor}</span>
          </p>

          <div className="course-meta">
            <p>Last Updated 6th July 2024</p>
            <p>English with conversational Hindi</p>
          </div>

          <h2 className="about-author-title">
            About the author
          </h2>

          <p className="author-description">
            We provide top quality semester preparation content
            specially designed for law students. This course
            contains concise notes, case summaries, video lectures,
            and solved PYQs.
          </p>

          {/* FEATURES */}
          <div className="course-features">

            <div className="feature-box">
              <h3>Video Lectures</h3>
              <p>Easy to learn video lectures.</p>
            </div>

            <div className="feature-box">
              <h3>Lecture Notes</h3>
              <p>Comprehensive notes for learning.</p>
            </div>

            <div className="feature-box">
              <h3>Case Summaries</h3>
              <p>Concise summaries for exams.</p>
            </div>

            <div className="feature-box">
              <h3>Solved PYQs</h3>
              <p>Previous year solved questions.</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="course-right">

          <div className="price-card">

            <img
              src={course.image}
              alt={course.courseName}
              className="price-card-img"
            />

            <h2 className="course-price">
              ₹{course.price}
            </h2>

            <button className="buy-btn">
              Buy Now
            </button>

            <p className="access-text">
              Accessible till 31st August, 2024
            </p>

          </div>

        </div>

      </section>

      {/* COURSE CONTENT */}
      <section className="course-content-section">

        <h2 className="content-heading">
          Course Contents
        </h2>

        {course.contents?.map((topic, index) => (
          <div className="topic-card" key={index}>

            <h3 className="topic-title">
              {topic.topicName}
            </h3>

            {topic.subTopics?.map((sub, i) => (
              <div className="subtopic-row" key={i}>
                {sub.name}
              </div>
            ))}

          </div>
        ))}

      </section>

    </div>
  );
};

export default CoursePage;