import React, { useState } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true)
  console.log(isLoading)
  
  return (
    <div className="loading">
      <h1>loading...</h1>
    </div>
  );
};

export default Loading;
