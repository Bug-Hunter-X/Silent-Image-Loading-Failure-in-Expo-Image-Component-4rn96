import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const handleError = (error) => {
    console.error('Error loading image:', error);
    // Add your error handling logic here, e.g., display a placeholder image
  };

  return (
    <Image
      source={{ uri: 'invalid-image-uri.jpg' }}
      style={{ width: 200, height: 200 }}
      onError={handleError}
    />
  );
};

export default MyComponent;