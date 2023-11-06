import { useState } from "react";

const useImage = () => {
  const [image, setImage] = useState({});
  const [imageUrl, setImageUrl] = useState<string>("");

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImage({});
    setImageUrl("");
  };

  return { image, imageUrl, uploadToClient, clearImage };
};

export default useImage;
