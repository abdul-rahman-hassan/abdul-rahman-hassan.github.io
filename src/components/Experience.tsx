import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';

export function Experience() {
  const experiences = [
    {
      title: "Deep Learning Specialization",
      company: "DeepLearning.AI",
      period: "December 2025",
      description:
        "Completed a comprehensive program covering neural networks, convolutional networks, sequence models, and practical applications of deep learning.",
      demo: "https://www.coursera.org/account/accomplishments/specialization/LX3SW5SASBRV",
      skills: [
        "Neural Networks",
        "Sequence Models",
        "Convolutional Networks",
        "Deep Learning Applications"
      ],
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "AWS Machine Learning Fundamentals – Nanodegree",
      company: "Udacity",
      period: "September 2025",
      description:
        "Built models using AWS SageMaker, applied CNNs, transfer learning, and end-to-end ML workflow solutions on AWS.",
      demo: "https://www.udacity.com/certificate/e/e3adfd62-ee8f-11ed-aba2-a789ce06efde",
      skills: [
        "AWS SageMaker",
        "Convolutional Neural Networks",
        "Transfer Learning",
        "ML Workflows"
      ],
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "SQL Associate Certification",
      company: "DataCamp",
      period: "October 2024",
      description:
        "Gained proficiency in SQL for data manipulation, querying, and database management to support data science projects.",
      demo: "https://www.datacamp.com/certificate/SQA0018135515080",
      skills: ["SQL", "Data Manipulation", "Database Management", "Querying"],
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "AI Programmer with Python – Nanodegree",
      company: "Udacity",
      period: "March 2023",
      description:
        "Learned AI programming fundamentals including search algorithms, logic, planning, and probabilistic models using Python.",
      demo: "https://www.udacity.com/certificate/e/ed701f88-5a06-11ed-817d-c761677d1cda",
      skills: ["Python", "Deep Learning", "Convolutional Neural Networks"],
      gradient: "from-blue-400 to-black-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full"
            >
              {/* Whole card clickable */}
              <a
                href={exp.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full cursor-pointer bg-gray-900/50 border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Gradient hover wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-20`}
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>

                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>

                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>

                    <CardDescription className="text-gray-400">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors">Click to view certificate</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
