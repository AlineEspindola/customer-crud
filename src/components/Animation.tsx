import React from 'react';
import Lottie from 'lottie-react';
import networkingAnimation from '@/styles/animations/Networking.json';

export default function NetworkingLottie() {
  return (
    <div className="p-4 w-84 h-64 mx-auto">
      <Lottie animationData={networkingAnimation} loop={true} />
    </div>
  );
}
