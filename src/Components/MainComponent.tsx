import '../Styles/MainComponent.css'
import { Header } from './header.tsx';
import { SelectionHeader } from './SelectionHeader.tsx';

export const MainComponent=()=>{
  return <div className="main-component-container">
    <nav>
      <Header/>
    </nav>
    <SelectionHeader/>
  </div>
}