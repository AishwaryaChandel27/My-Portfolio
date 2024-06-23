import React from 'react';

interface MagicButtonProps {
  title: string;
  icons: React.ReactNode;
  position?: 'left' | 'right'; 
  handleClick?: () => void;
  otherClasses?: string;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icons,
  position = 'left', 
  handleClick,
  otherClasses
}) => {
  return (
    <button 
      className={`p-[3px] relative ${otherClasses}`} 
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group flex items-center justify-center transition duration-200 text-white hover:bg-transparent">
        {position === 'left' && icons}
        <span className="ml-2">{title}</span>
        {position === 'right' && icons}
      </div>
    </button>
  );
};
