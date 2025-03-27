export const ShoppingCard = ({
  titleProp,
  imagesArrProp,
  linkTitleProp,
}: ShoppingCardPropDTO) => {
  return (
    <div className="shopping-card-container">
      <p className="shopping-card-title">{titleProp}</p>
      <div className="shopping-card-images-container">
        {imagesArrProp?.map((imgSrc: string) => (
          <img className="shopping-card-image" src={imgSrc} key={imgSrc} />
        ))}
      </div>
      <a href="" className="shopping-card-link">{linkTitleProp}</a>
    </div>
  );
};

interface ShoppingCardPropDTO {
  titleProp: string;
  imagesArrProp: string[];
  linkTitleProp: string;
}
