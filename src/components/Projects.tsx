import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Classification of Autism Spectrum Disorder',
      description:
        'Developed a deep learning model to classify autism spectrum disorder eye-tracking data with high accuracy.',
      icon: ExternalLink,
      tech: ['CNNs', 'TensorFlow', 'Keras'],
      gradient: 'from-pink-400 to-purple-500',
      github:
        'https://github.com/abdul-rahman-hassan/Classification-of-Autism-Spectrum-Disorder'
    },
    {
      title: 'Landmark Classification',
      description:
        'A convolutional neural network model to classify landmarks from images.',
      icon: ExternalLink,
      tech: ['PyTorch', 'Python', 'CNNs'],
      gradient: 'from-blue-400 to-purple-500',
      github:
        'https://github.com/abdul-rahman-hassan/Landmark-Classification-Project'
    },
    {
      title: 'MNIST with PyTorch',
      description:
        'Implemented a neural network using PyTorch to classify handwritten digits from the MNIST dataset.',
      icon: ExternalLink,
      tech: ['Neural Networks', 'PyTorch', 'Python'],
      gradient: 'from-green-400 to-blue-500',
      github:
        'https://github.com/abdul-rahman-hassan/MNIST-with-Pytorch'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full"
            >
              {/* Whole card clickable */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full cursor-pointer bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden">
                  
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* GitHub button (isolated click) */}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-blue-400 z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </Button>
                    </div>

                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
