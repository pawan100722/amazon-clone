import { useState } from "react";
import { CONSTANT } from "../CONSTANTS";
import { LocationIcon } from "../Icons/LocationIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import flagImage from "../Images/india_flag.png";
import "../Styles/Header.css";
import { DropdownIcon } from "../Icons/DropdownIcon";

export const Header = () => {
  const productCategories = CONSTANT.PRODUCT_CATEGORIES;
  const [nativeLanguages] = useState(CONSTANT.NATIVE_LANGUAGES);
  const [isDropdownSelected, setIsDropdownSelected] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<any>({
    code: "en",
    name: "English",
    nativeName: "English",
  });

  /**
   * This function is used to take and set in input values of the header search bar
   * @param eventParam
   */
  const handleInputChange = (
    eventParam: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(eventParam.target.value);
  };

  /**
   * It redirects to the Amazon page, if user clicks the search icon after typing the search keywords
   */
  const handleClick = () => {
    if (searchInput) {
      gotoAmazonPage();
    }
  };

  /**
   * Used to handle the dropdown changes for product categories near search box in the header
   * @param eventParam 
   */
  const handleDropdownChange = (
    eventParam: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (eventParam.target.value === "All") setIsDropdownSelected(false);
    else setIsDropdownSelected(true);
  };

  /**
   * Used when user types something in the searchbar and then hits enter button
   * @param eventParam 
   */
  const handleKeyDown = (eventParam: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchInput && eventParam.key === "Enter") {
      gotoAmazonPage();
    }
  };

  const handleLanguageRadioChange2=(eventParam: React.ChangeEvent<HTMLInputElement>)=>{
    console.log('language select value changes!!!!');
    console.log(eventParam.target.value);
    const languageName: any = eventParam?.target?.value;
    const language= CONSTANT.NATIVE_LANGUAGES[languageName];
    console.log('Selected Language is::::::', language);
  }

  const handleLanguageRadioChange=(langParam: any)=>{
    setSelectedLanguage(langParam);
  }


  /**
   * It redirects to the amazon page
   */
  const gotoAmazonPage = () => {
    const url = `https://www.amazon.in/s?k=${searchInput}`;
    window.location.href = url;
  };

  return (
    <div className="home-header-container">
      <a
        href="https://www.amazon.in/ref=nav_logo"
        className="amazon-logo-container white-border"
      >
        <div className="header-amazon-logo"></div>
      </a>

      <div className="header-location-container white-border">
        <div className="header-location-icon">
          <LocationIcon />
        </div>
        <div className="header-address-container">
          <span className="header-address">Bareilly Uttar Pradesh 243001</span>
          <span className="location-update">Location Update</span>
        </div>
      </div>

      <div className="header-input-container">
        <select
          name="product"
          className="header-input-dropdown"
          onChange={(e) => handleDropdownChange(e)}
          style={{ width: `${isDropdownSelected ? "160px" : "36px"}` }}
        >
          {productCategories.map((prod, index) => (
            <option key={index}>{prod}</option>
          ))}
        </select>
        <input
          type="text"
          className="header-input-search-box"
          placeholder="Search Amazon.in"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
        <div className="input-search-icon" onClick={handleClick}>
          <SearchIcon />
        </div>
      </div>

      <div className="header-language-dropdown-container white-border">
        <img src={flagImage} alt="Flag Image" className="header-flag-image" />

        <div className="header-language-dropdown ">
          {selectedLanguage?.code}
        </div>

        <div className="language-arrow-down">
          <DropdownIcon />
        </div>
        <div className="language-option-arrow-up"></div>
        <div className="all-language-option-container">
          {nativeLanguages.map((lang,indx) => {
            return (
              <div
                className="each-language-option-container"
                key={`${indx}-${lang?.code}-${lang?.code}`}
              >
                <div className={`option-circle ${selectedLanguage?.code === lang.code?'option-selected':''}`}></div>
                <div className="option-name-container">
                  <div>{lang?.code}</div>
                  <div>-</div>
                  <div>{lang?.nativeName}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
