import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, TrendingUp, ExternalLinks, Divide} from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Deep Learning Specialization",
      company: "DeepLearning.AI",
      period: "December 2025",
      description: "Completed a comprehensive program covering neural networks, convolutional networks, sequence models, and practical applications of deep learning.",
      icon: GraduationCap,
      demo: "https://www.coursera.org/account/accomplishments/specialization/LX3SW5SASBRV",
      skills: ["Neural Networks", "Sequence Models", "Convolutional Networks", "Deep Learning Applications"]
    },
    {
      title: "AWS Machine Learning Fundamentals - NanoDegree",
      company: "Udacity",
      period: "September 2025",
      description: "Built models using AWS SageMaker, applied CNNs, transfer learning, and created end-to-end ML workflow solutions on AWS.",
      icon: GraduationCap,
      demo: "https://www.udacity.com/certificate/e/e3adfd62-ee8f-11ed-aba2-a789ce06efde",
      skills: ["AWS SageMaker", "Convolutional Neural Networks", "Transfer Learning", "ML Workflows" ],
    },
    {
      title: "SQL Associate Certification",
      company: "DataCamp",
      period: "October 2024",
      description: "Gained proficiency in SQL for data manipulation, querying, and database management to support data science projects.",
      icon: GraduationCap,
      demo: "https://www.datacamp.com/certificate/SQA0018135515080",
      skills: ["SQL", "Data Manipulation", "Database Management", "Querying"]
    },
    {
      title: "AI programmer with Python - NanoDegree",
      company: "Udacity",
      period: "March 2023",
      description: "Learned AI programming fundamentals including search algorithms, logic, planning, and probabilistic models using Python.",
      icon: GraduationCap,
      demo: "https://www.udacity.com/certificate/e/ed701f88-5a06-11ed-817d-c761677d1cda",
      skills: ["Python", "Deep Learning", "Convolutional Neural Networks"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card */}
              <motion.a
                href={exp.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 block ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <br></br>
                  <div className="mt-4 text-sm text-blue-400 opacity-70">
                    Click to view certificate 
                  </div>
                </div>
              </motion.a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}