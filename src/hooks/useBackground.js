import { useState, useEffect } from "react";

const useBackground = (images, intervalTime = 5000) => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setBackgroundImage((prev) => (prev + 1) % images.length);
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isLoading, intervalTime, images.length]);

  return { backgroundImage: images[backgroundImage], isLoading };
};

export default useBackground;
