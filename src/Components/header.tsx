import { LocationIcon } from '../Icons/LocationIcon';
import '../Styles/Header.css';
// import amazonLogo from '../Images/amazon-logo.png'

export const Header =()=>{
  return (
    <div className="home-header-container">
      <a href="https://www.amazon.in/ref=nav_logo">
        {/* <img className="header-amazon-logo" src={amazonLogo} alt="" /> */}
        <div className="header-amazon-logo"></div>
      </a>

      <div className="header-location-container">
        <div className="header-location-icon">
          <LocationIcon />
        </div>
        <div className='header-address-container'>
          <span className="header-address">Bareilly Uttar Pradesh 243001</span>
          <span className='location-update'>Location Update</span>
        </div>
      </div>

      <div className='header-input-container'>
        <input type="text" className='header-input-search-box' />
      </div>
    </div>
  );
}