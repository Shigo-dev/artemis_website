import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                <span className="block mb-2">早大インカレ</span>
                <span className="block text-blue-600">ダーツサークル</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl mt-2 text-blue-600">Artemis</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mt-6 mb-8 max-w-2xl">
                初心者から上級者まで、みんなで楽しくダーツを楽しめる早稲田大学のインカレサークルです。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#join"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="mr-2 h-5 w-5" />
                  メンバー募集中
                </motion.a>
                
                <motion.a
                  href="#schedule"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  隔週月・木曜日活動
                </motion.a>
                
                <motion.a
                  href="#location"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  ダーツスタジアム池袋で活動
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 md:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/344034/pexels-photo-344034.jpeg" 
                  alt="ダーツ活動の様子" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    新入生歓迎中！
                  </span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/8412414/pexels-photo-8412414.jpeg" 
                  alt="ダーツイベントの様子" 
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#EBF5FF" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;