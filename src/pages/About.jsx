import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Mahmoud Roqmane",
      role: "Programer",
      image: "../../public/mahmoud.jpg",
      bio: "Frontend Developer (ReactJs) , Third Year ITE in Homs University."
    },
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google engineer with 10+ years of experience in education technology."
    },
    {
      name: "Mike Johnson",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer and educator with 8+ years of teaching experience."
    },
    {
      name: "Sarah Wilson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Product specialist focused on creating exceptional learning experiences."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "500+", label: "Courses Available" },
    { number: "100+", label: "Expert Instructors" },
    { number: "95%", label: "Completion Rate" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description: "We maintain the highest standards in course content and instruction quality."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Constantly evolving our platform with the latest technologies and teaching methods."
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Making quality education accessible to everyone, everywhere."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive learning community where students help each other grow."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About E-Learn Pro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Empowering millions of learners worldwide to achieve their goals through quality education
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At E-Learn Pro, we believe that education should be accessible, engaging, and 
                transformative. Our mission is to democratize learning by providing high-quality 
                courses taught by industry experts to anyone, anywhere.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to breaking down barriers to education and empowering individuals 
                to acquire the skills they need to succeed in today's rapidly evolving world.
              </p>
              <Link
                to="/courses"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 inline-block"
              >
                Explore Courses
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold text-gray-800 mb-2">Expert-Led</h3>
                <p className="text-gray-600 text-sm">Courses by industry professionals</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Flexible</h3>
                <p className="text-gray-600 text-sm">Learn at your own pace</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-semibold text-gray-800 mb-2">Career-Focused</h3>
                <p className="text-gray-600 text-sm">Skills that employers want</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold text-gray-800 mb-2">Global</h3>
                <p className="text-gray-600 text-sm">Accessible worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers through our platform
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at E-Learn Pro
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate educators and technologists dedicated to your success
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            Join thousands of students who have transformed their careers with E-Learn Pro
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Browse Courses
            </Link>
            <Link
              to="/register"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
            >
              Sign Up Free
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;