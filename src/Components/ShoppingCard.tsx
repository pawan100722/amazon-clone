import { CardObjectDTO } from "./Shopping";

export const ShoppingCard = ({
  titleProp,
  imagesArrProp,
  linkTitleProp,
}: ShoppingCardPropDTO) => {
  return (
    <div className="shopping-card-container">
      <p className="shopping-card-title">{titleProp}</p>
      <div className="shopping-card-images-container">
        {imagesArrProp?.map((card: CardObjectDTO) => (
          <>
            <img
              className="shopping-card-image"
              src={card?.image}
              key={card?.image}
            />
          </>
        ))}
      </div>
      <a href="" className="shopping-card-link">
        {linkTitleProp}
      </a>
    </div>
  );
};

interface ShoppingCardPropDTO {
  titleProp: string;
  imagesArrProp: CardObjectDTO[];
  linkTitleProp: string;
}
