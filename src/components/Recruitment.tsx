import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, CheckCircle, Target, Clock } from 'lucide-react';

const Recruitment: React.FC = () => {
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

  const benefits = [
    {
      id: 1,
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "初心者歓迎",
      description: "ダーツ経験がなくても大丈夫。基礎からしっかり教えます。"
    },
    {
      id: 2,
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "友達づくり",
      description: "様々な学部・大学の学生と交流できます。"
    },
    {
      id: 3,
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "自由な参加",
      description: "参加は自由。授業や他の予定と両立できます。"
    }
  ];

  const steps = [
    {
      id: 1,
      title: "お問い合わせ",
      description: "お問い合わせフォームやSNSからメッセージをお送りください。"
    },
    {
      id: 2,
      title: "見学・体験",
      description: "活動日に見学に来てください。実際にダーツを体験できます。"
    },
    {
      id: 3,
      title: "入会手続き",
      description: "入会希望の場合、年会費5,000円をお支払いください。"
    },
    {
      id: 4,
      title: "活動スタート",
      description: "入会後すぐに活動に参加できます。初心者向けレッスンもあります。"
    }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">メンバー募集中</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            初心者から上級者まで、ダーツが好きな方、これから始めてみたい方、一緒に活動しませんか？
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="mr-3 h-7 w-7 text-blue-600" />
                入会のメリット
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">募集対象</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>大学生・大学院生（早稲田大学以外の学生も歓迎）</li>
                  <li>ダーツに興味がある方</li>
                  <li>新しい友達を作りたい方</li>
                  <li>大会に出場してみたい方</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="mr-3 h-7 w-7 text-blue-600" />
                入会の流れ
              </h3>
              
              <div className="relative">
                <div className="absolute left-4 top-1 h-full w-0.5 bg-blue-200"></div>
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative pl-12">
                      <div className="absolute left-0 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                  <Users className="mr-2 h-5 w-5" />
                  入会について問い合わせる
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">4月・5月は新入生歓迎中！</h3>
          <p className="text-lg mb-6">
            新入生は入会金無料！この機会にぜひArtemisで大学生活を始めましょう。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition duration-200"
          >
            今すぐ申し込む
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;