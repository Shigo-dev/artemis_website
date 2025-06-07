import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Clock, Train } from 'lucide-react';

const Location: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">活動場所</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div 
            variants={itemVariants} 
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">ダーツスタジアム池袋</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <MapPin className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">住所</p>
                      <p className="text-gray-700">〒170-0013 東京都豊島区東池袋1-14-9 川島ビル5F</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Train className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">アクセス</p>
                      <p className="text-gray-700">池袋駅東口から徒歩5分</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Calendar className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">活動日</p>
                      <p className="text-gray-700">隔週月曜日・木曜日</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">活動時間</p>
                      <p className="text-gray-700">18:00〜21:00</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://goo.gl/maps/JXpujy4uWQZ2"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Googleマップで見る
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2538122/pexels-photo-2538122.jpeg" 
                alt="ダーツスタジアム池袋" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/344034/pexels-photo-344034.jpeg" 
                  alt="活動場所の様子1" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2372976/pexels-photo-2372976.jpeg" 
                  alt="活動場所の様子2" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;