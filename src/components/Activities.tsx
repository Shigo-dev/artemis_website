import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Target, Trophy, Users } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: '定期練習',
    description: '隔週月曜日と木曜日にダーツスタジアム池袋で練習を行っています。初心者には基本的な投げ方から丁寧に指導します。',
    image: 'https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg',
    icon: <Calendar className="h-6 w-6 text-blue-600" />
  },
  {
    id: 2,
    title: 'ダーツ大会',
    description: '月に一度、サークル内ダーツ大会を開催しています。様々な形式の大会で楽しく競い合いましょう。',
    image: 'https://images.pexels.com/photos/4691565/pexels-photo-4691565.jpeg',
    icon: <Trophy className="h-6 w-6 text-blue-600" />
  },
  {
    id: 3,
    title: '対外試合',
    description: '他大学のダーツサークルとの交流戦を定期的に実施しています。実践経験を積む絶好の機会です。',
    image: 'https://images.pexels.com/photos/4570738/pexels-photo-4570738.jpeg',
    icon: <Users className="h-6 w-6 text-blue-600" />
  },
  {
    id: 4,
    title: 'ダーツ講習会',
    description: '上級者によるテクニック講習会を開催。フォームの改善や狙い方のコツなど、スキルアップに役立つ内容です。',
    image: 'https://images.pexels.com/photos/5912176/pexels-photo-5912176.jpeg',
    icon: <Target className="h-6 w-6 text-blue-600" />
  }
];

const Activities: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="activities" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">活動内容</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                </div>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">年間スケジュール</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3 whitespace-nowrap">4月</span>
                <span className="text-gray-700">新歓活動・新入生歓迎会</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3 whitespace-nowrap">6月</span>
                <span className="text-gray-700">春学期大会</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3 whitespace-nowrap">8月</span>
                <span className="text-gray-700">夏合宿</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3 whitespace-nowrap">10月</span>
                <span className="text-gray-700">大学祭出店</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3 whitespace-nowrap">12月</span>
                <span className="text-gray-700">冬学期大会・忘年会</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3 whitespace-nowrap">2月</span>
                <span className="text-gray-700">追いコン・卒業イベント</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;