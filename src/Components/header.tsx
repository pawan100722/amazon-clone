import { useState } from "react";
import { CONSTANT } from "../CONSTANTS";
import { LocationIcon } from "../Icons/LocationIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import flagImage from "../Images/india_flag.png";
import "../Styles/Header.css";
import { DropdownIcon } from "../Icons/DropdownIcon";
import { CartIcon } from "../Icons/CartIcon";

export const Header = () => {
  const productCategories = CONSTANT.PRODUCT_CATEGORIES;
  const [nativeLanguages] = useState(CONSTANT.NATIVE_LANGUAGES);
  const [isDropdownSelected, setIsDropdownSelected] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageDTO>({
    code: "en",
    name: "English",
    nativeName: "English",
  });
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen]=useState<boolean>(false);
  const [hoveredLanguage, setHoveredLanguage] = useState<LanguageDTO>({
    code: "",
    name: "",
    nativeName: "",
  });
  const [cartCount] = useState<number>(0)

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


  /**
   * It changes the language for header language dropdown
   * @param langParam 
   */
  const handleLanguageRadioChange=(langParam: LanguageDTO)=>{
    setSelectedLanguage(langParam);
    setIsLanguageDropdownOpen(false);
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
          <span className="font-bolder font-xl">Location Update</span>
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

      <div
        className="header-language-dropdown-container white-border"
        onMouseEnter={() => {
          setIsLanguageDropdownOpen(true);
        }}
        onMouseLeave={() => {
          setIsLanguageDropdownOpen(false);
        }}
      >
        <img src={flagImage} alt="Flag Image" className="header-flag-image" />

        <div className="header-language-dropdown ">
          {selectedLanguage?.code}
        </div>

        <div className="language-arrow-down">
          <DropdownIcon />
        </div>
        {isLanguageDropdownOpen && (
          <>
            <div className="language-option-arrow-up"></div>
            <div className="all-language-option-container">
              {nativeLanguages.map((lang, indx) => {
                return (
                  <div
                    className="each-language-option-container"
                    key={`${indx}-${lang?.code}-${lang?.code}`}
                  >
                    <div
                      className={`option-circle ${
                        selectedLanguage?.code === lang.code
                          ? "option-selected"
                          : ""
                      } ${
                        hoveredLanguage?.code === lang?.code
                          ? `background-orange`
                          : ""
                      }`}
                      onClick={() => handleLanguageRadioChange(lang)}
                      onMouseOver={() => {
                        setHoveredLanguage(lang);
                      }}
                      onMouseLeave={() => {
                        setHoveredLanguage(lang);
                      }}
                    ></div>
                    <div
                      className="option-name-container"
                      onClick={() => handleLanguageRadioChange(lang)}
                      onMouseOver={() => {
                        setHoveredLanguage(lang);
                      }}
                      onMouseLeave={() => {
                        setHoveredLanguage(lang);
                      }}
                    >
                      <div>{lang?.code}</div>
                      <div>-</div>
                      <div>{lang?.nativeName}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="header-signin-container white-border">
        <div className="">Hello, sign in</div>
        <div className="font-bolder font-xl">Account & List</div>
      </div>

      <div className="header-signin-container white-border">
        <div className="">Returns</div>
        <div className="font-bolder font-xl">& Order</div>
      </div>

      <div className="header-cart-container white-border">
        <p className="cart-count ">{cartCount}</p>
        <span>
          <CartIcon />
        </span>
      </div>
    </div>
  );
};


interface LanguageDTO {
  code: string;
  name: string;
  nativeName: string;
}
