import React from 'react';
import { Instagram, Twitter, Mail, MapPin, Calendar } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Logo />
              <span className="ml-3 text-xl font-bold">Artemis</span>
            </div>
            <p className="mt-4 text-gray-300">
              早稲田大学インカレダーツサークルArtemisは、初心者から上級者まで、みんなで楽しくダーツを楽しめるサークルです。
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-white transition-colors duration-200">
                  活動内容
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors duration-200">
                  活動場所
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-300 hover:text-white transition-colors duration-200">
                  スポンサー
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">連絡先</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span className="text-gray-300">artemis.darts@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span className="text-gray-300">ダーツスタジアム池袋<br/>東京都豊島区東池袋1-14-9</span>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span className="text-gray-300">隔週月曜日・木曜日<br/>18:00〜21:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} 早稲田大学インカレダーツサークルArtemis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;