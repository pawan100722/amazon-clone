import "../Styles/MainComponent.css";
import { Header } from "./header.tsx";
import { ImageSlider } from "./ImageSlider.tsx";
import { SelectionHeader } from "./SelectionHeader.tsx";
import { Shopping } from "./Shopping.tsx";
import '../Styles/footer.css'
import { FooterComponent } from "./Footer.tsx";

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
          <div className="personalized-container">
            <p>See Personalized recommendations</p>
            <button>Sign in</button>
            <div>
              New Customer? <a href="">Start Here</a>
            </div>
          </div>

          <div className="back-to-top" onClick={()=> scrollTo({
            top:0,
            behavior:'smooth'
          })}>Back to Top</div>
        </section>
      </main>

      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
};
