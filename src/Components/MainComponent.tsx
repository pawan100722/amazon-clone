import "../Styles/MainComponent.css";
import { Header } from "./header.tsx";
import { ImageSlider } from "./ImageSlider.tsx";
import { SelectionHeader } from "./SelectionHeader.tsx";
import { Shopping } from "./Shopping.tsx";
import '../Styles/footer.css'
import { FooterComponent } from "./Footer.tsx";
import { PersonalizedContainer } from "./PersonalizedContainer.tsx";

export const MainComponent = () => {
  return (
    <div className="main-component-container">
      <nav>
        <Header />
      </nav>
      <main>
        <SelectionHeader />
        <ImageSlider />
        <Shopping />
        <section>
          <PersonalizedContainer/>
        </section>
      </main>

      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
};
