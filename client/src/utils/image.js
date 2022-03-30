import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/9.png";
import image10 from "../assets/images/10.png";
import image11 from "../assets/images/11.png";

export const images = {
    "1.png": image1,
    "2.png": image2,
    "3.png": image3,
    "4.png": image4,
    "5.png": image5,
    "6.png": image6,
    "7.png": image7,
    "8.png": image8,
    "9.png": image9,
    "10.png": image10,
    "11.png": image11,
}
export const getImageByName = (name)=>{
    return images[name]
}


