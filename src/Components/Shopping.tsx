import dumbellImage1 from '../Images/continue_shopping/dubmell.jpg';
import dumbellImage2 from '../Images/continue_shopping/dumbell2.jpg';
import dumbellImage3 from '../Images/continue_shopping/dumbell3.jpg';
import dumbellImage4 from '../Images/continue_shopping/dumbell4.jpg';
import { ShoppingCard } from './ShoppingCard';
import '../Styles/Shopping.css'


export const Shopping=()=>{
  const continueShoppingArr = [dumbellImage1, dumbellImage2, dumbellImage3,dumbellImage4]
  return <div className="shopping-container">
    <ShoppingCard titleProp='Continue Shopping Deals' imagesArrProp={continueShoppingArr} linkTitleProp='See All Deals'/> 
  </div>
}