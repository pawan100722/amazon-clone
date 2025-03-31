import '../Styles/footer.css';
import amazonLogo from '../Images/amazon.svg'
import { CONSTANT } from '../CONSTANTS';

export const FooterComponent=()=>{
  const list1 = CONSTANT.FOOTER_LIST.LIST_1;

  const list2 = CONSTANT.FOOTER_LIST.LIST_2;
  const  list3 = CONSTANT.FOOTER_LIST.LIST_3;

    const list4 = CONSTANT.FOOTER_LIST.LIST_4;
  return (
    <div className="footer-container">
      <div className="footer-section-container">
        <div className="footer-section">
          <ul className="section-li">
            {list1.map((listItem) => (
              <li>
                <a href={listItem?.src}>{listItem.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <ul className="section-li">
            {list2.map((listItem) => (
              <li>
                <a href={listItem?.src}>{listItem.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <ul className="section-li">
            {list3.map((listItem) => (
              <li>
                <a href={listItem?.src}>{listItem.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <ul className="section-li">
            {list4.map((listItem) => (
              <li>
                <a href={listItem?.src}>{listItem.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='footer-section2-container'>
        <img src={amazonLogo} alt="" />
      </div>
    </div>
  );
}