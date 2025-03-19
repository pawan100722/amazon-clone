import '../Styles/MainComponent.css'
import { Header } from './header.tsx';

export const MainComponent=()=>{
  return <div className="main-component-container">
    <nav>
      <Header/>
    </nav>
  </div>
}