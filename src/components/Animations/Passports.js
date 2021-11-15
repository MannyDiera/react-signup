import React from 'react';
import Lottie from 'react-lottie';
import loaderData from '../../lotties/passport-travel.json';

const PassportLoader = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loaderData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={120}
        width={120}
      />
    </div>
  );
}

export default PassportLoader;
