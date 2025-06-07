import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const SnsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="sns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SNS</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            最新の活動情報やイベント告知はSNSで配信しています。フォローして最新情報をチェックしてください。
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <Instagram className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instagram</h3>
            <p className="mb-6">活動写真や日常の様子をお届けします。</p>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-white text-pink-500 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              @artemis_darts
            </a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <Twitter className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Twitter</h3>
            <p className="mb-6">イベント情報や募集のお知らせをツイートしています。</p>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              @artemis_darts
            </a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <Facebook className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Facebook</h3>
            <p className="mb-6">大会結果や詳しい活動レポートを発信しています。</p>
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Artemis Darts
            </a>
          </motion.div>
        </motion.div>
        
        <div className="mt-16">
          <div className="bg-blue-50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">最新の活動をフォローしよう</h3>
                <p className="text-gray-700">
                  SNSでは随時、新入部員募集や活動報告、イベント告知などを発信しています。
                </p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-200"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-200"
                >
                  <Twitter className="h-6 w-6 text-blue-400" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-200"
                >
                  <Facebook className="h-6 w-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnsSection;