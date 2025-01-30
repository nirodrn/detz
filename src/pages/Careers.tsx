import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Software Engineer Intern (Remote)",
      department: "Software",
      location: "Remote",
      type: "Internship",
      salary: "Project-based",
      description: "Join our team as a Software Engineer Intern and gain hands-on experience in building modern web applications using cutting-edge technologies.",
      requirements: ["React", "TypeScript", "Firebase", "Node.js", "ASP.NET"],
    },
    {
      id: 2,
      title: "Software Engineer Intern (Remote)",
      department: "Software",
      location: "Remote",
      type: "Internship",
      salary: "Project-based",
      description: "We are seeking an enthusiastic Software Engineer Intern to work on innovative projects involving .NET technologies, Firebase, and C# Machine Learning.",
      requirements: [".NET Framework", "C#", "Firebase", "ASP.NET", "C# ML"],
    },
    {
      id: 3,
      title: "Freelance Software Engineer (Web) - Onsite",
      department: "Software",
      location: "Colombo, Sri Lanka",
      type: "Freelance",
      salary: "Project-based",
      description: "We are looking for a talented freelance Software Engineer specializing in web development to join our team on an onsite basis.",
      requirements: ["Expertise in web development", "Proficiency in frontend and backend technologies"],
    },
    {
      id: 4,
      title: "Electrical Technician",
      department: "Electrical",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "Project-based",
      description: "We're seeking skilled Electrical Technicians to join our team and provide top-quality electrical services to our clients.",
      requirements: [
        "Relevant experience in the field",
        "Strong communication skills",
        "Ability to work in a team",
        "Problem-solving capabilities",
      ],
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleEmailChoice = (choice) => {
    const email = "careers@detzglobal.com";
    const subject = encodeURIComponent(`Application for ${selectedJob.title}`);
    const body = encodeURIComponent("Dear Hiring Team, I am interested in applying for this role.");

    switch (choice) {
      case "gmail":
        window.open(`https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`, "_blank");
        break;
      case "outlook":
        window.open(`https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${subject}`, "_blank");
        break;
      case "default":
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        break;
      default:
        break;
    }
    setShowModal(false);
  };

  return (
    <div>
      <PageHeader
        title="Join Our Team"
        description="Build your career with DETZ Global"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.department}</p>
                  </div>

                  {/* Apply Now Button with "Opening Soon" for Internships */}
                  <button
                    onClick={() => handleApplyClick(job)}
                    disabled={job.type === "Internship"}  // Disable the button for internships
                    className={`mt-4 md:mt-0 ${job.type === "Internship" ? "bg-blue-600 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"} px-6 py-2 rounded-md transition-colors`}
                  >
                    {job.type === "Internship" ? "Opening Soon" : "Apply Now"}
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={20} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={20} />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <DollarSign size={20} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{job.description}</p>

                <div className="mt-6 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Requirements:</h4>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Choose an Email Client</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleEmailChoice("gmail")}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Gmail
              </button>
              <button
                onClick={() => handleEmailChoice("outlook")}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Outlook
              </button>
              <button
                onClick={() => handleEmailChoice("default")}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Default Mail App
              </button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full text-gray-600 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
