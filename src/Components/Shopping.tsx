import '../Styles/Shopping.css';
import { ShoppingCard } from './ShoppingCard.tsx';
import card1Image1 from '../Images/card1/image1.jpg';
import card1Image2 from "../Images/card1/image2.jpg";
import card1Image3 from "../Images/card1/image3.jpg";
import card1Image4 from "../Images/card1/image4.jpg";
import card2Image1 from '../Images/card2/image1.jpg';
import card2Image2 from '../Images/card2/image2.jpg';
import card2Image3 from '../Images/card2/image3.jpg';
import card2Image4 from '../Images/card2/image4.jpg';
import card3Image1 from "../Images/card3/image1.jpg";
import card3Image2 from "../Images/card3/image2.jpg";
import card3Image3 from "../Images/card3/image3.jpg";
import card3Image4 from "../Images/card3/image4.jpg";


export const Shopping=()=>{
  const shoppingCard1: CardObjectDTO[] = [
    { image: card1Image1, title: "" },
    { image: card1Image2, title: "" },
    { image: card1Image3, title: "" },
    { image: card1Image4, title: "" },
  ];
  const shoppingCard2: CardObjectDTO[] = [
    { image: card2Image1, title: "Air Conditioners" },
    { image: card2Image2, title: "Refrigerators" },
    { image: card2Image3, title: "Microwaves" },
    { image: card2Image4, title: "Washing Machines" },
  ];;
  const shoppingCard3: CardObjectDTO[] = [
    { image: card3Image1, title: "Cushions, Covers, Bed Sheets & more" },
    { image: card3Image2, title: "Figurines, vases & more" },
    { image: card3Image3, title: "Home Storage" },
    { image: card3Image4, title: "Lightening Solution" },
  ];

  return (
    <div className="shopping-container">
      <ShoppingCard
        titleProp="Continue Shopping Deals"
        imagesArrProp={shoppingCard1}
        linkTitleProp="See All Deals"
      />
      <ShoppingCard
        titleProp="Continue Shopping Deals"
        imagesArrProp={shoppingCard2}
        linkTitleProp="See More"
      />
      <ShoppingCard
        titleProp="Continue Shopping Deals"
        imagesArrProp={shoppingCard3}
        linkTitleProp="Explore All"
      />{" "}
      <div className="shopping-card-container signin-card">
        <p className="shopping-card-title ">Signin For your Best Experience</p>
        <button>Sign in securely</button>
      </div>
    </div>
  );
}

export interface CardObjectDTO{
  image: string;
  title?: string;
}

