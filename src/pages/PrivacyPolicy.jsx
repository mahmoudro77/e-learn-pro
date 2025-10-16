import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: `We collect information to provide better services to all our users. The types of information we collect include:

• Personal Information: When you create an account, we collect your name, email address, and other contact details.
• Learning Data: We collect information about your course progress, completed lessons, and learning preferences.
• Technical Information: We collect information about your device, IP address, browser type, and usage patterns.
• Payment Information: When you make purchases, we collect payment details through our secure payment processors.`
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: `We use the information we collect for the following purposes:

• To provide and maintain our educational services
• To personalize your learning experience
• To process your payments and prevent fraud
• To communicate with you about course updates, new features, and promotions
• To improve our platform and develop new features
• To ensure the security and safety of our platform
• To comply with legal obligations`
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Information Sharing",
      content: `We do not sell your personal information. We may share your information in the following circumstances:

• With your consent: We will share personal information with third parties when we have your consent to do so.
• For external processing: We provide personal information to trusted partners who process it on our behalf.
• For legal reasons: We will share personal information if we believe it's reasonably necessary to comply with laws or legal processes.
• Business transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred.`
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: `We take the security of your data very seriously and implement appropriate technical and organizational measures to protect it:

• Encryption: We use industry-standard encryption for data in transit and at rest.
• Access Controls: We limit access to your personal information to authorized personnel only.
• Regular Audits: We conduct regular security assessments and penetration testing.
• Incident Response: We have procedures in place to handle potential data breaches.
• Secure Infrastructure: Our platform is hosted on secure, reputable cloud infrastructure.`
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Your Rights",
      content: `You have the following rights regarding your personal data:

• Access: You can request a copy of the personal data we hold about you.
• Correction: You can request correction of inaccurate or incomplete data.
• Deletion: You can request deletion of your personal data in certain circumstances.
• Objection: You can object to certain types of processing.
• Portability: You can request transfer of your data to another service.
• Withdraw Consent: You can withdraw consent where we rely on it for processing.

To exercise these rights, please contact us at privacy@elearnpro.com.`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to track activity on our platform:

• Essential Cookies: Required for the basic functions of the platform.
• Performance Cookies: Help us understand how visitors interact with our platform.
• Functional Cookies: Enable enhanced functionality and personalization.
• Analytics Cookies: Help us improve our services by collecting usage data.

You can control cookies through your browser settings. However, disabling cookies may affect platform functionality.`
    },
    {
      title: "Data Retention",
      content: `We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it:

• Account Data: Retained while your account is active and for 2 years after deletion for legal compliance.
• Learning Progress: Retained to provide continuity in your learning experience.
• Payment Records: Retained for 7 years for tax and accounting purposes.
• Analytics Data: Aggregated and anonymized after 3 years.

After retention periods expire, we securely delete or anonymize your data.`
    },
    {
      title: "International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your own:

• We use cloud service providers with global operations.
• We ensure appropriate safeguards are in place for international transfers.
• We comply with applicable data protection laws for cross-border data transfers.
• Our primary data processing occurs in the United States and European Union.`
    },
    {
      title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 16:

• We do not knowingly collect personal information from children under 16.
• If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.
• Parents or guardians can contact us to request deletion of their child's information.
• Some courses may have specific age requirements as indicated in their descriptions.`
    },
    {
      title: "Changes to This Policy",
      content: `We may update this privacy policy from time to time:

• We will notify you of any material changes by email or through platform notifications.
• The "Last Updated" date at the top of this policy will be revised.
• Continued use of our services after changes constitutes acceptance of the updated policy.
• We encourage you to review this policy periodically for any changes.`
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Your privacy is important to us. Learn how we protect and manage your data.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-blue-100"
          >
            Last Updated: {lastUpdated}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                At E-Learn Pro, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our platform.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. By accessing or using our services, 
                you acknowledge that you have read, understood, and agree to be bound by all the terms 
                outlined in this policy.
              </p>
              <p>
                If you do not agree with our policies and practices, please do not use our services. 
                We may update this policy from time to time, and we will notify you of any material changes.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  {section.icon && (
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                      {section.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <div className="prose prose-gray text-gray-600 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-blue-50 rounded-xl p-8 mt-12 border border-blue-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy 
              or our data practices, please contact our Privacy Team:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@elearnpro.com</p>
              <p><strong>Address:</strong> 123 Education Street, Tech City, TC 12345</p>
              <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-100 rounded-xl p-8 mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Manage Your Privacy</h3>
            <p className="text-gray-600 mb-6">
              You can manage your privacy settings and data preferences in your account dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Access Your Data
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">
                Update Preferences
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200">
                Download Data
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Commitment Summary</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparency",
                  description: "We're open about what data we collect and why"
                },
                {
                  title: "Security",
                  description: "Your data is protected with industry-standard measures"
                },
                {
                  title: "Control",
                  description: "You have rights over your personal information"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;