/*import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const CourseCard = ({
  courseId,
  term,
  courseName,
  instructorName,
  courseImage,
}) => {
  return (
    <article className="course-card" id={`course-card-${courseId}`}>
      <img src={courseImage} alt="courseImage" className="course-img" />
      <div className="card-text">
        <h4 className="course-name">{courseName}</h4>
        <p className="instructor-name">{instructorName}</p>
        <Link to={{ pathname: `/courses/${term}/${courseId}` }} className="cta-btn coursecard">
          Visit Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;*/

import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const CourseCard = ({
  courseId,
  term,
  courseName,
  instructorName,
  courseImage,
}) => {
  return (
    <article className="orig-course-card" id={`course-card-${courseId}`}>
      <img src={courseImage} alt={courseName} className="orig-course-img" />
      <div className="orig-card-body">
        <h4 className="orig-course-name">{courseName}</h4>
        <p className="orig-instructor-name">{instructorName}</p>
        <Link
          to={{ pathname: `/courses/${term}/${courseId}` }}
          className="orig-visit-btn"
        >
          Visit Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;