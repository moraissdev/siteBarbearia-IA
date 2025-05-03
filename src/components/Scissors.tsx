
import React from 'react';

interface ScissorsProps {
  className?: string;
  size?: number;
}

const Scissors: React.FC<ScissorsProps> = ({ className = '', size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
      <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
      <path d="M20 4 8.12 15.88"></path>
      <path d="M14.47 14.48 20 20"></path>
      <path d="M8.12 8.12 12 12"></path>
    </svg>
  );
};

export default Scissors;
