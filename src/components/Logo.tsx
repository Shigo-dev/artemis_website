import React from 'react';
import { Target } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="h-8 w-8 flex items-center justify-center">
        <Target className="h-8 w-8 text-blue-600" />
        <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-30"></div>
      </div>
    </div>
  );
};

export default Logo;