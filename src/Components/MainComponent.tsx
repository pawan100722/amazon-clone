import '../Styles/MainComponent.css'
import { Header } from './header.tsx';
import { ImageSlider } from './ImageSlider.tsx';
import { SelectionHeader } from './SelectionHeader.tsx';
import { Shopping } from './Shopping.tsx';

export const MainComponent=()=>{
  return <div className="main-component-container">
    <nav>
      <Header/>
    </nav>
    <main>
    <SelectionHeader/>
    <ImageSlider/>
    <Shopping/>
    </main>
  </div>
}