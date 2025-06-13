import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Sponsors: React.FC = () => {
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

  // スポンサー情報 - 実際のロゴ画像URLに置き換えてください
  const sponsors = [
    {
      id: 1,
      name: "ダーツショップ Target",
      logoUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop", // 実際のロゴ画像URLに置き換え
      description: "プロ仕様のダーツ用品を提供しています。メンバーは10%割引で購入可能です。",
      url: "#"
    },
    {
      id: 2,
      name: "DartsCafe Bulls",
      logoUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop", // 実際のロゴ画像URLに置き換え
      description: "池袋にあるダーツカフェ。メンバーは入場料が無料になります。",
      url: "#"
    },
    {
      id: 3,
      name: "スポーツメーカー Ace",
      logoUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop", // 実際のロゴ画像URLに置き換え
      description: "サークルユニフォームを提供していただいています。",
      url: "#"
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">スポンサー</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            私たちの活動を支援してくださっている企業・団体様をご紹介します。
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={sponsor.logoUrl} 
                    alt={`${sponsor.name}のロゴ`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
              <p className="text-gray-700 mb-6">{sponsor.description}</p>
              <a 
                href={sponsor.url} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                詳細を見る
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">スポンサー募集</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            私たちの活動を支援していただけるスポンサー様を随時募集しております。ご興味がありましたら、お問い合わせフォームよりご連絡ください。
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            スポンサーについて問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;