import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome back, {user?.username}!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Enrolled Courses</h3>
            <p className="text-3xl font-bold text-blue-600">{user?.enrolledCourses?.length || 0}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Completed Lessons</h3>
            <p className="text-3xl font-bold text-green-600">{user?.completedLessons?.length || 0}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Learning Progress</h3>
            <p className="text-3xl font-bold text-purple-600">
              {user?.enrolledCourses?.length ? 
                Math.round((user.completedLessons.length / (user.enrolledCourses.length * 5)) * 100) : 0}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Learning Journey</h2>
          <p className="text-gray-600">Dashboard features and progress tracking are coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;