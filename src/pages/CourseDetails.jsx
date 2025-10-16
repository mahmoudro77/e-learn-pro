import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from '../api/api';
import { useAuth } from '../context/AuthContext';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await API.get(`/courses/${id}`);
        setCourse(response.data);
        
        // Check if user is enrolled
        if (user && user.enrolledCourses?.includes(parseInt(id))) {
          setEnrolled(true);
          setCompletedLessons(user.completedLessons || []);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
        navigate('/courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, user, navigate]);

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      // Update user's enrolled courses
      const updatedUser = {
        ...user,
        enrolledCourses: [...(user.enrolledCourses || []), parseInt(id)]
      };
      
      await API.patch(`/users/${user.id}`, {
        enrolledCourses: updatedUser.enrolledCourses
      });

      setEnrolled(true);
      // In a real app, you'd update the context/auth state
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };

  const handleLessonComplete = async (lessonId) => {
    if (!enrolled) return;

    try {
      const updatedCompleted = [...completedLessons];
      if (updatedCompleted.includes(lessonId)) {
        // Remove if already completed (toggle)
        const index = updatedCompleted.indexOf(lessonId);
        updatedCompleted.splice(index, 1);
      } else {
        // Add to completed
        updatedCompleted.push(lessonId);
      }

      setCompletedLessons(updatedCompleted);

      // Update user data
      await API.patch(`/users/${user.id}`, {
        completedLessons: updatedCompleted
      });
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const calculateProgress = () => {
    if (!course || !course.lessons) return 0;
    return Math.round((completedLessons.length / course.lessons.length) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h2>
          <Link to="/courses" className="text-blue-600 hover:text-blue-700">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <section className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course Image and Basic Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Link to="/courses" className="hover:text-blue-600">Courses</Link>
                <span>›</span>
                <span>{course.category}</span>
                <span>›</span>
                <span className="text-gray-800">{course.title}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-500">({course.students} students)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>⏱️</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📚</span>
                  <span>{course.lessons?.length || 0} lessons</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.difficulty}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-gray-700">
                    {course.instructor?.charAt(0) || 'I'}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{course.instructor}</p>
                  <p className="text-gray-600">Instructor</p>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 h-fit">
              <div className="mb-4">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-3xl font-bold text-gray-800 mb-2">${course.price}</div>
                <div className="text-green-600 font-semibold">Lifetime access</div>
              </div>

              {enrolled ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-800">Progress</span>
                      <span className="text-sm font-bold text-blue-800">{calculateProgress()}%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${calculateProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveLesson(0)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                  >
                    Continue Learning
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 mb-4"
                >
                  Enroll Now
                </button>
              )}

              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                  <span>💻 Online course</span>
                </div>
                <div className="flex justify-between">
                  <span>🕒 {course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>📖 {course.lessons?.length || 0} lessons</span>
                </div>
                <div className="flex justify-between">
                  <span>📱 Access on mobile and TV</span>
                </div>
                <div className="flex justify-between">
                  <span>🏆 Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Course Content</h3>
              
              {enrolled && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">{calculateProgress()}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress()}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {course.lessons?.map((lesson, index) => (
                  <motion.button
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition duration-200 ${
                      activeLesson === index 
                        ? 'bg-blue-100 border border-blue-200' 
                        : 'hover:bg-gray-50 border border-transparent'
                    } ${
                      completedLessons.includes(lesson.id) ? 'border-green-200 bg-green-50' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          completedLessons.includes(lesson.id)
                            ? 'bg-green-500 text-white'
                            : activeLesson === index
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {completedLessons.includes(lesson.id) ? '✓' : index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{lesson.title}</p>
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                      </div>
                      {enrolled && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLessonComplete(lesson.id);
                          }}
                          className={`p-1 rounded ${
                            completedLessons.includes(lesson.id)
                              ? 'text-green-600 hover:text-green-700'
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          {completedLessons.includes(lesson.id) ? '✅' : '⭕'}
                        </button>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-3">
            {course.lessons && course.lessons[activeLesson] ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Video Player */}
                <div className="aspect-video bg-black">
                  <iframe
                    src={course.lessons[activeLesson].videoUrl}
                    title={course.lessons[activeLesson].title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Lesson Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {course.lessons[activeLesson].title}
                      </h2>
                      <p className="text-gray-600">
                        Lesson {activeLesson + 1} of {course.lessons.length}
                      </p>
                    </div>
                    {enrolled && (
                      <button
                        onClick={() => handleLessonComplete(course.lessons[activeLesson].id)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          completedLessons.includes(course.lessons[activeLesson].id)
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}
                      >
                        {completedLessons.includes(course.lessons[activeLesson].id)
                          ? 'Completed ✓'
                          : 'Mark as Complete'}
                      </button>
                    )}
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {course.lessons[activeLesson].description}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setActiveLesson(prev => Math.max(0, prev - 1))}
                      disabled={activeLesson === 0}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveLesson(prev => Math.min(course.lessons.length - 1, prev + 1))}
                      disabled={activeLesson === course.lessons.length - 1}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Lesson
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Welcome to the Course!</h3>
                <p className="text-gray-600 mb-6">
                  {enrolled 
                    ? "Select a lesson from the sidebar to start learning."
                    : "Enroll in this course to access all lessons and start your learning journey."
                  }
                </p>
                {!enrolled && (
                  <button
                    onClick={handleEnroll}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                  >
                    Enroll to Get Started
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;