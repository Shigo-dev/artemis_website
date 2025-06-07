import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      if (name && email && message) {
        setIsSubmitted(true);
        setHasError(false);
      } else {
        setIsSubmitted(false);
        setHasError(true);
      }
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            入会に関するお問い合わせ、活動についてのご質問など、お気軽にご連絡ください。
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">お問い合わせありがとうございます</h3>
              <p className="text-gray-700 mb-6">メッセージを受け付けました。担当者から48時間以内にご連絡いたします。</p>
              <button
                onClick={() => {
                  setName('');
                  setEmail('');
                  setMessage('');
                  setSubject('general');
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
              >
                新しいお問い合わせ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {hasError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-700">すべての必須項目に入力してください。</p>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="example@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ内容
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="general">一般的なお問い合わせ</option>
                  <option value="join">入会について</option>
                  <option value="schedule">活動日程について</option>
                  <option value="sponsor">スポンサーについて</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="お問い合わせ内容を入力してください"
                  required
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-8 py-3 ${
                    isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white rounded-lg shadow transition duration-200`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      送信する
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;