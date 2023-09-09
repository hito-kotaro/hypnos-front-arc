import { useState } from "react";

const useImage = () => {
	const [image, setImage]=useState({})
	const [imageUrl, setImageUrl] = useState<string>()

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      console.log(URL.createObjectURL(file));
      setImageUrl(URL.createObjectURL(file));
    }
  };

	return {image, imageUrl, uploadToClient}
};

export default useImage;
